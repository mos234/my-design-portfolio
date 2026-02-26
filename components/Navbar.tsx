"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full px-6 py-2 flex justify-between items-center bg-[var(--background)]/80 sticky top-0 z-50 border-b border-[var(--foreground)]/5 backdrop-blur-md h-16 md:h-20">
            <div className="flex items-center h-full">
                {/* Logo Container */}
                <Link href="/" className="h-full flex items-center transition-all duration-300">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 bg-black rounded-full">
                        <Image
                            src="/logo-new1.png"
                            alt="אבי צוובנר - עיצוב פנים"
                            fill
                            className="object-contain p-1"
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10 text-[var(--accent)] font-bold text-lg tracking-wide">
                <Link href="/" className="hover:text-white transition-colors">דף הבית</Link>
                <Link href="/about" className="hover:text-white transition-colors">אודות</Link>
                <Link href="/process" className="hover:text-white transition-colors">תהליך העבודה</Link>
                <Link href="/portfolio" className="hover:text-white transition-colors">תיק עבודות</Link>
                <Link href="/contact" className="hover:text-white transition-colors">צור קשר</Link>
            </div>

            <Link href="/contact" className="hidden md:block px-8 py-3 bg-[var(--accent)] text-[var(--background)] text-sm font-bold rounded-full hover:bg-[var(--foreground)] transition-colors duration-300">
                דברו איתנו
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[var(--accent)] font-black text-xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={isMobileMenuOpen}
            >
                ☰
            </button>

            {/* Mobile Menu Dropdown (Basic Implementation) */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--foreground)]/5 flex flex-col p-4 gap-4 md:hidden shadow-xl">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--accent)] hover:text-white font-bold">דף הבית</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--accent)] hover:text-white font-bold">אודות</Link>
                    <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--accent)] hover:text-white font-bold">תהליך העבודה</Link>
                    <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--accent)] hover:text-white font-bold">תיק עבודות</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--accent)] hover:text-white font-bold">צור קשר</Link>
                </div>
            )}
        </nav>
    );
}
