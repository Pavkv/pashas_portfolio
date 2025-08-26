'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const projects = [
    {
        id: 1,
        name: 'Theatre Experiment',
        subtitle: 'Local Theater Website',
        year: '2025',
        tag: 'In Development',
        description: 'A modern reimagining of the Theatre Experiment website — a multilingual, media-rich, and accessible digital home for a vibrant theater group.',
        url: 'https://theaterexperiment.com',
        video: "/theater_experiment.mp4",
    },
    {
        id: 2,
        name: 'Flash Point',
        subtitle: 'News Aggregator',
        year: '2025',
        tag: 'Full-Stack',
        description: 'Flash Point is a full-stack news app that helps users cut through information overload by enabling keyword-based search, save, and filter of articles.',
        url: 'https://flashpoint.twilightparadox.com/',
        video: "/flash_point.mp4",
    },
    {
        id: 3,
        name: 'What to Wear',
        subtitle: 'Weather Assistant',
        year: '2025',
        tag: 'Full-Stack',
        description: 'WTWR is a weather-based clothing recommendation app that offers personalized outfit suggestions based on real-time weather data, helping users dress confidently and appropriately for current conditions.',
        url: 'https://whatowearexpress.twilightparadox.com/',
        video: "/what_to_wear.mp4",
    },
    {
        id: 4,
        name: 'Spots',
        subtitle: 'Social Media App',
        year: '2025',
        tag: 'Front-End',
        description: 'SPOTS is a responsive social media app that enables users to share photos and interact with others, offering a simplified, intuitive platform for visual connection and engagement.',
        url: 'https://pavkv.github.io/se_project_spots/',
        video: "/spots.mp4",
    }
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                        setActiveIndex(index);
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        const sections = containerRef.current?.querySelectorAll('.project-block');
        sections?.forEach(section => observer.observe(section));

        return () => {
            sections?.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <section
            id="projects"
            className="w-full px-4 sm:px-6 md:px-8 py-24 bg-black text-[#e8e8e2] box-border scroll-mt-14"
        >
            <motion.h2
                className="text-5xl md:text-7xl font-extrabold mb-24 tracking-tight flex items-end gap-1"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                MY PROJECTS
                <span className="mb-1 scale-y-[0.85] ml-1">/</span>
            </motion.h2>

            <div className="flex relative flex-col md:flex-row">
                {/* Sticky Counter */}
                <div className="w-24 md:w-48 sticky top-32 h-fit pl-6">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[12vw] font-extrabold text-[#666] leading-none"
                    >
                        {String(projects[activeIndex].id).padStart(2, '0')}
                    </motion.div>
                </div>

                {/* Projects List */}
                <div
                    className="flex-1 flex flex-col gap-32 md:gap-44 px-2 md:px-8 py-16 max-w-4xl ml-auto"
                    ref={containerRef}
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            data-index={i}
                            className="project-block space-y-8"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.1 * i }}
                        >
                            {/* Video Preview */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-xl group border border-neutral-700 shadow-xl">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-2xl font-bold tracking-widest text-white">
                                    {project.name.toUpperCase()}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-2">
                                <p className="uppercase text-sm text-[#999]">{project.subtitle}</p>
                                <div className="flex justify-between items-center flex-wrap gap-2">
                                    <h3 className="text-2xl font-semibold break-words">{project.name}</h3>
                                    <div className="flex gap-2 text-xs flex-wrap">
                                        <span className="px-3 py-1 border border-[#888] rounded-full">{project.tag}</span>
                                        <span className="px-3 py-1 border border-[#888] rounded-full">{project.year}</span>
                                    </div>
                                </div>
                                <p className="text-base break-words">{project.description}</p>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-5 py-2 text-sm font-medium rounded-full border border-[#888] text-[#e8e8e2] hover:bg-[#7c0a02] hover:border-[#7c0a02] transition-colors"
                                >
                                    View Live →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}