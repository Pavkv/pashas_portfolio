import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

const ipSubmissionMap = new Map<string, number>();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message, honeypot } = body;

        if (honeypot) {
            return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
        }

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields.' }, { status: 400 });
        }

        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        const last = ipSubmissionMap.get(ip) || 0;
        const now = Date.now();

        if (now - last < 60_000) {
            return NextResponse.json({ error: 'Too many submissions. Please wait.' }, { status: 429 });
        }

        ipSubmissionMap.set(ip, now);

        if (!process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
            return NextResponse.json({ error: 'Server email config missing.' }, { status: 500 });
        }

        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: `New Contact from ${name}`,
            html: `
                <p><strong>Name:</strong> ${sanitize(name)}</p>
                <p><strong>Email:</strong> ${sanitize(email)}</p>
                <p><strong>Message:</strong><br>${sanitize(message)}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Resend error:', err);
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}

function sanitize(str: string): string {
    return str.replace(/[&<>"']/g, (match) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    }[match] || match));
}