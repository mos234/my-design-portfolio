'use client';

import Image from 'next/image';
import { useState } from 'react';

// Generate array of 18 gallery images with URL-encoded paths
const galleryImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/project-gallery%20(${i + 1}).jpeg`,
    alt: `דירת מגורים - תמונה ${i + 1}`,
}));

export default function ProjectGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-20 px-4 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-4">
                        תיק עבודות
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-[var(--accent)]">
                        הצצה לפרויקטים נבחרים
                    </p>
                </div>

                {/* Gallery Grid - 1 col mobile, 2 cols tablet, 3 cols desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">
                                    דירת מגורים
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 left-6 text-white text-4xl font-bold hover:text-[var(--accent)] transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                        aria-label="סגור"
                    >
                        ×
                    </button>
                    <div className="relative w-full max-w-5xl aspect-[4/3]">
                        <Image
                            src={selectedImage}
                            alt="תמונה מוגדלת"
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
