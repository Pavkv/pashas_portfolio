'use client';

import { useEffect, useState } from 'react';
import { motion } from "motion/react";
import { DateTime } from 'luxon';
import Image from 'next/image';
import { basePath } from "@/utils/functions";

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
        <section
            id="intro"
            className="w-full px-4 sm:px-6 md:px-8 py-24 flex flex-col pb-24 pt-16 text-[#2b2b2b] relative"
        >
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h1 className="max-h-[325px] text-[20.25vw] font-medium leading-[0.9] tracking-tighter text-center">
                    Pavel Zobov
                </h1>
            </motion.div>

            <div className="flex-1 flex flex-col lg:flex-row items-stretch justify-between gap-12 mt-10 text-center lg:text-left">

                {/* Left Text Block */}
                <motion.div
                    className="flex flex-col justify-center items-center lg:items-start max-w-2xl mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                    <motion.p
                        className="text-xl sm:text-2xl md:text-3xl italic mb-6 max-w-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Transforming complexity into elegance, building intuitive experiences that resonate far beyond the screen.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        className="inline-block bg-[#2b2b2b] text-[#e8e8e2] hover:bg-[#a31914] px-6 py-4 rounded-full text-lg transition-colors"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div className="flex items-center gap-2 text-[#e8e8e2] text-lg sm:text-xl">
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

                {/* Middle Image */}
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <div className="relative h-[45vh] sm:h-[50vw] md:h-[30vw] aspect-[3/4]">
                        <Image
                            src={`${basePath}/title_image.jpg`}
                            alt="Title Image"
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                </motion.div>

                {/* Right Date & Location */}
                <motion.div
                    className="flex flex-col justify-end items-center lg:items-end w-full"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <div className="text-center lg:text-right text-base sm:text-lg md:text-xl space-y-2">
                        <div>
                            Germantown, MD
                            <Image
                                src={`${basePath}/location_icon.svg`}
                                alt="Location Icon"
                                width={18}
                                height={18}
                                className="inline-block mb-1 ml-1"
                            />
                        </div>
                        <div className="font-mono text-4xl sm:text-5xl md:text-6xl tracking-tighter">
                            {currentDate}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}