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
  title: "x402 Portfolio",
  description: "Minimalist High-End Portfolio",
};

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
        {children}
      </body>
    </html>
  );
}
