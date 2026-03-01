'use client';


function getPhone() {
    const p = ['972','504','673','332'];
    return p.join('');
}

export default function SocialButtons() {
    const whatsappNumber = getPhone();
    const message = "היי אבי, אשמח לשמוע פרטים על עיצוב פנים";

    return (
        <div className="flex flex-row gap-3 justify-center py-4 sm:fixed sm:left-6 sm:bottom-24 sm:flex-col sm:py-0 sm:z-[60]">

            {/* WhatsApp */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-12 sm:h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="שלח הודעה ב-WhatsApp"
            >
                <svg viewBox="0 0 24 24" width="18" height="18" className="sm:w-6 sm:h-6 fill-current stroke-none">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.164-.173.199-.347.223-.647.075-.299-.15-1.258-.463-2.394-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.294.174-1.418-.074-.125-.272-.199-.572-.349z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.23 20 8.58 19.46 7.18 18.54L4.85 19.3L5.64 16.99C4.69 15.6 4.14 13.88 4.14 12C4.14 7.66 7.66 4.14 12 4.14C16.34 4.14 19.86 7.66 19.86 12C19.86 16.34 16.34 20 12 20Z" />
                </svg>
            </a>

            {/* Facebook */}
            <a
                href="#"
                className="w-9 h-9 sm:w-12 sm:h-12 bg-[#1877F2] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="עקוב בפייסבוק"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>

            {/* Instagram */}
            <a
                href="#"
                className="w-9 h-9 sm:w-12 sm:h-12 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                aria-label="עקוב באינסטגרם"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg>
            </a>

        </div>
    );
}
