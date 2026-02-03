import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-[var(--background)] sticky top-0 z-50 border-b border-[var(--foreground)]/5 backdrop-blur-sm">
        <div className="flex items-center">
          {/* Logo Container - Enlarged */}
          <div className="relative h-32 w-72 md:h-48 md:w-[500px] transition-all duration-300">
            <Image
              src="/logo.jpeg"
              alt="לוגו סטודיו לעיצוב"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-[var(--foreground)] font-medium text-base tracking-wide">
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">בית</Link>
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">תיק עבודות</Link>
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">שירותים</Link>
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">אודות</Link>
          <Link href="#" className="hover:text-[var(--accent)] transition-colors">צור קשר</Link>
        </div>

        <button className="hidden md:block px-8 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full hover:bg-[var(--accent)] transition-colors duration-300">
          דברו איתנו
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 bg-[var(--background)]">
        <div className="max-w-5xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--foreground)] mb-8 leading-tight">
            עיצוב על-זמני <br />
            <span className="text-[var(--accent)] font-serif italic">שמשדרג את החלל שלך</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--foreground)]/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            אנו יוצרים חללי פנים יוקרתיים ומותאמים אישית המשקפים את הסגנון והחזון הייחודיים שלך.
            הפכו את הבית שלכם ליצירת מופת.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-[var(--foreground)] text-[var(--background)] text-lg font-medium rounded-full hover:bg-[var(--accent)] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              לצפייה בתיק העבודות
            </button>
            <button className="px-10 py-5 border-[1.5px] border-[var(--foreground)] text-[var(--foreground)] text-lg font-medium rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300">
              לתיאום פגישת ייעוץ
            </button>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-[var(--foreground)]/5 text-center text-[var(--foreground)]/40 text-sm">
        <p>© 2026 פורטפוליו עיצוב פנים. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}
