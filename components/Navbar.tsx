"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    return (
        <nav className="w-full px-6 py-2 flex justify-between items-center bg-[var(--veil-80)] sticky top-0 z-50 border-b border-[var(--foreground)]/5 backdrop-blur-md h-16 md:h-20">
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
            <div className="hidden md:flex gap-10 text-[var(--nav-link)] font-bold text-lg tracking-wide">
                <Link href="/" className="hover:text-[var(--nav-link-hover)] transition-colors">דף הבית</Link>
                <Link href="/about" className="hover:text-[var(--nav-link-hover)] transition-colors">אודות</Link>
                <Link href="/process" className="hover:text-[var(--nav-link-hover)] transition-colors">תהליך העבודה</Link>
                <Link href="/portfolio" className="hover:text-[var(--nav-link-hover)] transition-colors">תיק עבודות</Link>
                <Link href="/contact" className="hover:text-[var(--nav-link-hover)] transition-colors">צור קשר</Link>
            </div>

            <Link href="/contact" className="hidden md:block px-8 py-3 bg-[var(--accent)] text-[var(--on-accent)] text-sm font-bold rounded-full hover:bg-[var(--foreground)] transition-colors duration-300">
                דברו איתנו
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden w-11 h-11 -ml-2 flex items-center justify-center rounded-full text-[var(--accent)]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
            >
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round">
                    {isMobileMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
            </button>

            {/* Mobile Menu Dropdown (Basic Implementation) */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--foreground)]/5 flex flex-col px-4 py-2 md:hidden shadow-xl">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-[var(--nav-link)] hover:text-[var(--nav-link-hover)] font-bold">דף הבית</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-[var(--nav-link)] hover:text-[var(--nav-link-hover)] font-bold">אודות</Link>
                    <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-[var(--nav-link)] hover:text-[var(--nav-link-hover)] font-bold">תהליך העבודה</Link>
                    <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-[var(--nav-link)] hover:text-[var(--nav-link-hover)] font-bold">תיק עבודות</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-[var(--nav-link)] hover:text-[var(--nav-link-hover)] font-bold">צור קשר</Link>
                </div>
            )}
        </nav>
    );
}
