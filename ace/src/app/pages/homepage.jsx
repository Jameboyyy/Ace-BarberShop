import React from 'react';
import './homepage.css';

const Homepage = ({ landscapeTitle }) => {
    return (
        <section id="homepage">
            <div className="homepage__landscape--container">
                <h2 className="homepage__title">{landscapeTitle || 'Default Title'}</h2>


            </div>
        </section>
    );
};
export default Homepage;
