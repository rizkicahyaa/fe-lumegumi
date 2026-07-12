"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { lilitaOne } from "../fonts";

const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/" },
    { label: "CAREERS", href: "/" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-950/90 backdrop-blur-md shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >
            <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
                <Link href="/" className="flex items-center gap-2 shrink-0" id="navbar-logo">
                    <div className="relative flex items-center justify-center w-24">
                        <img src="images/lume-gumi-logo.png" alt="logo" className="w-full h-full object-contain" />
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
                <ul className="flex flex-col bg-gray-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4 gap-4">
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
