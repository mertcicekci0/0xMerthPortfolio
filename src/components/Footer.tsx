"use client";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/20 pb-12 mb-12">
                <div className="space-y-2">
                    <h2 className="font-serif text-6xl md:text-8xl hover:italic transition-all cursor-pointer">
                        Let&apos;s Talk.
                    </h2>
                    <a href="mailto:hello@example.com" className="font-mono text-xl md:text-2xl text-neutral-400 hover:text-white transition-colors">
                        hello@0xmerth.com
                    </a>
                </div>

                <div className="flex flex-col items-end gap-4">
                    <button className="px-6 py-3 border border-white font-mono text-sm hover:bg-white hover:text-black transition-colors uppercase">
                        Start a Project
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-xs text-neutral-500 uppercase tracking-wider">
                <p>&copy; 2025 0xMerth. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
