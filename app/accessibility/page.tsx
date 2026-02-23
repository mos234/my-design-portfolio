import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'הצהרת נגישות - מחויבות לנגישות דיגיטלית',
    description: 'הצהרת הנגישות של סטודיו AZ Designs לעיצוב פנים. האתר מותאם לתקן נגישות ישראלי ומאפשר שימוש לכלל המשתמשים.',
};

export default function AccessibilityStatement() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-10 pb-4 border-b-4 border-[var(--accent)] inline-block">הצהרת נגישות</h1>

                <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 space-y-8 font-medium">
                    <p>
                        אנו ב"אבי צוובנר עיצוב פנים" רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים ובשיפור הנגישות באתר האינטרנט שלנו.
                    </p>

                    <div>
                        <h3 className="text-2xl font-black mb-3">התאמות שבוצעו</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>שימוש בפונט קריא ומודגש (Rubik).</li>
                            <li>ניגודיות צבעים גבוהה (טקסט כהה על רקע בהיר).</li>
                            <li>תמיכה בניווט מקלדת.</li>
                            <li>מבנה כותרות ברור.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black mb-3">יצירת קשר בנושא נגישות</h3>
                        <p>
                            אם נתקלתם בבעיה, נשמח לשמוע מכם:
                        </p>
                        <ul className="list-none space-y-2 mt-2">
                            <li><strong>טלפון:</strong> 050-467333</li>
                            <li><strong>אימייל:</strong> <a href="mailto:avi.zvebv@gmail.com" className="text-[var(--accent)] underline hover:text-[var(--foreground)]">avi.zvebv@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
