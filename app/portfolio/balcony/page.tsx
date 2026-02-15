import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'מרפסת פנורמית ופינת רביצה - אדריכלות ועיצוב פנים',
    description: 'עיצוב מרפסת פנורמית עם פינת רביצה – תכנון מרחב חיצוני מודרני ונוח. סטודיו AZ Designs לעיצוב פנים.',
    openGraph: {
        title: 'מרפסת פנורמית ופינת רביצה - AZ Designs',
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
            images={images}
        />
    );
}
