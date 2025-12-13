"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

const navItems = [
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-black/5" : "py-6 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="font-serif text-xl font-bold tracking-tight">
                        0xMerth
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="font-mono text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="bg-black text-white px-5 py-2 font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                        >
                            Contact_Me_
                        </button>
                    </nav>

                    {/* Mobile Menu Button Placeholder */}
                    <button className="md:hidden font-mono text-xs uppercase" onClick={() => setIsContactOpen(true)}>
                        Menu
                    </button>
                </div>
            </header>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
