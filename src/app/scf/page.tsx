"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Trophy,
  Users,
  GraduationCap,
  Code,
  ArrowUpRight,
  BookOpen,
  Mic,
} from "lucide-react";

/* ───────────────────────── TERMINAL DATA ───────────────────────── */

const terminalLines = [
  { type: "command", text: "cat profile.txt" },
  { type: "blank" },
  { type: "heading", text: "MERT CICEKCI , CO-FOUNDER & CTO" },
  { type: "blank-sm" },
  {
    type: "info",
    text: "5 years Web3 | 7+ hackathon wins | 20+ workshops Instructor | 10+ events organized",
  },
  { type: "blank" },
  { type: "divider" },
  { type: "blank" },
  { type: "command", text: "cat stellar_contributions.txt" },
  { type: "blank" },
  { type: "section", text: "Stellar Ecosystem Contributions" },
  { type: "blank" },
  {
    type: "bullet",
    text: "HackPera Stellar Hackathon Mentor & Workshop Instructor",
  },
  {
    type: "detail",
    text: "Turkey's largest IRL Web3 hackathon (200+ participants, 70 projects)",
  },
  { type: "blank-sm" },
  { type: "bullet", text: "Stellar Workshop Organizer" },
  { type: "detail", text: "1 independent workshop as Stellar Ambassador" },
  { type: "blank-sm" },
  { type: "bullet", text: "Rise In Stellar Workshops" },
  { type: "detail", text: "Delivered +9 workshops educating developers" },
  { type: "blank-sm" },
  { type: "bullet", text: "Stellar Full Stack Challenge" },
  {
    type: "detail",
    text: "Instructor & Judge, evaluated top 3 winning projects",
  },
  { type: "blank-sm" },
  { type: "bullet", text: "Open Source Contributor" },
  {
    type: "detail",
    text: "Contributor to Coinbase x402 and OpenClaw on GitHub",
  },
  { type: "blank" },
  { type: "divider" },
  { type: "blank" },
  { type: "command", text: "cat experience.txt" },
  { type: "blank" },
  { type: "section", text: "Current Professional Experience" },
  { type: "blank" },
  {
    type: "job",
    role: "DevRel Engineer",
    company: "Rise In",
    date: "Aug 2025 - Present",
  },
  { type: "blank-sm" },
  {
    type: "job",
    role: "Smart Contract Developer",
    company: "Campus Arc",
    date: "Dec 2024 - Jun 2025",
  },
  { type: "blank-sm" },
  {
    type: "job",
    role: "Operations & Analytics Intern",
    company: "Patika",
    date: "May 2025 - Jul 2025",
  },
  { type: "blank-sm" },
  {
    type: "job",
    role: "Founder",
    company: "Tears of Astrea",
    date: "Oct 2021 - Feb 2024",
  },
  { type: "blank-sm" },
  {
    type: "job",
    role: "Board Member & Developer Lead",
    company: "ODTÜ Blockchain",
    date: "May 2025 - Present",
  },
  { type: "blank" },
  { type: "divider" },
  { type: "blank" },
  { type: "prompt" },
];

/* ───────────────────────── ACHIEVEMENTS DATA ───────────────────── */

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
    { title: "Base Ankara", desc: "Builder Program Developer Lead", icon: Users, link: "https://x.com/0xMerth/status/1998862485705863535" },
    { title: "Stellar", desc: "Workshop Instructor", icon: Users, link: "https://luma.com/event/manage/evt-Kp2EYrVZ26tFApn" },
    { title: "Sui 101", desc: "Blockchain 101 Educator", icon: Users, link: "https://luma.com/user/Merth" },
    { title: "Blockchain Days", desc: "Community Board Member", icon: Users, link: "https://www.bdays.org/" },
  ],
  Contributions: [
    { title: "Algorand", desc: "Author: Educational Docs", icon: BookOpen, link: "https://www.risein.com/courses/build-on-algorand/what-is-algorand" },
    { title: "Patika.dev", desc: "Judge & Instructor - Stellar Challenge", icon: GraduationCap, link: "https://www.patika.dev/bootcamp/odullu-fullstack-challenge" },
    { title: "Rise In", desc: "Mentor - Turkey's Largest Hackathon", icon: GraduationCap, link: "https://www.risein.com/blog/stellar-hack-pera" },
    { title: "Workshops", desc: "6+ Stellar & 3+ Stacks Workshops (Online)", icon: Mic },
  ],
};

const tabs = ["Projects", "Hackathons", "Organizing", "Contributions"];

/* ───────────────────────── PAGE ───────────────────────────────── */

