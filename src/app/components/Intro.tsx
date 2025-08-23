'use client';

import { useEffect, useState } from 'react';
import { motion } from "motion/react"
import { DateTime } from 'luxon';
import Image from 'next/image';

export default function Intro() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = DateTime.now();
            setCurrentDate(now.toFormat("MMM''yy").toUpperCase());
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen flex flex-col px-6 pb-24 text-[#2b2b2b] relative" id="intro">
            <motion.div
                className="w-full pt-12"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h1 className="text-[20.25vw] font-medium leading-[0.9] tracking-tighter scale-y-75">
                    Pavel Zobov
                </h1>
            </motion.div>

            <div className="flex-1 flex flex-col md:flex-row items-stretch gap-12 text-center md:text-left">

                <motion.div
                    className="flex flex-col justify-center items-center md:items-start h-full max-w-md mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                    <motion.p
                        className="text-3xl italic mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Transforming complexity into elegance, building intuitive experiences that resonate far beyond the screen.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        className="inline-block bg-[#2b2b2b] text-[#e8e8e2] hover:bg-[#a31914] px-6 py-6 rounded-full text-lg transition-colors"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div className="flex items-center gap-2 text-[#e8e8e2] text-2xl">
                            <span>Contact Me</span>
                            <div className="w-4 h-4 transform rotate-90 mb-[-1]">
                                <svg
                                    viewBox="0 0 427.5 427.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full fill-current"
                                >
                                    <g transform="matrix(1.25,0,0,-1.25,0,427.5)">
                                        <g transform="scale(.24)">
                                            <path
                                                d="m5.25 358.25v1061h1062l350-350h-807l793-793-257-257-791 790v-803l-350 352"
                                                fill="currentColor"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </motion.a>
                </motion.div>

                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <div className="relative h-full aspect-[3/4]">
                        <Image
                            src="/pashas_portfolio/title_image.jpg"
                            alt="Title Image"
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-end items-center md:items-end h-full w-full"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <div className="text-right text-xl">
                        Germantown, MD
                        <Image
                            src="/pashas_portfolio/location_icon.svg"
                            alt="Location Icon"
                            width={18}
                            height={18}
                            className="inline-block mb-4 ml-1"
                        />
                        <br />
                        <span className="font-mono text-6xl tracking-tighter">{currentDate}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}