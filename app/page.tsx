import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <div className="max-w-full animate-fade-in-up space-y-8">

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-[var(--foreground)] leading-tight whitespace-nowrap">
            מעצבים לך <span className="text-[var(--accent)]">את הדמיון</span>
          </h1>

          <div className="flex flex-col gap-2 text-lg md:text-xl text-white font-bold max-w-3xl mx-auto leading-relaxed border-r-4 border-[var(--accent)] bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-2xl text-right w-fit">
            <p className="drop-shadow-md">• בוגר לימודי חוץ בטכניון</p>
            <p className="drop-shadow-md">• בעל חברה ותיקה ומוניטין רב</p>
            <p className="drop-shadow-md">• בוגר תעשיית האירועים וההפקה</p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/process" className="px-10 py-5 bg-[var(--accent)] text-[var(--background)] text-lg font-bold rounded-full hover:bg-[var(--foreground)] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              איך זה עובד?
            </Link>
            <Link href="/contact" className="px-10 py-5 border-[2px] border-[var(--accent)] text-[var(--accent)] text-lg font-bold rounded-full hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300">
              קבע פגישת ייעוץ
            </Link>
          </div>
        </div>
      </main>

      {/* Intro Section */}
      <section className="py-20 px-4 border-t border-[var(--foreground)]/5 backdrop-blur-sm bg-[var(--background)]/80">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--foreground)]">נעים להכיר, אני אבי</h2>
          <p className="text-xl leading-relaxed font-medium text-[var(--foreground)]/80">
            "אחרי שנים רבות כבעלים של חברת הפקות ואירועים, וביצוע אין סוף אירועים, הגיע הזמן לעיסוק שמוסיף לנפש וליצירה."
          </p>
          <p className="text-lg leading-relaxed text-[var(--foreground)]/80">
            פניתי לתחום עיצוב הפנים כלימודי חוץ של הטכניון בעזריאלי, הקמתי סטודיו ויצאנו לדרך. הסטודיו מתמחה בעיצוב חללים מסחריים, מאפיות, חנויות נוחות ובתים פרטיים.
          </p>
          <Link href="/about" className="inline-block px-8 py-3 mt-4 text-[var(--accent)] font-black text-lg hover:underline underline-offset-4">
            קרא עוד עלי &larr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--foreground)]/10 text-center bg-[var(--accent)] text-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center mb-8">
          <div className="text-right">
            <h3 className="font-black text-xl text-[var(--background)] mb-2">אבי צוובנר</h3>
            <p className="text-sm opacity-90">עיצוב פנים שמתחיל מדמיון.</p>
          </div>
          <div className="flex flex-col gap-2 font-bold text-[var(--background)]">
            <a href="tel:+972504673332" className="hover:text-[var(--foreground)]">050-467-3332</a>
            <a href="mailto:avizvebv@gmail.com" className="hover:text-[var(--foreground)]">avizvebv@gmail.com</a>
          </div>
          <div className="text-left text-sm font-bold flex flex-col gap-2 text-[var(--background)]">
            <Link href="/privacy-policy" className="hover:text-[var(--foreground)]">מדיניות פרטיות</Link>
            <Link href="/accessibility" className="hover:text-[var(--foreground)]">הצהרת נגישות</Link>
          </div>
        </div>
        <p className="text-[var(--background)]/60 text-sm">© 2026 אבי צוובנר - עיצוב פנים. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}
