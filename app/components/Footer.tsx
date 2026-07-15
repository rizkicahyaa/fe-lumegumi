import Link from "next/link";
import Image from "next/image";
import { lilitaOne, dmSans } from "../fonts";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Games", href: "#games" },
    { label: "Get in Touch", href: "#contact" },
];

const socials = [
    {
        label: "Instagram",
        href: "https://instagram.com/lume_gumi",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "https://x.com/Lume_Gumi",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@LumeGumi",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://web.facebook.com/profile.php?id=61584893652738",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0d0d0d] border-t border-white/8 px-6 lg:px-16 pt-14 pb-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
                    <div className="flex flex-col gap-4 max-w-xs">
                        <Link href="/" className="flex items-center w-28" aria-label="Lume Gumi Home">
                            <Image src="/images/lume-gumi-logo.png" alt="Lume Gumi Logo" width={112} height={48} className="object-contain" />
                        </Link>
                        <p className={`${dmSans.className} text-white/35 text-sm leading-relaxed`}>An indie game studio from Indonesia creating narrative-driven gaming experiences that are meaningful and memorable.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className={`${dmSans.className} text-white/25 text-xs tracking-[0.25em] uppercase mb-1`}>Navigate</p>
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className={`${dmSans.className} text-white/50 text-sm hover:text-white transition-colors duration-200`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className={`${dmSans.className} text-white/25 text-xs tracking-[0.25em] uppercase mb-1`}>Follow Us</p>
                        <div className="flex items-center gap-1 -ml-2">
                            {socials.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-white/35 hover:text-[#BB9B53] transition-colors duration-200 p-2 rounded-md hover:bg-white/5">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className={`${dmSans.className} text-white/25 text-xs`}>© {year} Lume Gumi Corp. All rights reserved.</p>
                    <p className={`${dmSans.className} text-white/15 text-xs`}>Made with ❤️</p>
                </div>
            </div>
        </footer>
    );
}
