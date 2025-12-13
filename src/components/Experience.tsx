"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experienceData = [
    {
        date: "AUG 2025 - PRESENT",
        role: "DevRel Engineer",
        company: "Rise In",
        description: "Driving developer adoption and education. Previously Intern (May-Jul 2025).",
    },
    {
        date: "SEP 2025 - PRESENT",
        role: "Ambassador",
        company: "Stellar Dev Foundation",
        description: "Representing the Stellar network and supporting the local ecosystem.",
    },
    {
        date: "MAY 2025 - PRESENT",
        role: "Board Member & Dev Lead",
        company: "ODTÜ Blockchain",
        description: "Leading technical initiatives. Member since Sep 2024.",
    },
    {
        date: "MAY 2025 - JUL 2025",
        role: "Ops & Analytics Intern",
        company: "Patika.dev",
        description: "Optimized operational workflows and data analysis.",
    },
    {
        date: "APR 2025 - JUN 2025",
        role: "Full Stack Eng",
        company: "Campus Arc",
        description: "Smart Contract Intern (Dec 24 - Apr 25). Built scalable dApps.",
    },
    {
        date: "OCT 2021 - 2024",
        role: "Founder",
        company: "Tears Of Astrea",
        description: "Launched and managed a gaming community project.",
    },
];

interface ExperienceItem {
    date: string;
    role: string;
    company: string;
    description: string;
}

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section id="experience" ref={containerRef} className="py-24 px-6 md:px-12 bg-white relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-5xl md:text-7xl mb-16 text-center md:text-left">
                    On-Chain History
                </h2>

                <div className="relative pl-8 md:pl-12 border-l border-black/10">
                    {/* Animated Scroll Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-black origin-top"
                    />

                    <div className="space-y-16">
                        {experienceData.map((item, index) => (
                            <ExperienceNode key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceNode({ item }: { item: ExperienceItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            {/* Node Dot */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 bg-white border border-black rounded-full flex items-center justify-center"
            >
                <div className="w-2 h-2 bg-black rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 items-baseline">
                <span className="font-mono text-sm text-neutral-500 tracking-wider">
                    {item.date}
                </span>
                <div className="md:col-span-2">
                    <h3 className="font-serif text-2xl md:text-3xl font-medium">
                        {item.role}
                    </h3>
                    <p className="font-mono text-sm uppercase tracking-wide text-neutral-400 mt-1 mb-4">
                        at {item.company}
                    </p>
                    <p className="font-mono text-sm text-neutral-600 leading-relaxed max-w-lg">
                        {item.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
