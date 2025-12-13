"use client";


import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";


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
                <div className="hidden md:flex flex-col justify-center items-center h-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-neutral-50 border border-black/10 p-6 font-mono text-xs text-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 min-w-[340px] scale-110 origin-center relative -top-12"
                    >
                        <div className="flex gap-2 mb-4 border-b border-black/5 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <TypewriterCode />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TypewriterCode() {
    const codeLines = useMemo(() => [
        { text: "const ", color: "text-purple-600" },
        { text: "profile ", color: "text-blue-600" },
        { text: "= {\n", color: "text-black" },
        { text: "  name: ", color: "text-black" },
        { text: "\"Mert Cicekci\"", color: "text-green-600" },
        { text: ",\n", color: "text-black" },
        { text: "  role: ", color: "text-black" },
        { text: "\"Web3 Growth, DevRel, Creative Dev\"", color: "text-green-600" },
        { text: ",\n", color: "text-black" },
        { text: "  stack: ", color: "text-black" },
        { text: "\"Limitless (powered by AI)\"", color: "text-green-600" },
        { text: ",\n", color: "text-black" },
        { text: "  status: ", color: "text-black" },
        { text: "\"Online\"", color: "text-green-600" },
        { text: "\n};", color: "text-black" },
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= codeLines.length) return;

        const currentLine = codeLines[currentIndex];

        let timeout: NodeJS.Timeout;

        if (charIndex < currentLine.text.length) {
            timeout = setTimeout(() => {
                setCharIndex(prev => prev + 1);
            }, 30 + Math.random() * 50);
        } else {
            timeout = setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
                setCharIndex(0);
            }, 50);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, charIndex, codeLines]);

    return (
        <pre className="whitespace-pre-wrap font-mono text-xs">
            <code>
                {codeLines.map((line: { text: string; color: string }, lineIdx: number) => {
                    if (lineIdx < currentIndex) {
                        return <span key={lineIdx} className={line.color}>{line.text}</span>;
                    }
                    if (lineIdx === currentIndex) {
                        return <span key={lineIdx} className={line.color}>{line.text.slice(0, charIndex)}</span>;
                    }
                    return null;
                })}
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-black align-middle ml-1"
                />
            </code>
        </pre>
    );
}
