'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const galleryImages = [
    { id: 1, src: '/gallery/meat-deli/1.jpeg' },
    { id: 2, src: '/gallery/meat-deli/2.jpeg' },
    { id: 4, src: '/gallery/meat-deli/4.jpeg' },
];

export default function MeatDeliPage() {
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
                        &larr; חזרה לתיק העבודות
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12">
                    <Image
                        src="/gallery/meat-deli/cover.jpeg"
                        alt="מעדניית בשרים מיובשים"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12 text-right">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-2">מעדניית בשרים מיובשים</h1>
                        <p className="text-xl md:text-2xl text-[var(--accent)] font-bold">עיצוב חלל מסחרי</p>
                    </div>
                </div>

                {/* Description */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg md:text-xl leading-relaxed text-[var(--foreground)]/80">
                        עיצוב מעדנייה ייחודית לבשרים מיובשים – חלל שמשלב אופי תעשייתי עם חמימות ואלגנטיות. התכנון מדגיש את המוצרים ומעניק חוויית קנייה פרימיום.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img) => (
                        <div
                            key={img.id}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={`מעדניית בשרים - תמונה ${img.id}`}
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
                    <button className="absolute top-6 left-6 text-white text-4xl font-black z-50 hover:text-[var(--accent)]">&times;</button>
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
