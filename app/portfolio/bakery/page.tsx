'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Bakery() {
    const [beforeImages, setBeforeImages] = useState<string[]>([]);
    const [afterImages, setAfterImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        // Hardcoded based on actual files in the gallery
        const before = ['0-before.jpeg', '2-before.jpeg', '3-before.jpeg', '4-before.jpeg'];
        const after = [
            '0-after.jpeg', '1-after.jpeg', '2-after.jpeg', '3-after.jpeg', '4-after.jpeg',
            '5-after.jpeg', '6-after.jpeg', '7-after.jpeg', '8-after.jpeg', '9-after.jpeg',
            '10-after.jpeg', '11-after.jpeg', '12-after.jpeg', '13-after.jpeg'
        ];
        setBeforeImages(before);
        setAfterImages(after);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--background)] py-12 px-6 font-sans">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-sm border border-[var(--foreground)]/10">
                    <h1 className="text-4xl md:text-5xl font-black text-[var(--foreground)] drop-shadow-sm">
                        שיפוץ מאפייה – לפני ואחרי
                    </h1>
                    <Link
                        href="/portfolio"
                        className="mt-4 md:mt-0 px-6 py-2 bg-[var(--accent)] text-[var(--background)] font-bold rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                    >
                        חזרה לתיק עבודות &larr;
                    </Link>
                </div>

                {/* BEFORE Section */}
                {beforeImages.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-[var(--foreground)] text-center">
                            <span className="bg-black/70 text-white px-6 py-3 rounded-full">לפני השיפוץ</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {beforeImages.map((file, idx) => (
                                <div
                                    key={idx}
                                    className="relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-4 border-black/20 cursor-pointer hover:-translate-y-1"
                                    onClick={() => setSelectedImage(`/gallery/bakery/${file}`)}
                                >
                                    <Image
                                        src={`/gallery/bakery/${file}`}
                                        alt={`לפני השיפוץ ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        quality={75}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Divider */}
                {beforeImages.length > 0 && afterImages.length > 0 && (
                    <div className="flex items-center justify-center py-8">
                        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent rounded-full"></div>
                        <span className="px-6 text-4xl">⬇️</span>
                        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent rounded-full"></div>
                    </div>
                )}

                {/* AFTER Section */}
                {afterImages.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-[var(--foreground)] text-center">
                            <span className="bg-[var(--accent)] text-[var(--background)] px-6 py-3 rounded-full">אחרי השיפוץ</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {afterImages.map((file, idx) => (
                                <div
                                    key={idx}
                                    className="relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-4 border-[var(--accent)]/30 cursor-pointer hover:-translate-y-1"
                                    onClick={() => setSelectedImage(`/gallery/bakery/${file}`)}
                                >
                                    <Image
                                        src={`/gallery/bakery/${file}`}
                                        alt={`אחרי השיפוץ ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        quality={75}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {beforeImages.length === 0 && afterImages.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                        <p className="text-xl text-gray-400 font-medium">לא נמצאו תמונות בגלריה.</p>
                    </div>
                )}
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
