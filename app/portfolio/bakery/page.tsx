import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Bakery() {
    const galleryDir = path.join(process.cwd(), "public/gallery/bakery");
    let beforeImages: string[] = [];
    let afterImages: string[] = [];

    if (fs.existsSync(galleryDir)) {
        const files = fs.readdirSync(galleryDir).filter(f =>
            f !== 'cover.jpeg' && (f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'))
        );

        // Separate before and after images
        files.forEach(file => {
            if (file.includes('-before')) {
                beforeImages.push(file);
            } else if (file.includes('-after')) {
                afterImages.push(file);
            }
        });

        // Sort numerically
        const numericSort = (a: string, b: string) => {
            const numA = parseInt(a.match(/\d+/)?.[0] || "0");
            const numB = parseInt(b.match(/\d+/)?.[0] || "0");
            return numA - numB;
        };

        beforeImages.sort(numericSort);
        afterImages.sort(numericSort);
    }

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
                                <div key={idx} className="relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-4 border-black/20">
                                    <Image
                                        src={`/gallery/bakery/${file}`}
                                        alt={`לפני השיפוץ ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        quality={75}
                                    />
                                    <div className="absolute top-3 right-3 bg-black/70 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                                        לפני
                                    </div>
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
                                <div key={idx} className="relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-4 border-[var(--accent)]/30">
                                    <Image
                                        src={`/gallery/bakery/${file}`}
                                        alt={`אחרי השיפוץ ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        quality={75}
                                    />
                                    <div className="absolute top-3 right-3 bg-[var(--accent)] text-[var(--background)] text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                                        אחרי
                                    </div>
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
        </div>
    );
}
