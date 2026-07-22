"use client";

import { lilitaOne, dmSans } from "../fonts";

const socials = [
    {
        label: "Instagram",
        handle: "@lume_gumi",
        href: "https://instagram.com/lume_gumi",
        color: "hover:border-pink-500/40 hover:bg-pink-500/5",
        iconColor: "group-hover:text-pink-400",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        handle: "@Lume_Gumi",
        href: "https://x.com/Lume_Gumi",
        color: "hover:border-sky-500/40 hover:bg-sky-500/5",
        iconColor: "group-hover:text-sky-400",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        handle: "@LumeGumi",
        href: "https://www.youtube.com/@LumeGumi",
        color: "hover:border-red-500/40 hover:bg-red-500/5",
        iconColor: "group-hover:text-red-400",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        handle: "Lume Gumi",
        href: "https://web.facebook.com/profile.php?id=61584893652738",
        color: "hover:border-blue-500/40 hover:bg-blue-500/5",
        iconColor: "group-hover:text-blue-400",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
];

export default function Contact() {
    return (
        <section id="contact" className="section-texture w-full bg-[#1a1a1a] relative py-20 px-6 lg:px-16 overflow-hidden" aria-labelledby="contact-heading">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-end">

                    {/* Left — contact content */}
                    <div>
                        <div className="mb-7" data-aos="fade-up">
                            <h2 id="contact-heading" className={`${lilitaOne.className} text-white text-3xl lg:text-4xl`}>
                                Get in Touch
                            </h2>
                        </div>

                        {/* Email card */}
                        <a
                            href="mailto:lumegumibusiness@gmail.com"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-7 mb-4 border border-white/8 hover:border-[#BB9B53]/30 hover:bg-white/3 transition-all duration-300"
                            aria-label="Send email to Lume Gumi"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-white/30 group-hover:text-[#BB9B53] transition-colors duration-300 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                                <div>
                                    <p className={`${dmSans.className} text-white/30 text-xs tracking-[0.25em] uppercase mb-1`}>Business & Inquiries</p>
                                    <p className={`${dmSans.className} text-white text-base lg:text-lg font-medium group-hover:text-[#BB9B53] transition-colors duration-300`}>
                                        lumegumibusiness@gmail.com
                                    </p>
                                </div>
                            </div>
                            <span className={`${dmSans.className} flex items-center gap-2 text-xs tracking-widest uppercase text-white/25 group-hover:text-[#BB9B53] transition-colors duration-300 shrink-0`}>
                                Send Email
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </a>

                        {/* Social cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="200">
                            {socials.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Lume Gumi on ${social.label}`} className={`group flex flex-col gap-4 p-6 border border-white/8 ${social.color} transition-all duration-300 hover:-translate-y-0.5`}>
                                    <span className={`text-white/30 transition-colors duration-300 ${social.iconColor}`}>{social.icon}</span>

                                    <div className="flex flex-col gap-0.5 mt-auto">
                                        <p className={`${dmSans.className} text-white/35 text-xs tracking-widest uppercase`}>{social.label}</p>
                                        <p className={`${lilitaOne.className} text-white text-base`}>{social.handle}</p>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 self-end">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right — character image */}
                    <div data-aos="fade-left" data-aos-delay="100" className="hidden lg:flex items-end justify-center self-end">
                        <img
                            src="/images/plushie-char.png"
                            alt="Plushie Character"
                            className="w-80 xl:w-96 h-auto object-contain object-bottom drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}


