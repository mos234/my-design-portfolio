import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'אודות הסטודיו - אדריכלות ועיצוב פנים',
    description: 'הכירו את אבי צוובנר – בוגר לימודי עיצוב פנים בטכניון, מנוסה בהפקות ואירועים, ומתמחה בעיצוב חללים מסחריים ומגורים.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] flex flex-col justify-center py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight">אודות הסטודיו</h1>
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
            </div>
        </div>
    );
}
