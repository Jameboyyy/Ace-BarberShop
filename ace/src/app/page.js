import Homepage from './pages/homepage';
import sanityClient from '../acebarbershop/sanityClient';

async function getSanityData() {
    const homepageQuery = `*[_type == "homePage"][0]{
        landscapeTitle,
        "landscapeVideoUrl": landscapeVideo.asset->url,
        missionStatement
    }`;

    const servicesQuery = `*[_type == "servicesPage"][0]{
        servicesTitle,
        servicesProfile[] {
            serviceTitle,
            serviceDesc,
            serviceCost
        }
    }`;

    const galleryQuery = `*[_type == "gallerypage"][0]{
        title,
        galleryImages[]{
            asset->{
                _id,
                url
            },
            orientation
        }
    }`;

    const teamQuery = `*[_type == "teampage"][0]{
        teamLandscapePicture[]{
            asset->{
                _id,
                url
            }
        },
        barberProfiles[] {
            name,
            bio,
            "photoUrl": barberPhoto.asset->url,
            sortOrder
        }
    }`;

    try {
        const [homepageData, servicesData, galleryData, teamData] = await Promise.all([
            sanityClient.fetch(homepageQuery),
            sanityClient.fetch(servicesQuery),
            sanityClient.fetch(galleryQuery),
            sanityClient.fetch(teamQuery),
        ]);

        return { homepageData, servicesData, galleryData, teamData };
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return {
            homepageData: null,
            servicesData: null,
            galleryData: null,
            teamData: null,
        };
    }
}

export default async function Page() {
    const { homepageData, servicesData, galleryData, teamData } = await getSanityData();

    return (
        <Homepage
            landscapeTitle={homepageData?.landscapeTitle}
            landscapeVideoUrl={homepageData?.landscapeVideoUrl}
            missionStatement={homepageData?.missionStatement}
            servicesTitle={servicesData?.servicesTitle || []}
            servicesProfile={servicesData?.servicesProfile || []}
            galleryImages={galleryData?.galleryImages || []}
            barberProfiles={teamData?.barberProfiles || []}
        />
    );
}
