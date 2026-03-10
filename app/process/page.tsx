import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'תהליך העבודה בעיצוב פנים - AZ Designs',
    description: 'גלה את תהליך העבודה שלנו בעיצוב פנים – מפגישת היכרות, הכנת תוכניות מפורטות, גיבוש שפה עיצובית ופיקוח מקצועי עד תום הפרויקט.',
};

const faqItems = [
    {
        question: "כמה עולה עיצוב פנים לדירה?",
        answer: "עלות עיצוב פנים לדירה תלויה בגודל הנכס והיקף השירות. בדרך כלל שכר מעצב נע בין 150 ל-400 ₪ לשעה, או אחוז מתקציב הפרויקט. בסטודיו AZ Designs אנחנו מציעים הצעת מחיר מפורטת ושקופה לאחר פגישת היכרות ראשונית – ללא התחייבות.",
    },
    {
        question: "כמה זמן לוקח פרויקט עיצוב פנים מלא?",
        answer: "פרויקט עיצוב פנים לדירה ממוצעת נמשך בין 3 ל-6 חודשים מהתכנון ועד הביצוע. פרויקטים מסחריים כמו בתי קפה ומסעדות עשויים להימשך בין חודש לשלושה חודשים, תלוי בהיקף העבודה.",
    },
    {
        question: "מה ההבדל בין מעצב פנים לאדריכל?",
        answer: "אדריכל מתמחה בעיקר במבנה ובחזית הבניין, ואחראי על היתרי בנייה ושינויים מבניים. מעצב פנים, כמו סטודיו AZ Designs, מתמקד בחלל הפנימי – פריסה, חומרים, צבעים, תאורה ואווירה כוללת – ומביא את החיים לתוך המבנה.",
    },
    {
        question: "האם אתם עובדים גם על עסקים מסחריים?",
        answer: "כן. סטודיו AZ Designs מתמחה גם בעיצוב חללים מסחריים: בתי קפה, מסעדות, מאפיות, חנויות ועסקים קטנים. יש לנו ניסיון רחב בסגנונות שונים ובהתאמת העיצוב לברנד ולקהל היעד של העסק.",
    },
    {
        question: "האם ניתן לקבל ייעוץ ראשוני ללא עלות?",
        answer: "כן. פגישת ההיכרות הראשונה בסטודיו AZ Designs היא ללא עלות וללא התחייבות. בפגישה זו נבין את הצרכים שלכם, נסייר בנכס, ונבנה יחד מסגרת ראשונית לפרויקט.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
        },
    })),
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-[var(--accent)]">תהליך העבודה</h1>
                    <p className="text-xl md:text-2xl font-bold text-[var(--accent)] max-w-3xl mx-auto">
                        כל פרויקט מנוהל בצורה סדורה ומקצועית, כדי להבטיח שקט נפשי ותוצאה מושלמת.
                    </p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-[var(--foreground)]/10">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                            {/* Number Bubble */}
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent)] text-[var(--foreground)] border-4 border-[var(--background)] text-2xl font-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-lg">
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

                {/* FAQ Section */}
                <div className="mt-28">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--accent)] mb-4">שאלות נפוצות</h2>
                        <p className="text-lg text-[var(--foreground)]/70 font-medium">כל מה שרציתם לדעת לפני שמתחילים</p>
                    </div>
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <details
                                key={index}
                                className="group bg-white rounded-2xl border-2 border-[var(--foreground)]/5 hover:border-[var(--accent)] transition-all shadow-sm"
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-black text-lg text-[var(--foreground)] text-right">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-black shrink-0 group-open:bg-[var(--accent)] group-open:text-white transition-all">
                                        +
                                    </span>
                                    <span className="flex-1 mr-4">{item.question}</span>
                                </summary>
                                <p className="px-6 pb-6 text-[var(--foreground)]/75 leading-relaxed font-medium text-right">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
