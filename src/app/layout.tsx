import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Pasha Zobov|Full-Stack Software Engineer",
    description: "Crafting seamless digital experiences with elegant code and intuitive design.",
    icons: {
        icon: '/favicon.svg',
    },
};

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
