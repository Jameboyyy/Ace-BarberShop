import React from 'react';
import './homepage.css';

const Homepage = ({landscapeTitle}) => {
    return (
            <section id="homepage">
                <div className="homepage__landscape--container">
                    <h1 className="homepage__title">{landscapeTitle || 'Default Title'}</h1>
                </div>
            </section>

    );
}

export async function getServerSideProps() {
    const sanityClient = (await import('../../acebarbershop/sanityClient')).default;

    const query = `*[_type == "homePage"][0]{
        landscapeTitle,
        "landscapeVideoUrl": landscapeVideo.asset->url,
        missionStatement
}`;
    const data = await sanityClient.fetch(query);

    return {
        props: {
            landscapeTitle: data?.landscapeTitle || 'Default Title',
            landscapeVideoUrl: data?.landscapeVideoUrl || '',
            missionStatement: data?.missionStatement || 'Default Mission Statement',
        },
    };
}

export default Homepage;
