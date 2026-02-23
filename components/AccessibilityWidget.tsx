'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false);

    // States for toggles
    const [largeText, setLargeText] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const [grayscale, setGrayscale] = useState(false);
    const [readableFont, setReadableFont] = useState(false);
    const [underlineLinks, setUnderlineLinks] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (largeText) root.classList.add('a11y-large-text');
        else root.classList.remove('a11y-large-text');

        if (highContrast) root.classList.add('a11y-high-contrast');
        else root.classList.remove('a11y-high-contrast');

        if (grayscale) root.classList.add('a11y-grayscale');
        else root.classList.remove('a11y-grayscale');

        if (readableFont) root.classList.add('a11y-readable-font');
        else root.classList.remove('a11y-readable-font');

        if (underlineLinks) root.classList.add('a11y-underline-links');
        else root.classList.remove('a11y-underline-links');

    }, [largeText, highContrast, grayscale, readableFont, underlineLinks]);

    const resetAll = () => {
        setLargeText(false);
        setHighContrast(false);
        setGrayscale(false);
        setReadableFont(false);
        setUnderlineLinks(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">

            {/* The Popup Menu */}
            {isOpen && (
                <div className="bg-white text-black p-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] mb-4 w-64 md:w-72 border-2 border-[var(--accent)] space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                        <h3 className="font-bold text-lg">תפריט נגישות</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button onClick={() => setLargeText(!largeText)} className={`p-2 rounded text-right transition-colors ${largeText ? 'bg-[var(--accent)] text-black font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                            🔠 הגדל טקסט
                        </button>
                        <button onClick={() => setReadableFont(!readableFont)} className={`p-2 rounded text-right transition-colors ${readableFont ? 'bg-[var(--accent)] text-black font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                            🔤 פונט רגיל
                        </button>
                        <button onClick={() => setHighContrast(!highContrast)} className={`p-2 rounded text-right transition-colors ${highContrast ? 'bg-black text-white font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                            🌗 ניגודיות גבוהה
                        </button>
                        <button onClick={() => setGrayscale(!grayscale)} className={`p-2 rounded text-right transition-colors ${grayscale ? 'bg-gray-800 text-white font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                            🔲 גווני אפור
                        </button>
                        <button onClick={() => setUnderlineLinks(!underlineLinks)} className={`p-2 rounded text-right transition-colors ${underlineLinks ? 'bg-[var(--accent)] text-black font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                            🔗 הדגשת קישורים
                        </button>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                        <button onClick={resetAll} className="p-2 text-red-600 font-bold hover:bg-red-50 rounded text-center transition-colors">
                            🔄 איפוס הגדרות
                        </button>
                        <Link href="/accessibility" onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 text-center font-bold rounded hover:bg-gray-200 transition-colors">
                            📜 הצהרת נגישות מלאה
                        </Link>
                    </div>
                </div>
            )}

            {/* The Main Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-white hover:bg-[var(--accent)] text-[#2B2B2B] hover:text-black rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.3)] border-2 border-[var(--accent)] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="פתח תפריט נגישות"
                title="אפשרויות נגישות"
            >
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="8" r="2"></circle>
                    <path d="M12 10v6"></path>
                    <path d="M8 20l4-4 4 4"></path>
                    <path d="M5 10h14"></path>
                </svg>
            </button>
        </div>
    );
}
