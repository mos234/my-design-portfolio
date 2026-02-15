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

                    {/* Boutique Cafe Project */}
                    <ProjectCard
                        title="בית קפה בוטיק | צור הדסה"
                        subtitle="לחץ לצפייה בגלריה"
                        imageSrc="/gallery/boutique-cafe/cover.jpeg"
                        href="/portfolio/boutique-cafe"
                    />

                    {/* Meat Deli Project */}
                    <ProjectCard
                        title="מעדניית בשרים מיובשים"
                        subtitle="לחץ לצפייה בגלריה"
                        imageSrc="/gallery/meat-deli/cover.jpeg"
                        href="/portfolio/meat-deli"
                    />

                    {/* Balcony Project */}
                    <ProjectCard
                        title="מרפסת פנורמית ופינת רביצה"
                        subtitle="לחץ לצפייה בגלריה"
                        imageSrc="/gallery/balcony/cover.jpeg"
                        href="/portfolio/balcony"
                    />

                    {/* Vacation Apartment Project */}
                    <ProjectCard
                        title="עיצוב ותכנון דירת נופש"
                        subtitle="לחץ לצפייה בגלריה"
                        imageSrc="/gallery/vacation-apartment/cover.jpeg"
                        href="/portfolio/vacation-apartment"
                    />
                </div>
            </div>
        </div>
    );
}
