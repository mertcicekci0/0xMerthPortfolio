"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Send } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white border border-black p-6 z-[9999] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-serif text-2xl">Connect</h3>
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <SocialLink
                                href="https://x.com/0xMerth"
                                label="Twitter / X"
                                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>}
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/cicekci-mert/"
                                label="LinkedIn"
                                icon={<Linkedin size={20} />}
                            />
                            <SocialLink
                                href="https://t.me/mertcicekci29"
                                label="Telegram"
                                icon={<Send size={20} />}
                            />
                            <SocialLink
                                href="mailto:mertcicekci29@gmail.com"
                                label="Email"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-black/10 hover:border-black hover:bg-neutral-50 transition-all group"
        >
            <div className="text-neutral-500 group-hover:text-black transition-colors">
                {icon}
            </div>
            <span className="font-mono text-sm">{label}</span>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                →
            </div>
        </a>
    );
}
