'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { handleScroll } from "@/utils/functions";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ['expertises', 'projects', 'about', 'contact'];

    const handleClick = (id: string) => {
        handleScroll(id);
        setIsOpen(false);
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md text-[#6b645c] w-screen"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-5">
                <motion.a
                    onClick={() => handleScroll('intro')}
                    className="text-2xl md:text-3xl font-bold tracking-tight cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Full-Stack Software Engineer
                </motion.a>

                {/* Desktop Nav */}
                <motion.nav
                    className="hidden md:flex flex-wrap gap-6 text-sm md:text-base font-medium"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {navLinks.map((id) => (
                        <motion.button
                            key={id}
                            onClick={() => handleScroll(id)}
                            className="relative group hover:text-[#7c0a02] transition bg-transparent border-none outline-none cursor-pointer"
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7c0a02] transition-all group-hover:w-full" />
                        </motion.button>
                    ))}
                </motion.nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#6b645c] hover:text-[#7c0a02] transition"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden px-6 pb-6 pt-2 space-y-4 bg-[#e8e8e2] text-[#2b2b2b] text-base font-medium shadow-md"
                    >
                        {navLinks.map((id) => (
                            <button
                                key={id}
                                onClick={() => handleClick(id)}
                                className="block w-full text-left hover:text-[#7c0a02] transition"
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}