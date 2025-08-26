'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { handleScroll } from '@/utils/functions';

export default function Footer() {
    const [localTime, setLocalTime] = useState<string>('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                timeZoneName: 'short',
            });
            setLocalTime(timeString);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const buttonStyle =
        'relative group hover:text-[#7c0a02] transition bg-transparent border-none outline-none cursor-pointer inline-block';
    const underline =
        'absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7c0a02] transition-all group-hover:w-full';

    return (
        <footer className="w-full px-4 sm:px-6 md:px-8 py-16 bg-[#f5f5f0] text-[#2b2b2b]">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-16 items-start">
                {/* Menu */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Menu</h3>
                    <hr className="mb-4 border-[#ccc]" />
                    <ul className="space-y-3 text-[#444]">
                        {[
                            { id: 'intro', label: 'Home' },
                            { id: 'expertises', label: 'Expertises' },
                            { id: 'projects', label: 'Projects' },
                            { id: 'about', label: 'About' },
                            { id: 'contact', label: 'Contact' },
                        ].map((item) => (
                            <li key={item.id}>
                                <button onClick={() => handleScroll(item.id)} className={buttonStyle}>
                                    {item.label}
                                    <span className={underline}></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Socials</h3>
                    <hr className="mb-4 border-[#ccc]" />
                    <ul className="space-y-3 text-[#444]">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/pavkv101/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonStyle}
                            >
                                LinkedIn
                                <span className={underline}></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Pavkv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonStyle}
                            >
                                GitHub
                                <span className={underline}></span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Local Time */}
                <div className="flex flex-col items-start md:items-end">
                    <h3 className="text-sm font-semibold uppercase mb-1">Local Time</h3>
                    <p className="font-mono text-sm text-[#444]">{localTime}</p>
                </div>
            </div>

            {/* Scroll to top button */}
            <div className="fixed bottom-8 right-8 max-w-screen overflow-x-hidden">
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full bg-[#d4d4c6] text-[#2b2b2b] flex items-center justify-center shadow-md hover:bg-[#aaa] transition"
                    aria-label="Scroll to top"
                >
                    <ArrowUp />
                </button>
            </div>
        </footer>
    );
}