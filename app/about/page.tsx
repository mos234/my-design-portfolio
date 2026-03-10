import type { Metadata } from 'next';
import Image from 'next/image';

const aboutFaqItems = [
    {
        question: "מה הניסיון של אבי צוובנר בעיצוב פנים?",
        answer: "אבי צוובנר צבר ניסיון עשיר של שנים רבות בתעשיית האירועים וההפקה – ניהול פרויקטים מורכבים, עבודה מול לקוחות ויצירת חללים מרשימים. לאחר מכן עבר להתמחות בעיצוב פנים ומנהל את סטודיו AZ Designs.",
    },
    {
        question: "מה ההכשרה המקצועית של אבי צוובנר?",
        answer: "אבי צוובנר הוא בוגר לימודי חוץ בעיצוב פנים בטכניון – קמפוס עזריאלי. זוהי הכשרה אקדמית מקיפה המקנה ידע מעמיק בתכנון חללים, תאורה, חומרים ושפה עיצובית.",
    },
    {
        question: "מה מייחד את סטודיו AZ Designs מסטודיואים אחרים?",
        answer: "השילוב הייחודי של ניסיון בהפקת אירועים ועיצוב פנים מביא נקודת מבט רעננה: הבנה עמוקה של אופן בו אנשים חיים ומשתמשים בחללים, לצד יכולת תכנון טכנית מקיפה. כל פרויקט מנוהל אישית על ידי אבי מתחילתו ועד סופו.",
    },
    {
        question: "האם הסטודיו מתאים גם ללקוחות פרטיים?",
        answer: "בהחלט. סטודיו AZ Designs עובד הן עם לקוחות פרטיים (דירות מגורים, מרפסות, דירות נופש) והן עם עסקים (בתי קפה, מסעדות, מאפיות, חנויות). כל פרויקט מקבל יחס אישי ומקצועי.",
    },
    {
        question: "האם אפשר לראות עבודות קודמות לפני שמתחילים?",
        answer: "כן. תיק העבודות של סטודיו AZ Designs כולל פרויקטים מגוונים – דירת מגורים, בית קפה בוטיק, מאפייה, מעדניה, מרפסת ודירת נופש. ניתן לצפות בגלריה המלאה בעמוד 'תיק עבודות'.",
    },
];

const aboutFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
        },
    })),
};

export const metadata: Metadata = {
    title: 'סטודיו AZ Designs - עיצוב פנים מקצועי עם אבי צוובנר',
    description: 'הכירו את אבי צוובנר – בוגר לימודי עיצוב פנים בטכניון, מומחה בעיצוב חללים מסחריים ובתים פרטיים, עם ניסיון עשיר בהפקות ואירועים.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] flex flex-col justify-center py-20 px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
            />
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[var(--accent)]">אודות הסטודיו</h1>
                    <p className="text-2xl font-bold text-[var(--accent)]">הסיפור שמאחורי העיצוב</p>
                </div>

                {/* Profile & Main Story */}
                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center md:items-start bg-[#F5F3EE] p-8 md:p-12 rounded-2xl border border-[var(--foreground)]/5 shadow-sm">

                    {/* Profile Image */}
                    <div className="shrink-0">
                        <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-[var(--accent)]/20 shadow-lg group cursor-pointer">
                            <Image
                                src="/profile.jpeg"
                                alt="תמונת פרופיל"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 ease-out"
                                sizes="(max-width: 768px) 256px, 288px"
                                priority
                            />
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 font-medium leading-relaxed">
                        <p>
                            אחרי שנים רבות כבעלים של חברת הפקות ואירועים, וביצוע אין סוף אירועים, הגיע הזמן לעיסוק שמוסיף לנפש וליצירה.
                            פניתי לתחום עיצוב הפנים כלימודי חוץ של הטכניון בעזריאלי, הקמתי סטודיו ויצאנו לדרך.
                        </p>
                        <p className="mt-6">
                            אני מאמין שעיצוב טוב צריך לשלב בין אסתטיקה בלתי מתפשרת לבין פרקטיקה יום-יומית. כל פרויקט הוא מסע משותף שאנחנו עוברים יחד, מהסקיצה הראשונה ועד להנחת הפריט האחרון בחלל.
                        </p>
                    </div>
                </div>

                {/* Credentials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] transition-colors">
                        <h3 className="text-3xl font-black mb-6 text-[var(--accent)]">השכלה והכשרה</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="mt-2 w-3 h-3 rounded-full bg-[var(--foreground)] shrink-0"></span>
                                <div>
                                    <strong className="block text-xl font-bold">לימודי חוץ - הטכניון</strong>
                                    <span className="text-lg opacity-70">קמפוס עזריאלי</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="mt-2 w-3 h-3 rounded-full bg-[var(--foreground)] shrink-0"></span>
                                <div>
                                    <strong className="block text-xl font-bold">תעשיית האירועים וההפקה</strong>
                                    <span className="text-lg opacity-70">ניסיון עשיר בניהול פרויקטים מורכבים</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-10 rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] transition-colors">
                        <h3 className="text-3xl font-black mb-6 text-[var(--accent)]">תחומי התמחות</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {['חללים מסחריים', 'מאפיות וקונדיטוריות', 'חנויות נוחות', 'דירות מגורים'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="text-[var(--accent)] font-black text-2xl">✓</span>
                                    <span className="text-xl font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--accent)] mb-4">שאלות נפוצות</h2>
                        <p className="text-lg text-[var(--foreground)]/60 font-medium">על הסטודיו ועל אבי צוובנר</p>
                    </div>
                    <div className="space-y-4">
                        {aboutFaqItems.map((item, index) => (
                            <details
                                key={index}
                                className="group bg-white rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] transition-all shadow-sm"
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-black text-lg text-[var(--foreground)] text-right">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-black shrink-0 group-open:bg-[var(--accent)] group-open:text-white transition-all">+</span>
                                    <span className="flex-1 mr-4">{item.question}</span>
                                </summary>
                                <p className="px-6 pb-6 text-[var(--foreground)]/75 leading-relaxed font-medium text-right">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
