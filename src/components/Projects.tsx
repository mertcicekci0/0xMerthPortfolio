"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
    title: string;
    category: string;
    description?: string;
    link?: string;
    className?: string;
    image?: string;
};

const projects: Project[] = [
    {
        title: "Algorand Documentation",
        category: "Education",
        description: "Author of official educational documentation for Algorand builders.",
        link: "https://www.risein.com/courses/build-on-algorand",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "ODTÜ Solidity",
        category: "Bootcamp",
        description: "Instructor for university blockchain bootcamp.",
        link: "https://www.linkedin.com/in/cicekci-mert/",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Stellar Hack Pera",
        category: "Mentorship",
        description: "Mentored teams at Turkey's largest hackathon.",
        link: "https://www.risein.com/blog/stellar-hack-pera",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Stellar Prep Series",
        category: "Community",
        description: "Registered 1450+ developers for hackathon preparation.",
        link: "https://www.risein.com/bootcamps/stellar-fullstack-bootcamp",
        className: "md:col-span-2 md:row-span-1",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-white text-black">
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
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{
                            scale: 0.98,
                            transition: { duration: 0.1 }
                        }}
                        className={`group relative border border-black/10 overflow-hidden bg-white hover:bg-black hover:text-white transition-colors duration-200 block ${project.className}`}
                    >
                        {project.image && (
                            <div className={`absolute inset-0 z-0 opacity-50 group-hover:opacity-10 transition-opacity duration-500 ${project.image}`} />
                        )}

                        {/* Noise Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none z-0 mix-blend-overlay">
                            <div className="w-full h-full bg-[url('/noise.svg')] bg-repeat animate-noise" />
                        </div>

                        <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                                    {project.category}
                                </span>
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl md:text-4xl group-hover:animate-glitch mb-2">
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
