import type { Metadata } from "next";
import { lilitaOne, dmSans } from "./fonts";
import AOSProvider from "./components/AOSProvider";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lume Gumi Corp.",
    description: "Lume Gumi Corp. - An indie game studio from Indonesia creating narrative-driven gaming experiences that are meaningful and memorable.",
    metadataBase: new URL("https://lumegumi-corp.vercel.app"),
    openGraph: {
        title: "Lume Gumi Corp.",
        description: "Lume Gumi Corp. - An indie game studio from Indonesia creating narrative-driven gaming experiences that are meaningful and memorable.",
        url: "https://lumegumi-corp.vercel.app",
        siteName: "Lume Gumi Corp.",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Lume Gumi Corp.",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lume Gumi Corp.",
        description: "Lume Gumi Corp. - An indie game studio from Indonesia.",
        images: ["/images/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${lilitaOne.variable} ${dmSans.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-neutral-950 text-white">
                <AOSProvider>{children}</AOSProvider>
            </body>
        </html>
    );
}

