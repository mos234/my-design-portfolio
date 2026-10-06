import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'מדיניות פרטיות - שמירה על פרטיותך ב-AZ Designs',
    description: 'מדיניות הפרטיות של סטודיו AZ Designs לעיצוב פנים: איזה מידע נאסף, למה הוא משמש, למי הוא מועבר, שימוש בקוקיז וזכויותיכם.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-10 pb-4 border-b-4 border-[var(--accent)] inline-block">מדיניות פרטיות</h1>

                <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 space-y-8 font-medium">
                    <p className="text-lg opacity-70">עדכון אחרון: אוקטובר 2026</p>

                    <p>
                        ברוכים הבאים לאתר של אבי צוובנר – AZ Designs עיצוב פנים (&quot;אנחנו&quot;). אנו מכבדים את הפרטיות שלכם ומחויבים להגן על המידע האישי שאתם משתפים איתנו, בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981.
                    </p>

                    <div>
                        <h2 className="text-2xl font-black mb-3">1. האחראי על המידע</h2>
                        <p>
                            האחראי על המידע הנאסף באתר הוא אבי צוובנר – AZ Designs עיצוב פנים. ניתן לפנות אלינו בכל נושא הקשור לפרטיות באימייל{' '}
                            <a href="mailto:avi.zvebv@gmail.com" className="text-[var(--accent)] underline hover:text-[var(--foreground)]">avi.zvebv@gmail.com</a>{' '}
                            או בטלפון <a href="tel:+972504673332" className="text-[var(--accent)] underline hover:text-[var(--foreground)]" dir="ltr">050-467-3332</a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">2. איזה מידע אנו אוספים</h2>
                        <p>
                            אנו אוספים רק מידע שאתם מוסרים לנו ביוזמתכם: שם, מספר טלפון ותוכן הפנייה, כאשר אתם ממלאים את טופס יצירת הקשר, וכן כל מידע שתבחרו לשלוח אלינו בטלפון, ב-WhatsApp או באימייל.
                        </p>
                        <p className="mt-3">
                            אינכם חייבים על פי חוק למסור לנו מידע זה. מסירת המידע נעשית מרצונכם ובהסכמתכם, אך בלעדיו לא נוכל לחזור אליכם.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">3. למה המידע משמש</h2>
                        <p>
                            המידע משמש אך ורק כדי לחזור אליכם ולענות על פנייתכם. אין לנו רשימת דיוור או ניוזלטר, לא נשלח לכם פרסומות, ולא נמכור את המידע לאף גורם.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">4. העברת מידע לצדדים שלישיים</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>WhatsApp</strong> – לחיצה על &quot;שלח הודעה&quot; בטופס יצירת הקשר פותחת את אפליקציית WhatsApp (בבעלות חברת Meta) עם ההודעה שכתבתם. ההודעה נשלחת רק אם תאשרו אותה באפליקציה, והיא כפופה גם למדיניות הפרטיות של WhatsApp. הפרטים שבטופס אינם נשמרים בשרתי האתר.
                            </li>
                            <li>
                                <strong>ספק האחסון</strong> – האתר מאוחסן אצל Netlify, אשר מעבדת נתונים טכניים (כגון כתובת IP) לצורך הצגת האתר ואבטחתו.
                            </li>
                        </ul>
                        <p className="mt-3">
                            מעבר לכך, לא נעביר את המידע לגורם אחר, אלא אם נידרש לכך על פי דין.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">5. שמירת המידע</h2>
                        <p>
                            האתר עצמו אינו שומר את הפרטים שאתם מזינים בטופס, ואין לנו מאגר או רשימה של פונים. פנייה מגיעה אלינו כהודעת WhatsApp, שיחת טלפון או אימייל, ונשארת רק כחלק מההתכתבות הרגילה איתכם.
                        </p>
                        <p className="mt-3">
                            אם תרצו שנמחק את ההתכתבות איתכם, פנו אלינו בפרטים שבסעיף 1.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">6. קוקיז (Cookies) ואחסון בדפדפן</h2>
                        <p>
                            האתר <strong>אינו משתמש</strong> בקוקיז שיווקיים, בקוקיז מעקב, בשירותי אנליטיקס או בפיקסלים של רשתות חברתיות. הגופנים באתר נטענים משרתי האתר עצמו, ולא מגורם חיצוני.
                        </p>
                        <p className="mt-3">באתר נעשה שימוש רק במידע טכני הנדרש לתפעולו:</p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            <li><strong>אחסון מקומי בדפדפן (localStorage)</strong> – שמירת אישורכם להודעת הקוקיז ושמירת הגדרות תפריט הנגישות שבחרתם. מידע זה נשמר במכשיר שלכם בלבד ואינו נשלח אלינו.</li>
                            <li><strong>ספק האחסון (Netlify)</strong> – עשוי להשתמש בקוקיז טכניים לצורכי אבטחה וניתוב תעבורה.</li>
                        </ul>
                        <p className="mt-3">
                            ניתן למחוק מידע זה בכל עת דרך הגדרות הדפדפן.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">7. הזכויות שלכם</h2>
                        <p>
                            בהתאם לחוק הגנת הפרטיות, אתם רשאים לבקש לעיין במידע שנשמר עליכם, ולבקש לתקן או למחוק מידע שאינו נכון, שלם, ברור או מעודכן. לשם כך פנו אלינו בפרטים שבסעיף 1, ונטפל בבקשה בהקדם.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-3">8. שינויים במדיניות</h2>
                        <p>
                            אנו עשויים לעדכן מדיניות זו מעת לעת. תאריך העדכון האחרון מופיע בראש העמוד.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
