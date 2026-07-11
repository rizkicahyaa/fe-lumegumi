"use client";

import { useState, useEffect, useCallback } from "react";
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
        description: "Bean & Debt adalah permainan strategi manajemen waktu dan sumber daya dengan gaya seni kartun 2.5D, yang berlatar di dunia dongeng abad pertengahan penuh keajaiban, di mana kelangsungan hidup tidak diukur dari kekuatan, melainkan dari pengorbanan.",
        bgColor: "from-teal-800/80 via-teal-700/60 to-transparent",
        bgImage: "/images/slide-1.png",
    },
    {
        id: 2,
        title: "Fox Gotta Eat",
        description: "Fox Gotta Eat adalah permainan strategi manajemen risiko dan sumber daya dengan gaya seni kartun 2D yang imut dan penuh warna, yang berlatar di sebuah festival karnaval yang meriah, di mana kelangsungan hidup dan nasib pekerjaan Saffron si rubah tidak ditentukan oleh kekuatan, melainkan oleh kelihaianmu dalam mengelola modal terbatas serta memanfaatkan roda keberuntungan.",
        bgColor: "from-indigo-900/80 via-indigo-800/60 to-transparent",
        bgImage: "/images/fox-gotta-eat.png",
    },
    {
        id: 3,
        title: "Plushie Odyssey",
        description: "Plushie Odyssey adalah permainan strategi pertahanan taktis (tactical strategy) dengan gaya seni anime yang menawan, berlatar di dunia fantasi yang sedang terancam oleh pasukan monster kegelapan, di mana kemenangan dan keselamatan wilayah tidak hanya bergantung pada keberanian, melainkan pada kejelianmu dalam menyusun taktik formasi dan memimpin para ksatria pelindung.",
        bgColor: "from-rose-900/80 via-rose-800/60 to-transparent",
        bgImage: "/images/plushie-odyssey.png",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

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

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section id="hero-carousel" className="relative w-full overflow-hidden" style={{ height: "85vh", minHeight: "480px", maxHeight: "700px" }} aria-label="Hero Carousel">
            {slides.map((slide, index) => (
                <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`} aria-hidden={index !== current}>
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : undefined,
                            backgroundColor: !slide.bgImage ? "#2d5a4e" : undefined,
                        }}
                    />

                    {!slide.bgImage && <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-800" />}

                    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

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

            <button id="carousel-prev" onClick={() => goToSlide((current - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button id="carousel-next" onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Next slide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
}
