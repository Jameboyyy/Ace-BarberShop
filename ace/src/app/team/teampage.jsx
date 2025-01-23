"use client"

import React from 'react';
import './teampage.css';


const Teampage = ({barberProfiles}) => {
    const handleBooking = () => {

    }

    return (
        <section id="teampage">
            <div className="teampage__landscape--container">
                
            </div>
            <div className="homepage__meetTheTeam--container">
                <h2 className="meetTheTeam--title">Meet The Team</h2>
                <div className="barber__card--wrapper">
                    {barberProfiles && barberProfiles.length > 0 ? (
                        barberProfiles.slice(0, 12).map((barber, index) => (
                            <div
                                key={barber.barbersortOrder || index}
                                className="barber__card--container"
                            >
                                <div className="barber__card--img">
                                    <img src={barber.photoUrl} alt={barber.name} />
                                </div>
                                <h4 className="barber__card--name">{barber.name}</h4>
                                <p className="barber__card--desc">{barber.bio}</p>
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
