"use client";

import React from 'react';
import './gallerypage.css'

const Gallerypage = ({galleryImages}) => {
    return (
        <section id="gallery">
            <div className="homepage__gallery--container">
                        <div className="gallery__grid">
                            {galleryImages && galleryImages.length > 0 ? (
                                galleryImages
                                    .slice(0, 20)
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
        </section>
    );
}

export default Gallerypage;
