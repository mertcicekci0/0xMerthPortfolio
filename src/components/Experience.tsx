"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experienceData = [
    {
        date: "2024 - PRESENT",
        role: "Senior Creative Developer",
        company: "Studio 404",
        description: "Leading the frontend achievements for Web3 protocols. Built high-performance dApps.",
    },
    {
        date: "2022 - 2024",
        role: "Frontend Engineer",
        company: "DefiLlama",
        description: "Contributed to the core analytics dashboard. Optimized rendering for large datasets.",
    },
    {
        date: "2020 - 2022",
        role: "UI Engineer",
        company: "Freelance",
        description: "Shipped 15+ websites for crypto startups. Specialized in motion design and interaction.",
    },
    {
        date: "2019 - 2020",
        role: "Junior Dev",
        company: "Agency X",
        description: "Full stack development using React and Node.js.",
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
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-5xl md:text-7xl mb-16 text-center md:text-left">
                    The Ledger
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
            initial={{ opacity: 0.2, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
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
