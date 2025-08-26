'use client';

import { motion } from 'motion/react';
import React, { useState } from 'react';

const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 0.6 }
    })
};

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setError('');

        if (!form.name.trim()) {
            setError('Please enter your name.');
            return;
        }
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!form.message.trim()) {
            setError('Please enter your message.');
            return;
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const result = await res.json();
            if (res.ok) {
                setSubmitted(true);
                setForm({ name: '', email: '', message: '', honeypot: '' });
            } else {
                console.error(result?.error || 'Unknown error');
                setError('Failed to send. Try again later.');
            }
        } catch (err) {
            console.error('Failed to send message:', err);
            setError('Network error. Please try again.');
        }
    };

    return (
        <motion.section
            id="contact"
            className="w-full px-4 sm:px-6 md:px-8 py-24 bg-gradient-to-b from-[#e8e8e2] to-[#2b2b2b] text-[#e8e8e2] flex flex-col"
            initial={{ opacity: 0.7, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="text-5xl md:text-7xl font-extrabold mb-20 tracking-tight text-[#2b2b2b] text-left w-full max-w-screen-xl mx-auto"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <span className="flex items-end gap-2">
                    LET&apos;S CONNECT <span className="mb-1 scale-y-[0.85]">/</span>
                </span>
                <span className="mt-1">WORK TOGETHER</span>
            </motion.h2>

            <motion.form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-[#1a1a1a]/90 border border-[#333] backdrop-blur-md rounded-xl px-6 sm:px-8 py-12 space-y-8 shadow-2xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                noValidate
            >
                <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                <motion.h3
                    className="text-center text-2xl font-bold text-[#e8e8e2]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Say Hello
                </motion.h3>

                {['name', 'email', 'message'].map((field, i) => {
                    const isTextarea = field === 'message';
                    const placeholder =
                        field === 'name'
                            ? 'Drop a name'
                            : field === 'email'
                                ? 'Wanna hear back? Add your email'
                                : 'Say hello or drop a note...';

                    const props = {
                        name: field,
                        required: true,
                        placeholder,
                        value: form[field as keyof typeof form],
                        onChange: handleChange,
                        className:
                            'w-full p-4 rounded-md bg-[#2b2b2b] placeholder-[#aaa] text-[#e8e8e2] focus:outline-none focus:ring-2 focus:ring-[#7c0a02] transition resize-none',
                    };

                    return (
                        <motion.div
                            custom={i}
                            key={field}
                            variants={inputVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            {isTextarea ? (
                                <textarea rows={5} {...props} />
                            ) : (
                                <input type={field === 'email' ? 'email' : 'text'} {...props} />
                            )}
                        </motion.div>
                    );
                })}

                <motion.button
                    type="button"
                    onClick={handleSubmit}
                    aria-label="Submit contact form"
                    disabled={submitted}
                    whileHover={{ scale: submitted ? 1 : 1.05 }}
                    whileTap={{ scale: submitted ? 1 : 0.95 }}
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed ${
                        submitted
                            ? 'bg-[#7c0a02] text-[#e8e8e2] animate-pulse'
                            : 'bg-[#e8e8e2] text-[#2b2b2b] hover:bg-[#7c0a02] hover:text-[#e8e8e2]'
                    }`}
                >
                    {submitted ? 'Message Sent ✓' : 'Send Message →'}
                </motion.button>

                {error && (
                    <p className="text-center text-red-400 text-sm">
                        {error}
                    </p>
                )}
            </motion.form>
        </motion.section>
    );
}