'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Black-and-white portrait that turns to color: on hover with a mouse,
// and on touch screens (no hover) when it scrolls into view.
export default function ProfilePhoto() {
    const ref = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        if (!window.matchMedia('(hover: none)').matches) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- show color at once, no transition
            setRevealed(true);
            return;
        }

        const el = ref.current;
        if (!el || !('IntersectionObserver' in window)) {
            setRevealed(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.6 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            data-revealed={revealed}
            className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-[var(--accent)]/20 shadow-lg group"
        >
            <Image
                src="/profile.jpeg"
                alt="תמונת פרופיל"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 group-data-[revealed=true]:grayscale-0 motion-safe:hover:scale-105 transition-all duration-500 group-data-[revealed=true]:duration-1000 motion-reduce:transition-none ease-out"
                sizes="(max-width: 768px) 256px, 288px"
                priority
            />
        </div>
    );
}
