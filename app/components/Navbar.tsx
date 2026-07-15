"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "#about" },
    { label: "GAMES", href: "#games" },
    { label: "CONTACT", href: "#contact" },
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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = 72; // tinggi navbar
                const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({ top, behavior: "smooth" });
            }
            setIsOpen(false);
        }
    };

    const linkClass = "text-white text-sm font-semibold tracking-widest hover:text-[#BB9B53] transition-colors duration-200 relative group";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#2d2d2d] backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"}`}>
            <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
                <Link href="/" className="flex items-center gap-2 shrink-0" id="navbar-logo">
                    <div className="relative flex items-center justify-center w-24">
                        <img src="images/lume-gumi-logo.png" alt="logo" className="w-full h-full object-contain" />
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                className={linkClass}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BB9B53] transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button id="navbar-mobile-toggle" className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col bg-gray-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4 gap-4">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-white text-sm font-semibold tracking-widest hover:text-[#BB9B53] transition-colors duration-200 block py-1"
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
