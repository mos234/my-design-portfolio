'use client';

import { useState, type FormEvent } from 'react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const newErrors: { name?: string; phone?: string } = {};
        if (!name.trim()) newErrors.name = 'נא למלא שם מלא';
        if (!phone.trim()) newErrors.phone = 'נא למלא מספר טלפון';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const whatsappNumber = ['972','504','673','332'].join('');
        const text = `שלום, שמי ${name.trim()}\nטלפון: ${phone.trim()}${message.trim() ? `\n${message.trim()}` : ''}`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-[var(--accent)]">צור קשר</h1>
                        <p className="text-2xl font-bold text-[var(--accent)] leading-relaxed">
                            מוכנים להתחיל את המסע? <br />אשמח לשמוע על החלום שלכם.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-start gap-6">
                            <div className="bg-[var(--accent)] text-[var(--foreground)] p-4 rounded-full">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-black text-2xl mb-1 text-[var(--accent)]">טלפון</h3>
                                <a href={`tel:+${['972','504','673','332'].join('')}`} className="block text-xl font-bold text-white hover:text-[var(--accent)] transition-colors" dir="ltr">050-467-3332</a>
                                <p className="text-lg text-white/60 font-medium mt-1">זמין לשיחות והודעות WhatsApp</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-[var(--accent)] text-[var(--foreground)] p-4 rounded-full">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-black text-2xl mb-1 text-[var(--accent)]">אימייל</h3>
                                <a href="mailto:avi.zvebv@gmail.com" className="block text-xl font-bold text-white hover:text-[var(--accent)] transition-colors">avi.zvebv@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-[var(--accent)] text-[var(--foreground)] p-4 rounded-full">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-black text-2xl mb-1 text-[var(--accent)]">שעות פעילות</h3>
                                <p className="text-xl font-bold text-[var(--accent)]">זמינות אונליין 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-[var(--foreground)]/5 mt-8 md:mt-0">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div>
                            <label htmlFor="name" className="block text-lg font-bold mb-2 text-[var(--accent)]">שם מלא</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={name}
                                onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                                className={`w-full px-5 py-4 rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-[var(--foreground)]/10'} focus:border-[var(--accent)] outline-none transition-all font-medium bg-[var(--background)] text-[var(--accent)]`}
                                placeholder="ישראל ישראלי"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1 font-medium">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-lg font-bold mb-2 text-[var(--accent)]">טלפון</label>
                            <input
                                type="tel"
                                id="phone"
                                required
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })); }}
                                className={`w-full px-5 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-500' : 'border-[var(--foreground)]/10'} focus:border-[var(--accent)] outline-none transition-all font-medium bg-[var(--background)] text-[var(--accent)]`}
                                placeholder="050-0000000"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1 font-medium">{errors.phone}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-bold mb-2 text-[var(--accent)]">כיצד אוכל לעזור?</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-5 py-4 rounded-xl border-2 border-[var(--foreground)]/10 focus:border-[var(--accent)] outline-none transition-all font-medium bg-[var(--background)] text-[var(--accent)]"
                                placeholder="אני מתעניין בעיצוב..."
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[var(--accent)] text-[var(--background)] font-black text-xl py-5 rounded-xl hover:bg-[var(--foreground)] transition-all transform hover:-translate-y-1 shadow-md">
                            שלח הודעה
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
