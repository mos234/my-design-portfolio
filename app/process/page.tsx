import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'תהליך העבודה',
    description: 'תהליך העבודה בסטודיו אבי צוובנר – מפגישת היכרות, דרך תוכניות ושפה עיצובית, ועד פיקוח מקצועי.',
};

export default function ProcessPage() {
    const steps = [
        {
            id: 1,
            title: "פגישת היכרות והערכת נכס",
            desc: "מפגש ראשוני להכרות, הבנת הצרכים שלכם, וסיור בנכס כדי להבין את הפוטנציאל והאתגרים.",
        },
        {
            id: 2,
            title: "הצעת מחיר",
            desc: "בניית הצעת מחיר מפורטת ושקופה המותאמת להיקף הפרויקט שהוגדר.",
        },
        {
            id: 3,
            title: "הכנת תוכניות מפורטות",
            desc: "יצירת סט תוכניות טכניות מלא: העמדה, חשמל, אינסטלציה, תאורה ונגרות.",
        },
        {
            id: 4,
            title: "גיבוש שפה עיצובית",
            desc: "בחירת סגנון, פלטת צבעים, וחומרים שיתנו את הטון בפרויקט.",
        },
        {
            id: 5,
            title: "תיאום מקצועי",
            desc: "חיבור עם קבלנים, יועצים וספקים. ניהול משא ומתן ובדיקת הצעות מחיר.",
        },
        {
            id: 6,
            title: "בחירת חומרים מלאה",
            desc: "ימי ליווי באולמות תצוגה לבחירת ריצוף, חיפויים, כלים סניטריים, גופי תאורה ועוד.",
        },
        {
            id: 7,
            title: "יצירת לוחות השראה",
            desc: "המחשה ויזואלית (Mood Boards) של החיבור בין כל החומרים והצבעים שנבחרו.",
        },
        {
            id: 8,
            title: "פיקוח עליון (אופציונלי)",
            desc: "ביקורים באתר לוודא שהביצוע תואם את התכנון והסטנדרטים שלנו.",
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">תהליך העבודה</h1>
                    <p className="text-xl md:text-2xl font-bold text-[var(--accent)] max-w-3xl mx-auto">
                        כל פרויקט מנוהל בצורה סדורה ומקצועית, כדי להבטיח שקט נפשי ותוצאה מושלמת.
                    </p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-[var(--foreground)]/10">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                            {/* Number Bubble */}
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--foreground)] text-[var(--background)] border-4 border-[var(--background)] text-2xl font-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-lg">
                                {step.id}
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] shadow-sm transition-all hover:-translate-y-1">
                                <h3 className="font-black text-2xl text-[var(--foreground)] mb-3">{step.title}</h3>
                                <p className="text-[var(--foreground)]/80 text-lg font-medium leading-relaxed">{step.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
