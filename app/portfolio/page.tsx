'use client';

import ProjectCard from '@/components/ProjectCard';

const portfolioFaqItems = [
    {
        question: "באילו סוגי פרויקטים מתמחה סטודיו AZ Designs?",
        answer: "סטודיו AZ Designs מתמחה בשני תחומים: חללים מסחריים (בתי קפה, מאפיות, מסעדות, חנויות נוחות) וחללים פרטיים (דירות מגורים, דירות נופש, מרפסות). ניתן לראות דוגמאות לכל סוג בתיק העבודות.",
    },
    {
        question: "כמה זמן לוקח לעצב בית קפה או עסק מסחרי?",
        answer: "פרויקט מסחרי כמו בית קפה או מאפייה נמשך בדרך כלל בין חודש לשלושה חודשים, תלוי בגודל ובהיקף. זה כולל תכנון, בחירת חומרים, עבודה מול קבלנים ופיקוח.",
    },
    {
        question: "האם ניתן לעצב עם תקציב מוגבל?",
        answer: "כן. בסטודיו AZ Designs מאמינים שעיצוב מקצועי אינו חייב להיות יקר. נתאים את הפתרון לתקציב שלכם תוך שמירה על סטנדרט מקצועי גבוה. כל הצעת מחיר ניתנת בשקיפות מלאה.",
    },
    {
        question: "האם הסטודיו עובד על פרויקטים ברחבי הארץ?",
        answer: "כן. סטודיו AZ Designs מבצע פרויקטים בכל רחבי ישראל. מרחק אינו מכשול – ניתן לקיים פגישות ייעוץ ראשוניות גם בוידאו קול.",
    },
    {
        question: "מה ההבדל בין עיצוב חלל מסחרי לפרטי?",
        answer: "בחלל מסחרי הדגש הוא על חוויית לקוח, זרימת תנועה, ברנד ועמידות חומרים. בחלל פרטי הדגש הוא על אישיות, נוחות ואווירה ביתית. סטודיו AZ Designs בקיא בשני הסוגים ומביא ניסיון ייחודי מכל עולם.",
    },
];

const portfolioFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": portfolioFaqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
        },
    })),
};

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioFaqSchema) }}
            />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-[var(--accent)]">תיק עבודות</h1>
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

                {/* FAQ Section */}
                <div className="mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--accent)] mb-4">שאלות נפוצות</h2>
                        <p className="text-lg text-white/60 font-medium">על הפרויקטים ועל הסטודיו</p>
                    </div>
                    <div className="space-y-4">
                        {portfolioFaqItems.map((item, index) => (
                            <details
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/10 hover:border-[var(--accent)] transition-all"
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-black text-lg text-white text-right">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)] font-black shrink-0 group-open:bg-[var(--accent)] group-open:text-white transition-all">+</span>
                                    <span className="flex-1 mr-4">{item.question}</span>
                                </summary>
                                <p className="px-6 pb-6 text-white/70 leading-relaxed font-medium text-right">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
