import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'עיצוב מרפסת פנורמית ופינת רביצה מודרנית - AZ Designs',
    description: 'עיצוב מרפסת פנורמית עם פינת רביצה מודרנית ונוחה – תכנון מרחב חיצוני ייחודי. סטודיו AZ Designs לעיצוב פנים.',
    openGraph: {
        title: 'עיצוב מרפסת פנורמית ופינת רביצה מודרנית - AZ Designs',
        description: 'עיצוב מרפסת פנורמית עם פינת רביצה – תכנון מרחב חיצוני מודרני ונוח.',
        images: ['/gallery/balcony/cover.jpeg'],
    },
};

const images = [
    '/gallery/balcony/cover.jpeg',
    '/gallery/balcony/1.jpeg',
    '/gallery/balcony/2.jpeg',
];

export default function BalconyPage() {
    return (
        <ProjectGallery
            title="מרפסת פנורמית ופינת רביצה"
            subtitle="עיצוב מרחב חיצוני"
            description="המקום שימש כמרפסת סטנדרטית, לתקופה מוגבלת בימות השנה. היציאה בחורף בגשם הקר לא הייתה אופציה, אף בימות הקיץ הלוהט המרפסת לא נוצלה כראוי. בתכנון קפדני הכנסתי את כל הנוף המשגע לתוך המרפסת ע״י פריצה והגדלת החלונות. קירוי חשמלי פונקציונאלי פתר את בעיית הגשם והשמש. והפכתי את החלל לאזור רביצה נעים לכל תקופות השנה. בקו עיצוב של הבית הפכנו את האזור לחלק בלתי נפרד מחלל הסלון."
            images={images}
        />
    );
}
