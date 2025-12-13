"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "DeFi Dashboard",
        category: "Web3 / Finance",
        className: "md:col-span-2 md:row-span-2",
        image: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-200 to-white",
    },
    {
        title: "NFT Marketplace",
        category: "Commerce",
        className: "md:col-span-1 md:row-span-1",
        image: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-neutral-100 via-neutral-300 to-neutral-100",
    },
    {
        title: "DAO Governance",
        category: "Protocol",
        className: "md:col-span-1 md:row-span-1",
        image: "bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#00000005_10px,#00000005_20px)]",
    },
    {
        title: "Analytics Suite",
        category: "Data Layout",
        className: "md:col-span-3 md:row-span-1",
        image: "bg-neutral-50",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
                <h2 className="font-serif text-5xl md:text-7xl">Selected Works</h2>
                <span className="font-mono text-xs hidden md:block">[2023 - 2024]</span>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 0.98,
                            transition: { duration: 0.1 }
                        }}
                        className={`group relative border border-black/10 overflow-hidden bg-white hover:bg-black hover:text-white transition-colors duration-200 ${project.className}`}
                    >
                        <div className={`absolute inset-0 z-0 opacity-50 group-hover:opacity-10 transition-opacity duration-500 ${project.image}`} />

                        {/* Noise Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none z-0 mix-blend-overlay">
                            <div className="w-full h-full bg-[url('/noise.svg')] bg-repeat animate-noise" />
                        </div>

                        <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs border border-current px-2 py-1 rounded-full opacity-60">
                                    {project.category}
                                </span>
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl md:text-4xl group-hover:animate-glitch">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
