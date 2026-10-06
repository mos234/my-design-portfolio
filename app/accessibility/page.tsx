import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'הצהרת נגישות - מחויבות לנגישות דיגיטלית',
    description: 'הצהרת הנגישות של סטודיו AZ Designs לעיצוב פנים: רמת ההתאמה לתקן הישראלי 5568, ההתאמות שבוצעו באתר ופרטי רכז הנגישות.',
};

export default function AccessibilityStatement() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-10 pb-4 border-b-4 border-[var(--accent)] inline-block">הצהרת נגישות</h1>

                <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 space-y-8 font-medium">
                    <p className="text-lg opacity-70">עדכון אחרון: אוקטובר 2026</p>

                    <p>
                        אנו ב&quot;אבי צוובנר – AZ Designs עיצוב פנים&quot; רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים, ובכלל זה לאנשים עם מוגבלות, ופועלים לשיפור הנגישות באתר האינטרנט שלנו.
                    </p>

                    <div>
                        <h2 className="text-2xl font-black mb-3">רמת ההתאמה</h2>
                        <p>
                            האתר הותאם בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013, ולתקן הישראלי ת&quot;י 5568 (המבוסס על הנחיות WCAG 2.0), ברמה AA. אנו ממשיכים לבדוק את האתר ולשפר אותו באופן שוטף.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">התאמות שבוצעו באתר</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>תפריט נגישות בכל עמוד: הגדלת טקסט, פונט קריא, ניגודיות גבוהה, גווני אפור והדגשת קישורים. ההגדרות נשמרות במעבר בין עמודים.</li>
                            <li>אפשרות לדלג ישירות לתוכן הראשי (&quot;דלג לתוכן&quot;).</li>
                            <li>תמיכה בניווט באמצעות מקלדת.</li>
                            <li>מבנה כותרות היררכי וברור.</li>
                            <li>טקסט חלופי לתמונות.</li>
                            <li>תוויות לשדות בטופס יצירת הקשר והודעות שגיאה ברורות.</li>
                            <li>הגדרת שפת האתר (עברית) וכיוון קריאה מימין לשמאל.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">חלקים שטרם הונגשו במלואם</h2>
                        <p>
                            למרות מאמצינו, ייתכן שחלקים באתר עדיין אינם נגישים במלואם. ידוע לנו כי:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            <li>בחלק מעמודי האתר ניגודיות הצבעים בין הטקסט לרקע נמוכה מהנדרש. עד לתיקון, ניתן להפעיל &quot;ניגודיות גבוהה&quot; בתפריט הנגישות.</li>
                            <li>טופס יצירת הקשר מעביר את הפנייה לאפליקציית WhatsApp, שאינה בשליטתנו. ניתן לפנות אלינו גם בטלפון או באימייל.</li>
                        </ul>
                        <p className="mt-3">
                            אם נתקלתם בקושי, נשמח לסייע ולקבל את הפנייה בכל דרך נוחה.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">רכז הנגישות ויצירת קשר</h2>
                        <p>
                            נתקלתם בבעיית נגישות או שיש לכם הצעה לשיפור? נשמח לשמוע מכם. כדי שנוכל לטפל בפנייה, אנא ציינו את תיאור הבעיה ואת העמוד שבו נתקלתם בה.
                        </p>
                        <ul className="list-none space-y-2 mt-3">
                            <li><strong>רכז הנגישות:</strong> אבי צוובנר</li>
                            <li><strong>טלפון:</strong> <a href="tel:+972504673332" className="text-[var(--accent)] underline hover:text-[var(--foreground)]" dir="ltr">050-467-3332</a></li>
                            <li><strong>אימייל:</strong> <a href="mailto:avi.zvebv@gmail.com" className="text-[var(--accent)] underline hover:text-[var(--foreground)]">avi.zvebv@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
