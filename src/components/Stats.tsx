"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
                    {stats.map((stat) => (
                        <Counter key={stat.label} value={parseInt(stat.value.replace(/\D/g, ""))} label={stat.label} prefix="+" />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ value, label, prefix = "" }: { value: number; label: string; prefix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest: number) => {
            setDisplayValue(Math.round(latest));
        });
    }, [springValue]);

    return (
        <div ref={ref} className="group cursor-default">
            <h3 className="font-serif text-5xl md:text-6xl font-medium tracking-tight group-hover:scale-110 transition-transform duration-300 origin-left">
                {prefix}{displayValue}
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mt-2 border-t border-black/10 pt-2 inline-block">
                {label}
            </p>
        </div>
    );
}
