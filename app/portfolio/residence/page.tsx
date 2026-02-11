'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Images array based on your provided file list
const residenceImages = [
    { id: 1, src: '/gallery/residence/project-gallery%20(1).jpeg' },
    { id: 2, src: '/gallery/residence/project-gallery%20(2).jpeg' },
    { id: 3, src: '/gallery/residence/project-gallery%20(3).jpeg' },
    { id: 4, src: '/gallery/residence/project-gallery%20(4).jpeg' },
    { id: 5, src: '/gallery/residence/project-gallery%20(5).jpeg' },
    { id: 6, src: '/gallery/residence/project-gallery%20(6).jpeg' },
    { id: 7, src: '/gallery/residence/project-gallery%20(7).jpeg' },
    { id: 8, src: '/gallery/residence/project-gallery%20(8).jpeg' },
    { id: 9, src: '/gallery/residence/project-gallery%20(9).jpeg' },
    { id: 10, src: '/gallery/residence/project-gallery%20(10).jpeg' },
    { id: 11, src: '/gallery/residence/project-gallery%20(11).jpeg' },
    { id: 12, src: '/gallery/residence/project-gallery%20(12).jpeg' },
    { id: 13, src: '/gallery/residence/project-gallery%20(13).jpeg' },
    { id: 14, src: '/gallery/residence/project-gallery%20(14).jpeg' },
    // Missing 15 based on list, skipping to ensure 18 files total if available, otherwise using existing list
    { id: 16, src: '/gallery/residence/project-gallery%20(16).jpeg' },
    { id: 17, src: '/gallery/residence/project-gallery%20(17).jpeg' },
    { id: 18, src: '/gallery/residence/project-gallery%20(18).jpeg' },
    { id: 'cover', src: '/gallery/residence/cover.jpeg' },
];

export default function ResidenceProjectPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') setSelectedImage(null);
        }
        if (selectedImage) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedImage]);

    return (
        <div className="min-h-screen bg-[var(--background)] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/portfolio" className="text-[var(--foreground)] font-bold hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                        ← חזרה לתיק העבודות
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-[var(--foreground)] mb-4">דירת מגורים</h1>
                    <p className="text-xl md:text-2xl text-[var(--accent)] font-bold">עיצוב פנים יוקרתי ומודרני</p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {residenceImages.map((img) => (
                        <div
                            key={img.id}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={`דירת מגורים - תמונה ${img.id}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={75}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 left-6 text-white text-4xl font-black z-50 hover:text-[var(--accent)]">✕</button>
                    <div className="relative w-full max-w-6xl aspect-[4/3]">
                        <Image
                            src={selectedImage}
                            alt="תצוגה מוגדלת"
                            fill
                            className="object-contain"
                            priority
                            quality={90}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
