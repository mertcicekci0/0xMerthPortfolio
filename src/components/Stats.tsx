"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "+3", label: "Years Experience" },
    { value: "+20", label: "Workshops Given" },
    { value: "+10", label: "Events Organized" },
    { value: "+7", label: "Chains Deployed On" },
];

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 border-y border-black/5 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group cursor-default"
                        >
                            <h3 className="font-serif text-5xl md:text-6xl font-medium tracking-tight group-hover:scale-110 transition-transform duration-300 origin-left">
                                {stat.value}
                            </h3>
                            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mt-2 border-t border-black/10 pt-2 inline-block">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
