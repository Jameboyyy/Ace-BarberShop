"use client"

import React from 'react';
import './homepage.css';

const Homepage = ({ landscapeTitle, landscapeVideoUrl, missionStatement, servicesTitle, servicesProfile, barberProfiles, galleryImages}) => {
    const handleBooking = () => {
        const placeholderURL= '/placeholder-booking';
        window.location.href = placeholderURL;
    };
    return (
        <section id="homepage">
            <div className="homepage__landscape--container">
                <div className="landscape__video--container">
                    <h2 className="homepage__title">{landscapeTitle || 'Default Title'}</h2>
                    {landscapeVideoUrl ? (
                        <video
                            src={landscapeVideoUrl}
                            autoPlay
                            loop
                            muted
                            className="landscape-video"
                        />
                    ) : (
                        <p>No video available</p>
                    )}
                </div>
            </div>
            <div className="homepage__missionStatement--container">
                <h2 className="missionStatement--Title">Mission Statement</h2>
                <h5 className="missionStatement--para">{missionStatement || 'Default Mission Statement'}</h5>
                <button
                    className="missionStatement--btn"
                    onClick={handleBooking}
                    aria-label="Book an appointment now"
                >
                    Book Now
                </button>
            </div>
            <div className="homepage__services--container">
                <h2 className="homepage__services--title">{servicesTitle || 'Default Title'}</h2>
                {servicesProfile && servicesProfile.length > 0 ? (
                    servicesProfile
                    .slice(0,4)
                    .map((service, index) => (
                        <div key={service.serviceProfile} className="homepage__service--container">
                        <div className="homepage__service--heading">
                            <h4 className="homepage__service--title">{service.serviceTitle}</h4>
                            <h4 className="homepage__service--cost">${service.serviceCost}</h4>
                        </div>
                        <p className="homepage__service--desc">{service.serviceDesc}</p>
                        </div>
                    ))
                ) :(
                    <p>No services available</p>
                )}
                <button
                    className="missionStatement--btn"
                    onClick={handleBooking}
                    aria-label="Book an appointment now"
                >
                    See More
                </button>
            </div>
            <div className="homepage__meetTheTeam--container">
                <div className="homepage__meetTheTeam--title--container">
                    <h2 className="meetTheTeam--title">Meet The Team</h2>
                </div>
                <div className="barber__card--wrapper">
                    {barberProfiles && barberProfiles.length > 0 ? (
                            barberProfiles
                            .slice(0,3)
                            .map((barber, index) => (
                                <div key={barber.barbersortOrder || index}
                                className="barber__card--container">
                                    <div className="barber__card--img">
                                        <img src={barber.photoUrl} alt="" />
                                    </div>
                                    <h4 className="barber__card--name">{barber.name}</h4>
                                    <p className="barber__card--desc">{barber.bio}</p>
                                </div>
                            ))
                        ) :(
                            <p>No barber profiles available</p>
                        )}
                </div>
                    <button
                        className="missionStatement--btn"
                        onClick={handleBooking}
                        aria-label="Book an appointment now"
                        >
                            See More
                    </button>
            </div>
            <div className="homepage__gallery--container">
                <h2 className="homepage__gallery--title">Gallery</h2>
                <div className="gallery__grid">
                    {galleryImages && galleryImages.length > 0 ? (
                        galleryImages
                            .slice(0, 6)
                            .map((image, index) => (
                                <div
                                    key={image.id || index}
                                    className={`gallery__card--container ${
                                        image.orientation === "landscape" ? "landscape" : "portrait"
                                    }`}
                                >
                                    <img src={image.url} />
                                </div>
                            ))
                    ) : (
                        <p>No gallery images available</p>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Homepage;
