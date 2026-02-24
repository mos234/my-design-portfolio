import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'עיצוב דירת נופש ייחודית - AZ Designs',
    description: 'עיצוב ותכנון דירת נופש ייחודית – חלל מזמין ונעים המשלב פונקציונליות עם אסתטיקה. סטודיו AZ Designs לעיצוב פנים.',
    openGraph: {
        title: 'עיצוב דירת נופש ייחודית - AZ Designs',
        description: 'עיצוב ותכנון דירת נופש – חלל מזמין ונעים המשלב פונקציונליות עם אסתטיקה.',
        images: ['/gallery/vacation-apartment/cover.jpeg'],
    },
};

const images = [
    '/gallery/vacation-apartment/cover.jpeg',
    '/gallery/vacation-apartment/1.jpeg',
    '/gallery/vacation-apartment/2.jpeg',
    '/gallery/vacation-apartment/3.jpeg',
];

export default function VacationApartmentPage() {
    return (
        <ProjectGallery
            title="דירת נופש"
            subtitle="עיצוב ותכנון"
            images={images}
        />
    );
}
