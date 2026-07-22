"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { lilitaOne, dmSans } from "../fonts";

interface Slide {
    id: number;
    title: string;
    description: string;
    bgColor: string;
    bgImage?: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Bean & Debt",
        description: "Bean & Debt is a time and resource management strategy game with a 2.5D cartoon art style, set in a magical medieval fairy tale world where survival is measured not by strength, but by sacrifice.",
        bgColor: "from-teal-800/80 via-teal-700/60 to-transparent",
        bgImage: "/images/slide-1.png",
    },
    {
        id: 2,
        title: "Fox Gotta Eat",
        description: "Fox Gotta Eat is a risk and resource management strategy game with a cute and colorful 2D cartoon art style, set in a festive carnival where the survival and fate of Saffron the fox's job are determined not by strength, but by your skill in managing limited capital and utilizing the wheel of fortune.",
        bgColor: "from-indigo-900/80 via-indigo-800/60 to-transparent",
        bgImage: "/images/fox-gotta-eat.png",
    },
    {
        id: 3,
        title: "Plushie Odyssey",
        description: "Plushie Odyssey is a charming anime-style tactical strategy game set in a fantasy world threatened by dark monster armies, where victory and the safety of the realm depend not only on courage, but on your tactical prowess in forming formations and leading the guardian knights.",
        bgColor: "from-rose-900/80 via-rose-800/60 to-transparent",
        bgImage: "/images/plushie-odyssey.png",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // Ref langsung ke setiap elemen background — tidak pakai state, tidak ada re-render
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Parallax: manipulasi DOM langsung via rAF, zero re-render
    useEffect(() => {
        let rafId: number;

        const update = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            // Hanya hitung jika section masih dalam viewport
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const offset = -rect.top * 0.3;
                bgRefs.current.forEach((el) => {
                    if (el) el.style.transform = `translateY(${offset}px)`;
                });
            }
            rafId = requestAnimationFrame(update);
        };

        rafId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId);
    }, []);

    const goToSlide = useCallback(
        (index: number) => {
            if (isAnimating || index === current) return;
            setIsAnimating(true);
            setCurrent(index);
            setTimeout(() => setIsAnimating(false), 600);
        },
        [current, isAnimating],
    );

    const nextSlide = useCallback(() => {
        goToSlide((current + 1) % slides.length);
    }, [current, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide((current - 1 + slides.length) % slides.length);
    }, [current, goToSlide]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) > 50) {
            deltaX < 0 ? nextSlide() : prevSlide();
        }
        touchStartX.current = null;
    };

    return (
        <section ref={sectionRef} id="hero-carousel" className="relative w-full overflow-hidden" style={{ height: "85vh", minHeight: "480px", maxHeight: "700px" }} aria-label="Hero Carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {slides.map((slide, index) => (
                <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`} aria-hidden={index !== current}>
                    {/* Background — diperbesar 30% agar tidak ada gap saat parallax bergerak */}
                    <div
                        ref={(el) => {
                            bgRefs.current[index] = el;
                        }}
                        className="absolute inset-x-0 bg-cover bg-center bg-no-repeat will-change-transform"
                        style={{
                            backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : undefined,
                            backgroundColor: !slide.bgImage ? "#2d5a4e" : undefined,
                            top: "-15%",
                            bottom: "-15%",
                        }}
                    />

                    {!slide.bgImage && <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-800" />}

                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

                    <div className="relative z-10 h-full flex items-end pb-16 px-6 lg:px-16">
                        <div className={`max-w-sm lg:max-w-md transition-all duration-700 ${index === current ? "translate-y-0 opacity-100 delay-200" : "translate-y-6 opacity-0"}`}>
                            <h1 className={`${lilitaOne.className} text-white text-2xl lg:text-3xl mb-3 drop-shadow-lg`}>{slide.title}</h1>
                            <p className={`${dmSans.className} text-white/90 text-sm lg:text-base leading-relaxed drop-shadow-sm`}>{slide.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2" role="tablist" aria-label="Carousel navigation">
                {slides.map((_, index) => (
                    <button key={index} id={`carousel-dot-${index}`} role="tab" aria-selected={index === current} aria-label={`Go to slide ${index + 1}`} onClick={() => goToSlide(index)} className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${index === current ? "bg-white w-6 h-2.5" : "bg-white/40 hover:bg-white/70 w-2.5 h-2.5"}`} />
                ))}
            </div>

            <button id="carousel-prev" onClick={prevSlide} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button id="carousel-next" onClick={nextSlide} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Next slide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
}
