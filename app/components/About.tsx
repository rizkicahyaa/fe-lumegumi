"use client";

import { lilitaOne, dmSans } from "../fonts";

const stats = [
    { value: "3+", label: "Game Dirilis" },
    { value: "2025", label: "Berdiri Sejak" },
    { value: "10+", label: "Anggota Tim" },
];

const socials = [
    {
        label: "Instagram",
        href: "https://instagram.com/lume_gumi",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@LumeGumi",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    // {
    //     label: "TikTok",
    //     href: "/",
    //     icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    //             <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
    //         </svg>
    //     ),
    // },
    // {
    //     label: "Discord",
    //     href: "https://discord.gg/lumegumi",
    //     icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    //             <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    //         </svg>
    //     ),
    // },
    {
        label: "Facebook",
        href: "https://web.facebook.com/profile.php?id=61584893652738",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
];

export default function About() {
    return (
        <section id="about" className="section-texture relative w-full bg-[#171717] py-16 px-6 lg:px-16 overflow-hidden" aria-labelledby="about-heading">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
                    {/* Left — text content */}
                    <div>
                        {/* Heading */}
                        <div data-aos="fade-up">
                            <h2 id="about-heading" className={`${lilitaOne.className} text-3xl lg:text-4xl text-white leading-tight flex items-center gap-4`}>
                                About Us <img src="/images/lume-gumi-star.png" alt="Star" width={30} />
                            </h2>
                        </div>

                        {/* Description */}
                        <p data-aos="fade-up" data-aos-delay="100" className={`${dmSans.className} text-white/55 text-base lg:text-lg leading-8 mt-6 max-w-2xl`}>
                            Lume Gumi is an indie game studio from Indonesia dedicated to crafting immersive gaming experiences rich in narrative, memorable characters, and meaningful stories. We believe games are more than entertainment, they are a medium for inspiring the world.
                        </p>

                        {/* Social icons */}
                        <div data-aos="fade-up" data-aos-delay="240" className="mt-6 flex gap-1">
                            {socials.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-white/30 hover:text-[#BB9B53] transition-colors duration-200 p-2 rounded-md hover:bg-white/8">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right — character image */}
                    <div data-aos="fade-up" data-aos-delay="200" className="lg:flex items-end justify-center">
                        <img src="/images/bean-and-debt-char.png" alt="Bean and Debt Character" className="w-96 xl:w-[26rem] h-auto object-contain object-bottom drop-shadow-2xl" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
                    </div>
                </div>
            </div>
        </section>
    );
}
