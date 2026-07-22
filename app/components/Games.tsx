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
    link?: string;
    delay: number;
}

const games: Game[] = [
    {
        id: 1,
        title: "Bean & Debt",
        genre: "Strategy · Management",
        description: "A time and resource management strategy game with 2.5D cartoon art style, set in a whimsical medieval fairy-tale world full of wonder.",
        image: "/images/slide-1.png",
        // status: "Released",
        tags: ["2.5D", "Strategy", "Medieval"],
        link: "https://store.steampowered.com/app/4515610/Bean__Debt/?beta=0",
        delay: 0,
    },
    {
        id: 2,
        title: "Fox Gotta Eat",
        genre: "Strategy · Risk Management",
        description: "Manage limited funds and spin the wheel of fortune as Saffron the fox at a lively carnival festival full of risk and reward.",
        image: "/images/fox-gotta-eat-3.png",
        // status: "Released",
        tags: ["2D", "Casual", "Carnival"],
        link: "https://revmagames.itch.io/foxgottaeat",
        delay: 100,
    },
    {
        id: 3,
        title: "Plushie Odyssey",
        genre: "Tactical Strategy · Defense",
        description: "Craft formation tactics and lead guardian knights against the forces of darkness in a captivating anime fantasy world.",
        image: "/images/plushie-odyssey-2.png",
        // status: "In Development",
        tags: ["Anime", "Tactical", "Fantasy"],
        link: "https://embohtotally.itch.io/plushie-odessy",
        delay: 200,
    },
    {
        id: 4,
        title: "Echo Chamber",
        genre: "Puzzle · Strategy",
        description: "You are trapped in an ever-shifting echo chamber. Solve each level by predicting sound reflection patterns and escape before you're lost forever.",
        image: "/images/echo-chamber.png",
        // status: "In Development",
        tags: ["2.5D", "Puzzle", "Strategy"],
        link: "https://versequest.itch.io/echo-chamber",
        delay: 300,
    },
    {
        id: 5,
        title: "Path of Lumino",
        genre: "Puzzle · Strategy",
        description: "A student project for GAMESEED 2025. Guide Lumino through a world of light and shadow in a captivating and unique experience.",
        image: "/images/path-of-lumino.jpg",
        // status: "In Development",
        tags: ["Student Project", "Gameseed 2025", "Creative"],
        link: "https://embohtotally.itch.io/path-of-lumino",
        delay: 400,
    },
    {
        id: 6,
        title: "Piece By Piece",
        genre: "Puzzle · Strategy",
        description: "A relaxing puzzle game where you reconstruct the world one piece at a time. Enjoy a calming atmosphere and satisfying gameplay mechanics.",
        image: "/images/piece-by-piece.png",
        // status: "In Development",
        tags: ["Puzzle", "Relaxing", "Casual"],
        link: "https://embohtotally.itch.io/piece-by-piece",
        delay: 500,
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
                <div className="mb-7" data-aos="fade-up">
                    <h2 id="games-heading" className={`${lilitaOne.className} text-white text-3xl lg:text-4xl`}>
                        Games
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {games.map((game) => (
                        <article key={game.id} data-aos="fade-up" data-aos-delay={game.delay} className="group relative flex flex-col bg-[#111111] border border-white/8 hover:border-white/20 hover:bg-[#1c1c1c] transition-colors duration-300 cursor-pointer overflow-hidden">
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
                                {/* <p className={`${dmSans.className} text-white/30 text-xs tracking-[0.2em] uppercase mb-2`}>{game.genre}</p> */}

                                {/* Title */}
                                <h3 className={`${lilitaOne.className} text-white text-xl mb-3 group-hover:text-[#BB9B53] transition-colors duration-300`}>{game.title}</h3>

                                {/* Description */}
                                <p className={`${dmSans.className} text-white/50 text-sm leading-relaxed flex-1`}>{game.description}</p>

                                {/* Tags + Link */}
                                <div className="flex items-end justify-between gap-3 mt-5 pt-5 border-t border-white/8">
                                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                                        {game.tags.map((tag) => (
                                            <span key={tag} className={`${dmSans.className} text-[11px] font-medium text-white/40 tracking-wider uppercase`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {game.link && (
                                        <a href={game.link} target="_blank" rel="noopener noreferrer" aria-label={`Play ${game.title}`} onClick={(e) => e.stopPropagation()} className="shrink-0 text-white/25 hover:text-[#BB9B53] transition-colors duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
