import type { Metadata } from "next";
import { Playfair_Display, Space_Mono } from "next/font/google"; // Import fonts
import "./globals.css";

// Configure Playfair Display (Serif)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Configure Space Mono (Monospace)
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merth Portfolio",
  description: "Minimalist High-End Portfolio",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${spaceMono.variable} antialiased font-mono bg-white text-black selection:bg-black selection:text-white`}
      >
        <CustomCursor />
        {/* Noise Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
          <div className="w-full h-full bg-[url('/noise.svg')] bg-repeat" />
        </div>
        {children}
      </body>
    </html>
  );
}
