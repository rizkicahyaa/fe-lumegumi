"use client";

import { useState } from "react";
import Link from "next/link";
import { lilitaOne } from "../fonts";

const navLinks = [
    { label: "HOME", href: "/" },
    { label: "NEWS", href: "/news" },
    { label: "ABOUT US", href: "/about" },
    { label: "CAREERS", href: "/careers" },
    { label: "HELP CENTER", href: "/help" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
                <Link href="/" className="flex items-center gap-2 shrink-0" id="navbar-logo">
                    <div className="relative flex items-center justify-center w-10 h-12 bg-white/10 rounded border border-white/30 backdrop-blur-sm">
                        <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-10">
                            <rect x="14" y="2" width="12" height="4" rx="2" fill="white" opacity="0.9" />
                            <path d="M10 6 Q20 4 30 6 L32 38 Q20 42 8 38 Z" fill="white" opacity="0.15" stroke="white" strokeWidth="1.5" />
                            <path d="M13 10 L27 10 L29 34 Q20 38 11 34 Z" fill="white" opacity="0.2" />
                            <ellipse cx="20" cy="28" rx="5" ry="6" fill="#F5C842" opacity="0.9" />
                            <path d="M18 44 L22 44 L21 48 L19 48 Z" fill="white" opacity="0.7" />
                        </svg>
                    </div>
                    <div className={`${lilitaOne.className} text-white leading-none`}>
                        <div className="text-lg tracking-wide">LUME</div>
                        <div className="text-lg tracking-wide">GUMI</div>
                    </div>
                </Link>

                <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href} id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`} className="text-white text-sm font-semibold tracking-widest hover:text-yellow-300 transition-colors duration-200 relative group">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <button id="navbar-mobile-toggle" className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>
            </nav>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-4 gap-4">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-white text-sm font-semibold tracking-widest hover:text-yellow-300 transition-colors duration-200 block py-1" onClick={() => setIsOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
