'use client';
import { motion } from 'motion/react';
import {handleScroll} from "@/utils/functions";

export default function Header() {
    return (
        <motion.header
            className="fixed top-0 left-0 w-full backdrop-blur-md text-[#6b645c] z-50"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-screen-2xl mx-auto px-8 py-5 flex justify-between items-center">
                <motion.a
                    onClick={() => handleScroll('intro')}
                    className="text-4xl font-bold tracking-tight cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Full-Stack Software Engineer
                </motion.a>

                <motion.nav
                    className="flex space-x-8 text-base font-medium"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    {['expertises', 'projects', 'about', 'contact'].map((id) => (
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
            </div>
        </motion.header>
    );
}