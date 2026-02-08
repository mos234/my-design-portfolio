'use client';

import ProjectCard from '@/components/ProjectCard';

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-black mb-6">תיק עבודות</h1>
                    <p className="text-xl md:text-2xl text-[var(--accent)] font-bold mb-8">
                        בחר פרויקט לצפייה בגלריה המלאה
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Residence Project */}
                    <ProjectCard
                        title="דירת מגורים יוקרתית"
                        subtitle="לחץ לצפייה בגלריה"
                        imageSrc="/gallery/residence/cover.jpeg"
                        href="/portfolio/residence"
                    />

                    {/* Bakery Project */}
                    <ProjectCard
                        title="בייקרי – מאפייה"
                        subtitle="גלריית לפני / אחרי"
                        imageSrc="/gallery/bakery/cover.jpeg"
                        href="/portfolio/bakery"
                    />

                    {/* Placeholder for future projects */}
                    <div className="relative aspect-[4/3] bg-white/10 rounded-3xl border-2 border-[var(--foreground)]/10 flex items-center justify-center opacity-50 grayscale">
                        <span className="text-xl font-bold">פרויקט בקרוב...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
