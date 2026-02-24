import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'מדיניות פרטיות - שמירה על פרטיותך ב-AZ Designs',
    description: 'מדיניות הפרטיות של סטודיו AZ Designs לעיצוב פנים. מידע על איסוף נתונים, שימוש בקוקיז ואבטחת פרטיות המשתמשים באתר.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-10 pb-4 border-b-4 border-[var(--accent)] inline-block">מדיניות פרטיות</h1>

                <div className="prose prose-xl max-w-none text-[var(--foreground)]/90 space-y-8 font-medium">
                    <p className="text-lg opacity-70">עדכון אחרון: פברואר 2026</p>

                    <p>
                        ברוכים הבאים לאתר של אבי זבנר עיצוב פנים. אנו מכבדים את הפרטיות שלכם ומחויבים להגן על המידע האישי שאתם משתפים איתנו.
                    </p>

                    <div>
                        <h3 className="text-2xl font-black mb-3">1. איסוף מידע</h3>
                        <p>
                            אנו עשויים לאסוף מידע אישי שאתם מספקים לנו מרצונכם, כגון שם, כתובת אימייל, ומספר טלפון, כאשר אתם יוצרים איתנו קשר דרך הטפסים באתר.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black mb-3">2. שימוש במידע</h3>
                        <p>
                            המידע שנאסף משמש אותנו לצורך מתן השירותים המבוקשים ויצירת קשר עמכם. אנו לא מוכרים את המידע לצדדים שלישיים.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black mb-3">3. שימוש בקוקיז (Cookies)</h3>
                        <p>
                            אתר זה משתמש בקוקיז טכניים בלבד, הנדרשים לתפעול תקין של האתר:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-3 mr-4">
                            <li><strong>קוקיז תפעוליים</strong> – קוקיז של שירות האחסון (Netlify) לצורך ניתוב תעבורה ואבטחה.</li>
                            <li><strong>Google Fonts</strong> – האתר טוען גופנים משרתי Google, אשר עשויים להגדיר קוקיז טכניים.</li>
                            <li><strong>העדפות משתמש</strong> – שמירת הסכמתכם להודעת הקוקיז באחסון מקומי (localStorage).</li>
                        </ul>
                        <p className="mt-3">
                            אנו <strong>לא משתמשים</strong> בקוקיז שיווקיים, קוקיז מעקב, או שירותי אנליטיקס. אין באתר כלים למעקב אחר פעילות הגולשים.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black mb-3">4. יצירת קשר</h3>
                        <p>
                            לכל שאלה בנושא מדיניות הפרטיות, ניתן לפנות בכתובת המייל: <a href="mailto:avi.zvebv@gmail.com" className="text-[var(--accent)] underline hover:text-[var(--foreground)]">avi.zvebv@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
