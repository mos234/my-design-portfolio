"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full px-6 py-4 flex justify-between items-center bg-[var(--background)] sticky top-0 z-50 border-b border-[var(--foreground)]/5 backdrop-blur-sm">
            <div className="flex items-center">
                {/* Logo Container */}
                <Link href="/" className="relative h-24 w-60 md:h-32 md:w-80 transition-all duration-300">
                    <Image
                        src="/logo.jpeg"
                        alt="אבי צוובנר - עיצוב פנים"
                        fill
                        className="object-contain object-right"
                        priority
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10 text-[var(--foreground)] font-bold text-lg tracking-wide">
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">דף הבית</Link>
                <Link href="/about" className="hover:text-[var(--accent)] transition-colors">אודות</Link>
                <Link href="/process" className="hover:text-[var(--accent)] transition-colors">תהליך העבודה</Link>
                <Link href="/portfolio" className="hover:text-[var(--accent)] transition-colors">תיק עבודות</Link>
                <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">צור קשר</Link>
            </div>

            <Link href="/contact" className="hidden md:block px-8 py-3 bg-[var(--accent)] text-[var(--background)] text-sm font-bold rounded-full hover:bg-[var(--foreground)] transition-colors duration-300">
                דברו איתנו
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[var(--foreground)] font-black text-xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                ☰
            </button>

            {/* Mobile Menu Dropdown (Basic Implementation) */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--foreground)]/5 flex flex-col p-4 gap-4 md:hidden shadow-xl">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">דף הבית</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">אודות</Link>
                    <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">תהליך העבודה</Link>
                    <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">תיק עבודות</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--accent)] font-bold">צור קשר</Link>
                </div>
            )}
        </nav>
    );
}
