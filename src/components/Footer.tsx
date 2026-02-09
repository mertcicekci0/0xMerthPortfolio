"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

export default function Footer() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <footer className="bg-black text-white py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-serif text-4xl md:text-6xl mb-6">
                                {Array.from("Let's build something").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.1, delay: index * 0.03 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <br />
                                {Array.from("limitless.").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.1, delay: 0.5 + index * 0.03 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </h2>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="px-8 py-3 bg-white text-black font-mono text-sm hover:bg-neutral-200 transition-colors uppercase tracking-widest"
                            >
                                Start a Project
                            </button>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-4 font-mono text-sm text-neutral-400">
                        <a href="mailto:mertcicekci29@gmail.com" className="hover:text-white transition-colors">
                            mertcicekci29@gmail.com
                        </a>
                        <div className="flex gap-6 mt-4">
                            <a href="https://x.com/0xMerth" target="_blank" className="hover:text-white transition-colors">Twitter / X</a>
                            <a href="https://www.linkedin.com/in/cicekci-mert/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="https://github.com/mertcicekci0" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                        </div>
                        <div className="mt-8 text-neutral-600 text-xs">
                            © {new Date().getFullYear()} Merth. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
