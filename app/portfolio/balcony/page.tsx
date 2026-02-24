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
            images={images}
        />
    );
}
