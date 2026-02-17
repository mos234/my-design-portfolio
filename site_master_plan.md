# תיק פרויקט: פורטפוליו אדריכלי - AZ Designs

## 1. פרטי תשתית (Infrastructure)
* **דומיין רשמי:** `azdesigns.co.il`
* **רשם דומיין:** Box.co.il
* **אחסון (Hosting):** Netlify
* **כתובת גיבוי/פיתוח:** `effervescent-mermaid-b64cd3.netlify.app`
* **טכנולוגיה:** Next.js (Static Site Generation)

---

## 2. מצב נוכחי (Current Status - Feb 2026)
* **פרויקטים באוויר (6):**
  1. בית קפה בוטיק (boutique-cafe)
  2. מעדניית בשרים (meat-deli)
  3. מרפסת פנורמית (balcony)
  4. דירת נופש (vacation-apartment)
  5. פרויקט קיים 1 (private-house-1)
  6. פרויקט קיים 2 (private-house-2)
* **סטטוס DNS:** רשומות A ו-CNAME עודכנו ב-Box.co.il. נמצא בשלב Propagation (אימות סופי ו-SSL).
* **SEO:** הוטמעו תגיות מטא, כותרות בעברית, וקובצי Sitemap/Robots.txt. תמונות כוללות Alt Tags לקידום.

---

## 3. הגדרות טכניות לשחזור (DNS Records)
במקרה של מעבר שרת או תקלה, אלו ההגדרות שהוזנו ב-Box:
* **A Record:** Host: `@` | Value: `75.101.145.87`
* **CNAME Record:** Host: `www` | Target: `effervescent-mermaid-b64cd3.netlify.app`

---

## תוכנית עבודה להמשך (Future Roadmap)

### שלב א': נוכחות בגוגל (Immediate)
* **Google Search Console:** אימות בעלות והגשת `sitemap.xml`.
* **Google Analytics:** הטמעת קוד מעקב למדידת תנועת גולשים.
* **SSL Check:** לוודא שהמנעול הירוק פעיל בכתובת הרשמית.

### שלב ב': תוכן וחווית משתמש (UX)
* **דף אודות (About):** כתיבת החזון האדריכלי והצגת הניסיון המקצועי.
* **טופס צור קשר:** הטמעת טופס ייעודי לשליחת פניות למייל (Netlify Forms).
* **WhatsApp Button:** הוספת כפתור צף ליצירת קשר מהיר מהנייד.

### שלב ג': תחזוקה וצמיחה
* **הוספת פרויקטים:** העלאת תמונות לתיקיית `public/gallery` וביצוע `git push`.
* **אבטחה:** שמירה על סיסמאות חזקות ואימות דו-שלבי ב-GitHub ו-Netlify.

---

## הנחיה למודל (להמשך העבודה)
בשיחה הבאה, ניתן להשתמש בפקודה:
"היי, בוא נמשיך לעבוד לפי קובץ `site_master_plan.md`. אנחנו נמצאים בשלב [ציין שלב/משימה]."
