"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Trophy, Users, GraduationCap, Code, ArrowUpRight, BookOpen } from "lucide-react";

type Achievement = {
    title: string;
    desc: string;
    icon?: React.ElementType;
    link?: string;
    badge?: string;
};

const achievementsData: Record<string, Achievement[]> = {
    Projects: [
        { title: "x402 Stellar", desc: "Open Standard Payment Protocol", icon: Code, link: "https://github.com/mertkaradayi/stellar-x402/tree/main" },
        { title: "Puffin", desc: "Privacy Messaging on Sui", icon: Code, link: "https://www.puffinprivacy.xyz/" },
        { title: "x402 MCP (Stellar)", desc: "Model Context Protocol Server", icon: Code, link: "https://github.com/mertkaradayi/stellar-x402/tree/main/examples/mcp" },
        { title: "a402 MCP (Sui)", desc: "MCP Server Implementation", icon: Code, link: "https://portal-sui-mcp-a402.vercel.app/" },
        { title: "Acadely", desc: "Private Stealth Repo", icon: Code, badge: "Coming Soon" },
    ],
    Hackathons: [
        { title: "Sui Hackathon (EPFL)", desc: "2nd Place - BSA x SUI", icon: Trophy, link: "https://www.linkedin.com/in/cicekci-mert/" },
        { title: "Sui Ideathon", desc: "1st Place - Buildermare", icon: Trophy },
        { title: "Stellar x Rise In", desc: "1st Place Winner", icon: Trophy, link: "https://x.com/riseinweb3/status/1995473149064851964" },
        { title: "Build on Sui", desc: "3rd Place", icon: Trophy, link: "https://x.com/0xbeepit/status/1998045481050705963" },
        { title: "ETHGlobal World", desc: "Pool Prize Winner", icon: Trophy },
    ],
    Organizing: [
        { title: "Base Ankara", desc: "Builder Program Lead", icon: Users, link: "https://x.com/0xMerth/status/1998862485705863535" },
        { title: "Blockdag", desc: "Community Meetup Host", icon: Users, link: "https://luma.com/yo9vafla" },
        { title: "Stellar", desc: "Workshop Instructor", icon: Users, link: "https://luma.com/event/manage/evt-Kp2EYrVZ26tFApn" },
        { title: "Sui 101", desc: "Blockchain 101 Educator", icon: Users, link: "https://luma.com/user/Merth" },
        { title: "Blockchain Days", desc: "Co-Organizer & Support", icon: Users, link: "https://www.bdays.org/" },
    ],
    Contributions: [
        { title: "Algorand", desc: "Author: Educational Docs", icon: BookOpen, link: "https://www.risein.com/courses/build-on-algorand/what-is-algorand" },
        { title: "Patika.dev", desc: "Judge & Instructor - Stellar Challenge", icon: GraduationCap, link: "https://www.patika.dev/bootcamp/odullu-fullstack-challenge" },
        { title: "Rise In", desc: "Mentor - Turkey's Largest Hackathon", icon: GraduationCap, link: "https://www.risein.com/blog/stellar-hack-pera" },
        { title: "Workshops", desc: "6+ Stellar & 3+ Stacks Workshops (Online)", icon: Mic },
    ],
};

const tabs = ["Projects", "Hackathons", "Organizing", "Contributions"];

// Fallback icon for Mic since it's used
import { Mic } from 'lucide-react';

export default function Achievements() {
    const [activeTab, setActiveTab] = useState("Projects");

    return (
        <section className="py-24 px-6 md:px-12 bg-white flex justify-center">
            <div className="w-full max-w-4xl">
                {/* OS Window Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[600px]"
                >
                    {/* Title Bar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-black bg-neutral-100 shrink-0">
                        <div className="flex gap-2 shrink-0">
                            <div className="w-3 h-3 rounded-full bg-red-500 border border-black/10" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black/10" />
                            <div className="w-3 h-3 rounded-full bg-green-500 border border-black/10" />
                        </div>

                        {/* Tabs in Title Bar - Scrollable on mobile */}
                        <div className="flex gap-4 md:gap-6 font-mono text-xs uppercase tracking-wider overflow-x-auto no-scrollbar mx-4 px-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative hover:text-black transition-colors shrink-0 py-1 ${activeTab === tab ? "text-black font-bold" : "text-neutral-400"
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="w-12 text-right font-mono text-[10px] text-neutral-400 hidden md:block shrink-0">
                            v3.0
                        </div>
                    </div>

                    {/* Content Area - Scrollable */}
                    <div className="p-8 bg-white overflow-y-auto custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {achievementsData[activeTab].map((item, index) => (
                                    <AchievementCard key={index} item={item} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
    const Icon = item.icon || Trophy;

    return (
        <motion.a
            href={item.link || "#"}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group border border-black/10 p-6 flex flex-col justify-between hover:border-black transition-colors duration-300 bg-neutral-50/50 hover:bg-white ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-black text-white rounded-sm">
                    <Icon size={16} />
                </div>
                {item.link && (
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                )}
                {item.badge && (
                    <span className="font-mono text-[10px] bg-neutral-200 px-2 py-1 rounded-full uppercase">
                        {item.badge}
                    </span>
                )}
            </div>

            <div>
                <h4 className="font-serif text-xl mb-1 group-hover:underline decoration-1 underline-offset-4">
                    {item.title}
                </h4>
                <p className="font-mono text-xs text-neutral-500 uppercase tracking-wide">
                    {item.desc}
                </p>
            </div>
        </motion.a>
    );
}
