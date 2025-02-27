"use client"

import React, { useEffect } from 'react';
import './teampage.css';


const Teampage = ({barberProfiles, teamLandscapePicture }) => {
    const handleBooking = () => {

    }

    useEffect(() => {
        // ✅ Ensure team page grid resets correctly
        document.documentElement.style.setProperty("--grid-columns", "repeat(4, 1fr)");

        return () => {
            document.documentElement.style.removeProperty("--grid-columns"); // ✅ Cleanup when leaving
        };
    }, []);

    return (
        <section id="teampage">
            <div className="teampage__landscape--container">
                {teamLandscapePicture && teamLandscapePicture.length > 0 ? (
                        <img
                            src={teamLandscapePicture[0]?.asset?.url}
                            alt="Team Landscape"
                            className="team__landscape--image"
                            loading="lazy"
                        />
                ) : (
                    <p>No team landscape picture available</p>
                )}
            </div>
            <div className="teampage__meetTheTeam--container">
                <h2 className="meetTheTeam--title">Meet The Masters</h2>
                <div className="tpbarber__card--wrapper">
                    {barberProfiles && barberProfiles.length > 0 ? (
                        barberProfiles.slice(0, 12).map((barber, index) => (
                            <div
                                key={barber.barbersortOrder || index}
                                className="tpbarber__card--container"
                            >
                                <div className="tpbarber__card--img">
                                    <img src={barber.photoUrl} alt={barber.name} />
                                </div>
                                <h4 className="tpbarber__card--name">{barber.name}</h4>
                                <p className="tpbarber__card--desc">{barber.bio}</p>
                            </div>
                        ))
                    ) : (
                        <p>No barber profiles available</p>
                    )}
                </div>
            </div>
        </section>

    );
}

export default Teampage;
