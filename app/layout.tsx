import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anime Library - Track Your Anime & Manga",
    description: "Your personal anime and manga tracking library",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // TODO: Later we'll get real auth status from Supabase
    // For now, set to false to test signed-out navbar
    const isAuthenticated = false;

    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar isAuthenticated={isAuthenticated} />
        {children}
        </body>
        </html>
    );
}
