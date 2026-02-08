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
    // Logic to separate pairs and singles
    const galleryDir = path.join(process.cwd(), "public/gallery/bakery");
    let pairs: { id: string; before: string; after: string }[] = [];
    let singles: string[] = [];

    if (fs.existsSync(galleryDir)) {
        const files = fs.readdirSync(galleryDir).filter(f => f !== 'cover.jpeg' && (f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')));

        // Map to find pairs
        const fileMap = new Map<string, { before?: string, after?: string }>();

        files.forEach(file => {
            const match = file.match(/^(\d+)-(before|after)\.jpeg$/);
            if (match) {
                const id = match[1];
                const type = match[2] as 'before' | 'after';
                if (!fileMap.has(id)) fileMap.set(id, {});
                fileMap.get(id)![type] = file;
            } else {
                // Files that don't match the X-type.jpeg pattern are treated as singles
                singles.push(file);
            }
        });

        // specific logic for singles from incomplete pairs
        fileMap.forEach((val, key) => {
            if (val.before && val.after) {
                pairs.push({
                    id: key,
                    before: `/gallery/bakery/${val.before}`,
                    after: `/gallery/bakery/${val.after}`
                });
            } else {
                if (val.before) singles.push(val.before);
                if (val.after) singles.push(val.after);
            }
        });

        // Numeric Sort
        pairs.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        singles.sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)?.[0] || "0");
            const numB = parseInt(b.match(/\d+/)?.[0] || "0");
            return numA - numB;
        });
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
                        href="/"
                        className="mt-4 md:mt-0 px-6 py-2 bg-[var(--accent)] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                    >
                        חזרה לתיק עבודות &larr;
                    </Link>
                </div>

                {/* Before / After Pairs */}
                {pairs.length > 0 && (
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold text-[var(--accent)] text-center border-b border-[var(--foreground)]/10 pb-4">
                            תהליך השיפוץ
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {pairs.map((pair) => (
                                <div key={pair.id} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[var(--foreground)]/5 p-4">
                                    <div className="grid grid-cols-2 gap-4 h-64 md:h-80">
                                        {/* Before Image */}
                                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                                            <Image
                                                src={pair.before}
                                                alt={`Before renovation ${pair.id}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                quality={75}
                                            />
                                            <div className="absolute top-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md font-bold shadow-lg">
                                                לפני
                                            </div>
                                        </div>

                                        {/* After Image */}
                                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                                            <Image
                                                src={pair.after}
                                                alt={`After renovation ${pair.id}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                quality={75}
                                            />
                                            <div className="absolute top-2 right-2 bg-[var(--accent)] text-white text-sm px-3 py-1 rounded-full backdrop-blur-md font-bold shadow-lg">
                                                אחרי
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <span className="text-lg font-bold text-[var(--foreground)]/70">שלב {pair.id}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Additional Images Grid */}
                {singles.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[var(--accent)] text-center border-b border-[var(--foreground)]/10 pb-4">
                            גלריית סיום
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {singles.map((file, idx) => (
                                <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                                    <Image
                                        src={`/gallery/bakery/${file}`}
                                        alt="Bakery view"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        quality={75}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {pairs.length === 0 && singles.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                        <p className="text-xl text-gray-400 font-medium">לא נמצאו תמונות בגלריה.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
