'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

interface ProjectGalleryProps {
    title: string;
    subtitle: string;
    images: string[];
}

export default function ProjectGallery({ title, subtitle, images }: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
            }
            if (e.key === 'ArrowRight') goPrev();
            if (e.key === 'ArrowLeft') goNext();
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [goNext, goPrev]);

    if (images.length === 0) return null;

    return (
        <div className="min-h-screen bg-[var(--background)] py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                    <div className="text-center sm:text-right">
                        <h1 className="text-3xl md:text-5xl font-black text-[var(--foreground)]">{title}</h1>
                        <p className="text-lg md:text-xl text-[var(--accent)] font-bold mt-2">{subtitle}</p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="px-6 py-2 bg-[var(--accent)] text-[var(--background)] font-bold rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                    >
                        &larr; חזרה לתיק העבודות
                    </Link>
                </div>

                {/* Main Image Viewer */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black/5 mb-6">
                    <Image
                        src={images[currentIndex]}
                        alt={`עיצוב פנים – ${title} ${subtitle} – תמונה ${currentIndex + 1} מתוך ${images.length}`}
                        fill
                        className="object-contain"
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 900px"
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            {/* Right Arrow (visually right in RTL) */}
                            <button
                                onClick={goNext}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold transition-all backdrop-blur-sm"
                                aria-label="תמונה הבאה"
                            >
                                &gt;
                            </button>

                            {/* Left Arrow (visually left in RTL) */}
                            <button
                                onClick={goPrev}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold transition-all backdrop-blur-sm"
                                aria-label="תמונה קודמת"
                            >
                                &lt;
                            </button>
                        </>
                    )}
                </div>

                {/* Counter */}
                <div className="text-center">
                    <span className="inline-block bg-[var(--foreground)]/10 text-[var(--foreground)] font-bold px-5 py-2 rounded-full text-lg">
                        {currentIndex + 1} / {images.length}
                    </span>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className="mt-6 flex gap-3 overflow-x-auto pb-2 justify-center flex-wrap">
                        {images.map((src, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                                    idx === currentIndex
                                        ? 'ring-3 ring-[var(--accent)] shadow-lg scale-105'
                                        : 'opacity-60 hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={src}
                                    alt={`${title} – תמונה ממוזערת ${idx + 1}`}
                                    width={96}
                                    height={72}
                                    className="object-cover w-20 h-14 md:w-24 md:h-16 rounded-lg"
                                    quality={40}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
