"use client";

import Image from "next/image";
import { lilitaOne, dmSans } from "../fonts";

interface Game {
    id: number;
    title: string;
    genre: string;
    description: string;
    image: string;
    // status: "Released" | "Coming Soon" | "In Development";
    tags: string[];
}

const games: Game[] = [
    {
        id: 1,
        title: "Bean & Debt",
        genre: "Strategy · Management",
        description: "Permainan strategi manajemen waktu dan sumber daya dengan gaya seni kartun 2.5D, berlatar di dunia dongeng abad pertengahan penuh keajaiban.",
        image: "/images/slide-1.png",
        // status: "Released",
        tags: ["2.5D", "Strategy", "Medieval"],
    },
    {
        id: 2,
        title: "Fox Gotta Eat",
        genre: "Strategy · Risk Management",
        description: "Kelola modal terbatas dan manfaatkan roda keberuntungan sebagai Saffron si rubah di festival karnaval yang meriah dan penuh risiko.",
        image: "/images/fox-gotta-eat.png",
        // status: "Released",
        tags: ["2D", "Casual", "Carnival"],
    },
    {
        id: 3,
        title: "Plushie Odyssey",
        genre: "Tactical Strategy · Defense",
        description: "Susun taktik formasi dan pimpin para ksatria pelindung melawan pasukan monster kegelapan di dunia fantasi anime yang menawan.",
        image: "/images/plushie-odyssey.png",
        // status: "In Development",
        tags: ["Anime", "Tactical", "Fantasy"],
    },
];

const statusConfig = {
    Released: { dot: "bg-emerald-400", text: "text-emerald-400", label: "Released" },
    "Coming Soon": { dot: "bg-yellow-400", text: "text-yellow-400", label: "Coming Soon" },
    "In Development": { dot: "bg-sky-400", text: "text-sky-400", label: "In Development" },
};

export default function Games() {
    return (
        <section id="games" className="w-full bg-[#111111] py-20 px-6 lg:px-16" aria-labelledby="games-heading">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="mb-7">
                    <h2 id="games-heading" className={`${lilitaOne.className} text-white text-3xl lg:text-4xl`}>
                        Games
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {games.map((game) => (
                        <article key={game.id} className="group relative flex flex-col bg-[#111111] border border-white/8 hover:border-white/20 hover:bg-[#1c1c1c] transition-colors duration-300 cursor-pointer overflow-hidden">
                            {/* Top accent line — muncul saat hover */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BB9B53] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            {/* Thumbnail */}
                            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                                <Image src={game.image} alt={game.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-6">
                                {/* Status */}
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[game.status].dot} shrink-0`} />
                                    <span className={`${dmSans.className} text-xs font-medium tracking-wide ${statusConfig[game.status].text}`}>{statusConfig[game.status].label}</span>
                                </div> */}

                                {/* Genre */}
                                <p className={`${dmSans.className} text-white/30 text-xs tracking-[0.2em] uppercase mb-2`}>{game.genre}</p>

                                {/* Title */}
                                <h3 className={`${lilitaOne.className} text-white text-xl mb-3 group-hover:text-[#BB9B53] transition-colors duration-300`}>{game.title}</h3>

                                {/* Description */}
                                <p className={`${dmSans.className} text-white/50 text-sm leading-relaxed flex-1`}>{game.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/8">
                                    {game.tags.map((tag) => (
                                        <span key={tag} className={`${dmSans.className} text-[11px] font-medium text-white/40 tracking-wider uppercase`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
