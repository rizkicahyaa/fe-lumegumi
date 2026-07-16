import { lilitaOne, dmSans } from "../fonts";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    link?: string;
    year: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Mount Nya Apa",
        category: "Roblox",
        description: "A custom Roblox experience featuring immersive environments and interactive gameplay mechanics developed with Luau.",
        tags: ["Roblox", "Adventure", "Luau", "Multiplayer"],
        link: "#",
        year: "2025",
    },
    {
        id: 2,
        title: "Penguin Palace",
        category: "Management",
        description: "A real-time social platform supporting text and voice communication. Engineered a WebRTC voice channel system using a mesh network topology with Firebase as the signaling layer.",
        tags: ["Full-Stack", "WEBRTC", "Firebase", "Typescript", "PWA"],
        link: "#",
        year: "2025",
    },
];

export default function OtherProjects() {
    return (
        <section id="other-projects" className="w-full bg-[#171717] py-20 px-6 lg:px-16" aria-labelledby="other-projects-heading">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="mb-7">
                    <h2 id="other-projects-heading" className={`${lilitaOne.className} text-white text-3xl lg:text-4xl`}>
                        Other Projects
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative flex flex-col bg-[#171717] border border-white/8 hover:border-white/20 hover:bg-[#1f1f1f] transition-colors duration-300 overflow-hidden">
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#BB9B53] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            <div className="flex flex-col flex-1 p-6">
                                {/* Year badge */}
                                {/* <div className="flex items-center justify-between mb-4">
                                    <p className={`${dmSans.className} text-white/25 text-xs tracking-[0.2em] uppercase`}>{project.category}</p>
                                </div> */}

                                {/* Title */}
                                <h3 className={`${lilitaOne.className} text-white text-xl mb-3 group-hover:text-[#BB9B53] transition-colors duration-300`}>{project.title}</h3>

                                {/* Description */}
                                <p className={`${dmSans.className} text-white/45 text-sm leading-relaxed flex-1`}>{project.description}</p>

                                {/* Bottom row: tags + link */}
                                <div className="flex items-end justify-between gap-3 mt-5 pt-5 border-t border-white/8">
                                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={`${dmSans.className} text-[11px] font-medium text-white/35 tracking-wider uppercase`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`} className="shrink-0 text-white/25 hover:text-[#BB9B53] transition-colors duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
