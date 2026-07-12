"use client";

import { lilitaOne, dmSans } from "../fonts";

const stats = [
    { value: "3+", label: "Game Dirilis" },
    { value: "2025", label: "Berdiri Sejak" },
    { value: "10+", label: "Anggota Tim" },
];

export default function About() {
    return (
        <section id="about" className="relative w-full bg-[#2d2d2d] py-20 px-6 lg:px-16 overflow-hidden" aria-labelledby="about-heading">
            <div className="relative max-w-5xl mx-auto">
                <p className={`${dmSans.className} text-white/70 text-base lg:text-lg leading-relaxed max-w-2xl mb-12`}>Lume Gumi adalah studio game indie asal Indonesia yang berdedikasi menciptakan pengalaman bermain yang kaya narasi, penuh karakter, dan bermakna. Kami percaya bahwa game bukan sekadar hiburan melainkan medium untuk menyampaikan cerita yang menginspirasi.</p>

                <div className="grid grid-cols-3 gap-8 max-w-md">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1">
                            <span className={`${lilitaOne.className} text-yellow-400 text-3xl lg:text-4xl`}>{stat.value}</span>
                            <span className={`${dmSans.className} text-white/50 text-xs tracking-wide uppercase`}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
