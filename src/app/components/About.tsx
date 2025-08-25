'use client';
import {motion} from 'motion/react';
import Image from 'next/image';
import {basePath} from "@/utils/functions";

const skills = {
    'Languages & Tools': [
        'Typescript',
        'JavaScript',
        'Python',
        'SQL',
        'Java',
        'Git',
        'Postman',
        'Docker',
        'Firebase'
    ],
    'Frameworks & Libraries': [
        'React',
        'Node.js',
        'Express.js',
        'Flask',
        'Bootstrap',
        'jQuery',
        'TailwindCSS',
        'Framer Motion'
    ],
    'Core CS Concepts': [
        'DSA',
        'DBMS',
        'OOP',
        'Operating Systems',
        'System Design'
    ]
};

export default function About() {
    return (
        <section
            id="about"
            className="w-full px-4 sm:px-6 md:px-8 py-24 text-[#2b2b2b]"
        >
            <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between">
                <motion.h2
                    className="text-5xl md:text-7xl font-extrabold tracking-tight flex flex-col items-start gap-1 md:w-1/2"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <span>ENGINEER</span>
                    <span>PROBLEM SOLVER</span>
                    <span className="flex items-baseline gap-2 mt-[-15px]">
                        <span>BUILDER</span>
                        <span className="pt-5 scale-y-[0.75] ml-1">/</span>
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-12 md:w-1/2"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-center">Skills</h2>

                    <div className="flex flex-wrap gap-6 justify-end">
                        {Object.entries(skills).map(([category, items], i) => (
                            <div key={i} className="min-w-[180px]">
                                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                                <ul className="space-y-2 font-mono text-sm">
                                    {items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center md:items-start py-24 justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="relative w-48 sm:w-64 md:w-72 aspect-[3/4]"
                >
                    <Image
                        src={`${basePath}/title_image.jpg`}
                        alt="Pavel Zobov"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 max-w-3xl text-left"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-12">
                        I&apos;m a software engineer who thrives on turning complex ideas into scalable, high-performance web applications.
                    </h3>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
                        <p className="text-xl font-semibold whitespace-nowrap">(ABOUT ME)</p>
                        <p className="text-lg leading-relaxed flex-1 min-w-[280px]">
                            I&apos;m a full-stack software engineer passionate about creating elegant, efficient, and intuitive digital experiences. My toolkit includes JavaScript, TypeScript, Python, Java, and C#, and I love pairing these with modern frameworks like React, Node.js, Express, MongoDB, and PostgreSQL.
                            <br /><br />
                            From crafting intuitive user interfaces to fine-tuning performance and implementing secure authentication with JWT, I focus on building products that are both seamless and robust. I&apos;ve taken full-stack projects from concept to deployment—always with a focus on scalability and accessibility.
                            <br /><br />
                            Collaboration drives my process. I&apos;ve mentored teams, optimized workflows, and built scalable solutions while balancing technical depth and user-focused design.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}