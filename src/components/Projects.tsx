"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Project = {
    title: string;
    category: string;
    link: string;
};

const projects: Project[] = [
    {
        title: "Algorand Documentation",
        category: "Educational Resource",
        link: "https://www.risein.com/courses/build-on-algorand",
    },
    {
        title: "ODTÜ Solidity Bootcamp",
        category: "Bootcamp",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7381291760569753600/",
    },
    {
        title: "Stellar Prep Series",
        category: "+1450 Builders Registered",
        link: "https://www.risein.com/bootcamps/stellar-fullstack-bootcamp",
    },
    {
        title: "Stellar Hack Pera Mentorship",
        category: "Turkey's Largest IRL Web3 Hackathon",
        link: "https://www.risein.com/blog/stellar-hack-pera-turkeys-largest-irl-web3-hackathon-with-200-participants-70-projects",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-white text-black">
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="font-serif text-5xl md:text-7xl">Selected Works</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link
                            href={project.link}
                            target="_blank"
                            className="group block h-full w-full border border-black/10 bg-neutral-50 hover:bg-black hover:text-white transition-all duration-300 aspect-[4/3] relative overflow-hidden"
                        >
                            {/* Noise Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none z-0 mix-blend-overlay">
                                <div className="w-full h-full bg-[url('/noise.svg')] bg-repeat animate-noise" />
                            </div>

                            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                                </div>

                                <div>
                                    <h3 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
