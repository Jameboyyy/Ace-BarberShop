import Homepage from './pages/homepage';
import sanityClient from '../acebarbershop/sanityClient'; // Import existing Sanity client

async function getSanityData() {
    const query = `*[_type == "homePage"][0]{
        landscapeTitle,
        "landscapeVideoUrl": landscapeVideo.asset->url,
        missionStatement
    }`;

    try {
        const data = await sanityClient.fetch(query);
        return data;
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return {
            landscapeTitle: 'Error fetching data',
            landscapeVideoUrl: '',
            missionStatement: '',
        };
    }
}

export default async function Page() {
    const data = await getSanityData();

    return (
        <Homepage
            landscapeTitle={data.landscapeTitle}
            landscapeVideoUrl={data.landscapeVideoUrl}
            missionStatement={data.missionStatement}
        />
    );
}