export default function SCFPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="max-w-[1400px] w-full mx-auto mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
        >
          &larr; Back
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300">
          Stellar Community Fund
        </span>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1400px] w-full mx-auto flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* Left: Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col min-h-0 lg:max-h-[calc(100vh-120px)]"
        >
          {/* Title Bar */}
          <div className="px-4 py-2.5 flex items-center gap-2 border-b border-black/10 shrink-0">
            <div className="flex items-center gap-[7px]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                stellar_contributions.sh
              </span>
            </div>
            <div className="w-[44px]" />
          </div>

          {/* Terminal Body */}
          <TerminalBody />
        </motion.div>

        {/* Right: Achievements + Spotify */}
        <div className="flex flex-col gap-4 min-h-0 lg:max-h-[calc(100vh-120px)]">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border border-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex flex-col min-h-0 flex-1"
          >
            <AchievementsPanel />
          </motion.div>

          {/* Spotify */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white shrink-0"
          >
            <div className="px-4 py-2.5 flex items-center gap-2 border-b border-black/10">
              <div className="flex items-center gap-[7px]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  now_playing.sh
                </span>
              </div>
              <div className="w-[44px]" />
            </div>
            <div className="p-3">
              <iframe
                style={{ borderRadius: "0px" }}
                src="https://open.spotify.com/embed/playlist/0Bkc5tE49gOjMrFavC1sN4?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── TERMINAL COMPONENT ─────────────────── */

function TerminalBody() {
  const [visibleLines, setVisibleLines] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const line = terminalLines[visibleLines];
      const delay =
        line.type === "command"
          ? 500
          : line.type === "blank" || line.type === "blank-sm"
            ? 30
            : 60;
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const renderLine = (
    line: (typeof terminalLines)[number],
    index: number
  ) => {
    switch (line.type) {
      case "command":
        return (
          <div key={index} className="flex items-center gap-1.5 text-[12px]">
            <span className="text-black font-bold">mert@macbook</span>
            <span className="text-amber-800/40">~</span>
            <span className="text-black">$</span>
            <span className="text-amber-800/60 ml-1">{line.text}</span>
          </div>
        );
      case "heading":
        return (
          <div
            key={index}
            className="font-serif text-xl md:text-2xl font-bold tracking-tight text-black"
          >
            {line.text}
          </div>
        );
      case "info":
        return (
          <div
            key={index}
            className="text-amber-800/50 text-[11px] tracking-wide leading-relaxed"
          >
            {line.text}
          </div>
        );
      case "section":
        return (
          <div
            key={index}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-800/60 font-bold border-b border-amber-800/10 pb-1.5"
          >
            {line.text}
          </div>
        );
      case "bullet":
        return (
          <div
            key={index}
            className="text-black flex items-start gap-2 text-[13px]"
          >
            <span className="text-amber-800/40 select-none mt-[1px]">
              &#9656;
            </span>
            <span className="font-medium leading-snug">{line.text}</span>
          </div>
        );
      case "detail":
        return (
          <div
            key={index}
            className="text-amber-800/50 text-[11px] ml-[18px] leading-relaxed"
          >
            {line.text}
          </div>
        );
      case "job":
        return (
          <div
            key={index}
            className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 ml-1 text-[13px]"
          >
            <span className="text-amber-800/40 select-none">&#9656;</span>
            <span className="text-black font-medium">
              {"role" in line ? line.role : ""}
            </span>
            <span className="text-amber-800/40 text-[11px]">at</span>
            <span className="text-black font-medium">
              {"company" in line ? line.company : ""}
            </span>
            <span className="text-amber-800/50 text-[10px] font-mono tracking-wider">
              {"date" in line ? line.date : ""}
            </span>
          </div>
        );
      case "divider":
        return <div key={index} className="border-t border-black/5 my-0.5" />;
      case "blank":
        return <div key={index} className="h-3" />;
      case "blank-sm":
        return <div key={index} className="h-1.5" />;
      case "prompt":
        return (
          <div key={index} className="flex items-center gap-1.5 text-[12px]">
            <span className="text-black font-bold">mert@macbook</span>
            <span className="text-amber-800/40">~</span>
            <span className="text-black">$</span>
            <span className="terminal-cursor" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="px-5 py-6 sm:px-6 font-mono text-sm leading-relaxed overflow-y-auto custom-scrollbar bg-neutral-50/50 flex-1 min-h-0"
    >
      {terminalLines.slice(0, visibleLines).map((line, i) =>
        renderLine(line, i)
      )}
    </div>
  );
}

/* ───────────────────────── ACHIEVEMENTS COMPONENT ─────────────── */

function AchievementsPanel() {
  const [activeTab, setActiveTab] = useState("Hackathons");

  return (
    <>
      {/* Title Bar with Tabs */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/10 shrink-0">
        <div className="flex items-center gap-[7px] shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>

        <div className="flex gap-3 md:gap-5 font-mono text-[10px] uppercase tracking-wider overflow-x-auto no-scrollbar mx-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative shrink-0 py-1 transition-colors ${
                activeTab === tab
                  ? "text-black font-bold"
                  : "text-neutral-400 hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="scfTab"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
                />
              )}
            </button>
          ))}
        </div>

        <div className="w-10 text-right font-mono text-[10px] text-neutral-300 hidden md:block shrink-0">
          v3.0
        </div>
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto custom-scrollbar flex-1 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {achievementsData[activeTab].map((item, index) => (
              <AchievementCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

function AchievementCard({
  item,
  index,
}: {
  item: Achievement;
  index: number;
}) {
  const Icon = item.icon || Trophy;

  return (
    <motion.a
      href={item.link || "#"}
      target={item.link ? "_blank" : undefined}
      rel={item.link ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group border border-black/10 p-4 flex flex-col justify-between hover:border-black transition-colors duration-300 bg-neutral-50/50 hover:bg-white ${
        item.link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="p-1.5 bg-black text-white rounded-sm">
          <Icon size={14} />
        </div>
        {item.link && (
          <ArrowUpRight
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            size={14}
          />
        )}
        {item.badge && (
          <span className="font-mono text-[9px] bg-neutral-200 px-1.5 py-0.5 rounded-full uppercase">
            {item.badge}
          </span>
        )}
      </div>
      <div>
        <h4 className="font-serif text-base mb-0.5 group-hover:underline decoration-1 underline-offset-4">
          {item.title}
        </h4>
        <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wide">
          {item.desc}
        </p>
      </div>
    </motion.a>
  );
}
