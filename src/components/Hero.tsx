"use client";

import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full border-l border-black/5 hidden md:block" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-end">

                {/* Main Headline Area */}
                <div className="md:col-span-2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center gap-4 font-mono text-xs text-neutral-500 uppercase tracking-widest"
                    >
                        <span className="inline-block w-2 h-2 bg-black rounded-full" />
                        Available for freelance
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-black"
                    >
                        Building the <br />
                        <span className="italic relative pr-4">
                            Decentralized
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-black/10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span> <br />
                        Future.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="font-mono text-sm md:text-base text-neutral-600 max-w-lg mt-8 leading-relaxed"
                    >
                        Specialized in crafting high-end digital experiences for the Web3 ecosystem.
                        Blending brutalist aesthetics with seamless interaction.
                    </motion.p>
                </div>

                {/* Code Block Visual - Desktop Right */}
                <div className="hidden md:flex flex-col justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-neutral-50 border border-black/10 p-6 font-mono text-xs text-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300"
                    >
                        <div className="flex gap-2 mb-4 border-b border-black/5 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <pre className="whitespace-pre-wrap">
                            <code>
                                <span className="text-purple-600">const</span> <span className="text-blue-600">profile</span> = {"{"}
                                {"\n"}  name: <span className="text-green-600">&quot;Mert Cicekci&quot;</span>,
                                {"\n"}  role: <span className="text-green-600">&quot;Creative Dev&quot;</span>,
                                {"\n"}  stack: [<span className="text-green-600">&quot;Next.js&quot;</span>, <span className="text-green-600">&quot;Solidity&quot;</span>],
                                {"\n"}  status: <span className="text-green-600">&quot;Online&quot;</span>
                                {"\n"}
                                {"}"};
                            </code>
                        </pre>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
