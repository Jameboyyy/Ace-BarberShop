

import Teampage from "./teampage";
import sanityClient from "@/acebarbershop/sanityClient";

async function getSanityData () {
    const teamQuery = `*[_type == "teampage"][0]{
        bookingLink,
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
        const [teamData] = await Promise.all([
            sanityClient.fetch(teamQuery, { cache: "no-store"}),
        ]);


        return { teamData };
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return {
            teamData: null,
        };
    }
}

export default async function Page() {
    const { teamData } = await getSanityData();

    return (
        <Teampage
            barberProfiles={teamData?.barberProfiles || []}
            teamLandscapePicture={teamData?.teamLandscapePicture || []}
            bookingLink={teamData?.bookingLink || ""}
        />
    );
}