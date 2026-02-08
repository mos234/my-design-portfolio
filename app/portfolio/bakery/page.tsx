import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

// Helper to get image pairs
const getGalleryImages = () => {
    const galleryDir = path.join(process.cwd(), "public/gallery/bakery");

    if (!fs.existsSync(galleryDir)) {
        console.warn("Gallery directory not found:", galleryDir);
        return [];
    }

    const files = fs.readdirSync(galleryDir);

    // Find all "before" images
    const beforeImages = files.filter((file) => file.endsWith("-before.jpeg"));

    // Match them with "after" images
    const pairs = beforeImages.map((beforeFile) => {
        const id = beforeFile.replace("-before.jpeg", "");
        const afterFile = `${id}-after.jpeg`;

        if (files.includes(afterFile)) {
            return {
                id,
                before: `/gallery/bakery/${beforeFile}`,
                after: `/gallery/bakery/${afterFile}`,
            };
        }
        return null;
    }).filter(Boolean); // Remove unmatched pairs

    return pairs;
};

export default function Bakery() {
    const pairs = getGalleryImages();

    return (
        <div className="min-h-screen bg-[var(--background)] py-12 px-6 font-sans">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-sm border border-[var(--foreground)]/10">
                    <h1 className="text-4xl md:text-5xl font-black text-[var(--foreground)] drop-shadow-sm">
                        שיפוץ מאפייה – לפני ואחרי
                    </h1>
                    <Link
                        href="/"
                        className="mt-4 md:mt-0 px-6 py-2 bg-[var(--accent)] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                    >
                        חזרה לתיק עבודות &larr;
                    </Link>
                </div>

                {/* Gallery Grid */}
                {pairs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pairs.map((pair) => (
                            pair && (
                                <div key={pair.id} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[var(--foreground)]/5">
                                    <div className="grid grid-cols-2 h-64 md:h-72">
                                        {/* Before Image */}
                                        <div className="relative w-full h-full border-l border-white/20">
                                            <Image
                                                src={pair.before}
                                                alt={`Before renovation ${pair.id}`}
                                                fill
                                                className="object-cover"
                                                quality={75}
                                            />
                                            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-bold tracking-wide">
                                                לפני
                                            </div>
                                        </div>

                                        {/* After Image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={pair.after}
                                                alt={`After renovation ${pair.id}`}
                                                fill
                                                className="object-cover"
                                                quality={75}
                                            />
                                            <div className="absolute top-2 right-2 bg-[var(--accent)]/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-bold tracking-wide shadow-sm">
                                                אחרי
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center bg-gray-50/50">
                                        <span className="text-sm font-bold text-gray-500">זוג מספר {pair.id}</span>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                        <p className="text-xl text-gray-400 font-medium">לא נמצאו תמונות בגלריה כרגע.</p>
                        <p className="text-sm text-gray-400 mt-2">אנא וודא שהקבצים נמצאים בתיקייה: <code>/public/gallery/bakery/</code></p>
                    </div>
                )}
            </div>
        </div>
    );
}
