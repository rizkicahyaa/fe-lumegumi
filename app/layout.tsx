import type { Metadata } from "next";
import { lilitaOne, dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lume Gumi Corp.",
    description: "Lume Gumi Corp. - Indie Game Developer asal Indonesia yang menciptakan pengalaman bermain yang kaya narasi dan bermakna.",
    metadataBase: new URL("https://lumegumi-corp.vercel.app"),
    openGraph: {
        title: "Lume Gumi Corp.",
        description: "Lume Gumi Corp. - Indie Game Developer asal Indonesia yang menciptakan pengalaman bermain yang kaya narasi dan bermakna.",
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
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lume Gumi Corp.",
        description: "Lume Gumi Corp. - Indie Game Developer asal Indonesia.",
        images: ["/images/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className={`${lilitaOne.variable} ${dmSans.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-neutral-950 text-white">{children}</body>
        </html>
    );
}
