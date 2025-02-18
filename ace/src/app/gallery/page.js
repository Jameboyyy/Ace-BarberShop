import Gallerypage from './gallerypage';
import sanityClient from '@/acebarbershop/sanityClient';

async function fetchGalleryData() {
    const galleryQuery = `*[_type == "gallerypage"] [0]{
        galleryImages[]{
                "url": asset-> url,
                _id
        }
    }`;

    try {
        const [galleryData] = await Promise.all([
            sanityClient.fetch(galleryQuery, { cache: "no-store"}),
        ]);


        return { galleryData };
    }   catch (error) {
        console.error('Error fetching data from Sanity: ', error);
        return {
            galleryData: null,
        };
    }
}

export default async function Page() {
    const { galleryData } = await fetchGalleryData();

    return (
        <Gallerypage
        galleryImages={galleryData?.galleryImages || {}}
        />
    );
}

