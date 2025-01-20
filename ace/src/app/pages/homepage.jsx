"use client"

import React, { useRef } from 'react';
import './homepage.css';

const Homepage = ({ landscapeTitle, landscapeVideoUrl, missionStatement, servicesTitle, servicesProfile, barberProfiles, galleryImages}) => {
    const handleBooking = () => {

        }

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
                .sendForm(
                    'service_civ4wxd', // serviceID
                    'template_1wusypd', // templateID
                    form.current,

                )
                .then(
                    (result) => {
                        alert('Your message has been sent successfully!');
                    },
                    (error) => {
                        alert('An error occurred while sending your message.');
                    }
                );

            form.current.reset();

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
                            autoPlay
                            loop
                            muted
                            preload="metadata"
                            className="landscape-video"
                            loading="lazy"
                        >
                            <source src={landscapeVideoUrl} type="video/mp4" />
                        </video>
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
                        <div key={service.id || index} className="homepage__service--container">
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
                            .slice(0, 8)
                            .map((image, index) => (
                                <div key={image.id || index} className="gallery__card--container">
                                    <img src={image.url} alt={`Gallery image ${index + 1}`} />
                                </div>
                            ))
                    ) : (
                        <p>No gallery images available</p>
                    )}
                </div>
            </div>
            <div className="homepage__info--container">
                <div className="info__sections">
                    <h4 className="info__sections--title">Hours</h4>
                    <p className="info__sections--info">
                        Mon - Fri 9:00AM - 6:00PM <br/>
                        Sat 9:00AM - 5:00PM<br/>
                        Sun 10:AM - 3:00PM
                    </p>
                </div>
                <div className="info__sections">
                    <h4 className="info__sections--title">Contact</h4>
                    <p className="info__sections--info">
                        (714) 552-3012<br/>
                        barbershop@email.com
                    </p>
                </div>
                <div className="info__sections">
                    <h4 className="info__sections--title">Location</h4>
                    <p className="info__sections--info">
                    12072 Knott St Ste C <br/>
                    Garden Grove, CA 92841
                    </p>
                </div>
            </div>
            <div className="homepage__contact--container">
                <div className="homepage__contact--box">
                    <h2 className="contact__title">Contact</h2>
                    <form ref={form} className="contact__form">
                        <div className="form__row">
                            <div className="form__group half-width">
                                <label htmlFor="name">Name</label>
                                <input type="text" id='name' name="user_name" placeholder='John Smith'required />
                            </div>
                            <div className="form__group half-width">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' name='user_email' placeholder='johnsmith@email.com' required />
                            </div>
                        </div>
                        <div className="form__group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder='Your Message...' rows="5">
                                
                            </textarea>
                        </div>
                        <button className="form__submit--btn">
                            Submit
                        </button>
                        
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Homepage;
