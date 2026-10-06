'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'a11y-settings';

const OPTIONS = [
    { key: 'largeText', className: 'a11y-large-text', icon: '🔠', label: 'הגדל טקסט', activeClass: 'bg-[var(--accent)] text-black font-bold' },
    { key: 'readableFont', className: 'a11y-readable-font', icon: '🔤', label: 'פונט רגיל', activeClass: 'bg-[var(--accent)] text-black font-bold' },
    { key: 'highContrast', className: 'a11y-high-contrast', icon: '🌗', label: 'ניגודיות גבוהה', activeClass: 'bg-black text-white font-bold' },
    { key: 'grayscale', className: 'a11y-grayscale', icon: '🔲', label: 'גווני אפור', activeClass: 'bg-gray-800 text-white font-bold' },
    { key: 'underlineLinks', className: 'a11y-underline-links', icon: '🔗', label: 'הדגשת קישורים', activeClass: 'bg-[var(--accent)] text-black font-bold' },
] as const;

type Settings = Partial<Record<(typeof OPTIONS)[number]['key'], boolean>>;

export default function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState<Settings>({});
    const [loaded, setLoaded] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);

    // Restore saved settings so they persist across pages and visits
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read from localStorage after mount
            if (saved) setSettings(JSON.parse(saved));
        } catch {
            // Storage unavailable: start with defaults
        }
        setLoaded(true);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        OPTIONS.forEach(({ key, className }) => root.classList.toggle(className, !!settings[key]));
        if (!loaded) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        } catch {
            // Storage unavailable: settings still apply for this page view
        }
    }, [settings, loaded]);

    useEffect(() => {
        if (!isOpen) return;
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const resetAll = () => setSettings({});

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">

            {/* The Popup Menu */}
            {isOpen && (
                <div id="a11y-menu" role="region" aria-label="תפריט נגישות" className="bg-white text-black p-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] mb-4 w-64 md:w-72 border-2 border-[var(--accent)] space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                        <h2 className="font-bold text-lg">תפריט נגישות</h2>
                        <button onClick={() => { setIsOpen(false); toggleRef.current?.focus(); }} className="text-gray-500 hover:text-black" aria-label="סגור תפריט נגישות">
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        {OPTIONS.map(({ key, icon, label, activeClass }) => (
                            <button
                                key={key}
                                onClick={() => setSettings((prev) => ({ ...prev, [key]: !prev[key] }))}
                                aria-pressed={!!settings[key]}
                                className={`p-2 rounded text-right transition-colors ${settings[key] ? activeClass : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                <span aria-hidden="true">{icon}</span> {label}
                            </button>
                        ))}
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                        <button onClick={resetAll} className="p-2 text-red-600 font-bold hover:bg-red-50 rounded text-center transition-colors">
                            <span aria-hidden="true">🔄</span> איפוס הגדרות
                        </button>
                        <Link href="/accessibility" onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 text-center font-bold rounded hover:bg-gray-200 transition-colors">
                            <span aria-hidden="true">📜</span> הצהרת נגישות מלאה
                        </Link>
                    </div>
                </div>
            )}

            {/* The Main Button */}
            <button
                ref={toggleRef}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="a11y-menu"
                className="w-14 h-14 bg-white hover:bg-[var(--accent)] text-[#2B2B2B] hover:text-black rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.3)] border-2 border-[var(--accent)] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="תפריט נגישות"
                title="אפשרויות נגישות"
            >
                <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
