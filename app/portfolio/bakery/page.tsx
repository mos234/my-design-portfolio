import type { Metadata } from 'next';
import ProjectGallery from '@/components/ProjectGallery';

export const metadata: Metadata = {
    title: 'שיפוץ מאפייה מקצועית – עיצוב פנים ייחודי | AZ Designs',
    description: 'שיפוץ ועיצוב מאפייה מקצועית – גלריית לפני ואחרי מרשימה. סטודיו AZ Designs לעיצוב חללים מסחריים ומאפיות.',
    openGraph: {
        title: 'שיפוץ מאפייה מקצועית – עיצוב פנים ייחודי | AZ Designs',
        description: 'שיפוץ ועיצוב מאפייה מקצועית – גלריית לפני ואחרי.',
        images: ['/gallery/bakery/cover.jpeg'],
    },
};

const images = [
    '/gallery/bakery/cover.jpeg',
    '/gallery/bakery/0-before.jpeg',
    '/gallery/bakery/2-before.jpeg',
    '/gallery/bakery/3-before.jpeg',
    '/gallery/bakery/4-before.jpeg',
    '/gallery/bakery/0-after.jpeg',
    '/gallery/bakery/1-after.jpeg',
    '/gallery/bakery/2-after.jpeg',
    '/gallery/bakery/3-after.jpeg',
    '/gallery/bakery/4-after.jpeg',
    '/gallery/bakery/5-after.jpeg',
    '/gallery/bakery/6-after.jpeg',
    '/gallery/bakery/7-after.jpeg',
    '/gallery/bakery/8-after.jpeg',
    '/gallery/bakery/9-after.jpeg',
    '/gallery/bakery/10-after.jpeg',
    '/gallery/bakery/11-after.jpeg',
    '/gallery/bakery/12-after.jpeg',
    '/gallery/bakery/13-after.jpeg',
];

export default function BakeryPage() {
    return (
        <ProjectGallery
            title="בייקרי – מאפייה"
            subtitle="שיפוץ מאפייה – לפני ואחרי"
            images={images}
        />
    );
}
