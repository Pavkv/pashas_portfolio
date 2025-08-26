// app/api/track/route.ts

import { NextRequest, NextResponse } from 'next/server';
import {Redis} from "@upstash/redis";

function getClientIp(req: NextRequest) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    return forwardedFor?.split(',')[0]?.trim() || 'unknown';
}

async function hash(input: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

export async function GET(req: NextRequest) {
    const redis = Redis.fromEnv();

    const ip = getClientIp(req);
    const hashedIp = await hash(ip);

    await redis.sadd('unique-visitors', hashedIp);

    const count = await redis.scard('unique-visitors');
    return NextResponse.json({ count });
}