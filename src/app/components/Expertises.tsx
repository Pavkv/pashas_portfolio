'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const expertises = [
    {
        id: '01',
        title: 'Full-Stack Development',
        description:
            'I build complete web solutions — from robust backends to polished frontends — engineered for performance, security, and long-term maintainability.',
        bullets: [
            'Design and implementation of RESTful APIs with secure authentication (JWT)',
            'Integration of MongoDB, PostgreSQL, and Firebase for scalable data handling',
            'Deployment-ready code using CI/CD pipelines and test automation'
        ]
    },
    {
        id: '02',
        title: 'User-Centered Interfaces',
        description:
            'I craft thoughtful, responsive, and inclusive interfaces that elevate user experience across cultures, devices, and abilities.',
        bullets: [
            'Multilingual design (i18n) with support for accessibility and dark mode',
            'Component-driven development using React, Tailwind CSS, and design systems',
            'Media-rich UI with smooth transitions, modals, and interactive galleries'
        ]
    },
    {
        id: '03',
        title: 'System Optimization',
        description:
            'I refine complexity into clarity — optimizing both data flows and user journeys to create systems that are fast, stable, and intuitive.',
        bullets: [
            'Performance profiling, lazy loading, and scalable architecture',
            'Data transformation pipelines, API integration, and ETL workflows',
            'Frontend and backend debugging for speed, clarity, and reliability'
        ]
    }
];

export default function Expertises() {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visible, setVisible] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const updated: typeof visible = {};
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    updated[index] = entry.isIntersecting;
                });
                setVisible((prev) => ({ ...prev, ...updated }));
            },
            { threshold: 0.4 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section
            id="expertises"
            className="bg-black text-[#e8e8e2] w-screen px-4 sm:px-6 md:px-8 py-24 space-y-32"
        >
            <motion.h2
                className="text-5xl md:text-7xl font-extrabold mb-24 tracking-tight flex items-end gap-1"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                EXPERTISES
                <span className="mb-1 scale-y-[0.85] ml-1">/</span>
            </motion.h2>

            {expertises.map((expertise, index) => (
                <motion.div
                    key={index}
                    data-index={index}
                    ref={(el) => {
                        sectionRefs.current[index] = el;
                    }}
                    className="relative grid md:grid-cols-[1fr_3fr] gap-12 items-start max-w-6xl mx-auto overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                    <div className="text-[14vw] md:text-[6vw] font-bold text-[#444] md:text-right text-left whitespace-nowrap">
                        ({expertise.id})
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-semibold">{expertise.title}</h3>
                        <p className="text-[#bbb] text-lg leading-relaxed break-words">{expertise.description}</p>
                        <ul className="space-y-3 border-t border-[#333] pt-4">
                            {expertise.bullets.map((bullet, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span className="text-sm text-[#666]">0{i + 1}</span>
                                    <span className="font-medium text-[#f0f0f0] break-words">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
