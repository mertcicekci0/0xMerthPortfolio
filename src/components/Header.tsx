"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Header() {
    const links = [
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Thoughts", href: "#thoughts" },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex items-center justify-between mix-blend-difference text-white"
        >
            <Link href="/" className="font-serif text-2xl font-bold tracking-tighter">
                0xMerth
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="font-mono text-xs uppercase tracking-widest hover:underline decoration-1 underline-offset-4"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <button className="hidden md:flex items-center gap-2 border border-white/20 px-4 py-2 font-mono text-xs hover:bg-white hover:text-black transition-colors duration-300">
                <Terminal size={14} />
                <span>CONTACT_ME_</span>
                <div className="w-2 h-4 bg-current animate-pulse ml-1" />
            </button>

            {/* Mobile Menu Icon Placeholder */}
            <button className="md:hidden font-mono text-xs">[MENU]</button>
        </motion.header>
    );
}
