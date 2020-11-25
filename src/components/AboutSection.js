import React from 'react';

const AboutSection = () => {

    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>My Name Is</h2>
                    </div>
                    <div className="hide">
                        <h2><span>Josh Townsend!</span></h2>
                    </div>
                    <div className="hide">
                        <h2>Welcome To My Portfolio</h2>
                    </div>
                </div>
                <p>
                    Take a journey through my works and explore away!
                </p>
                <button>Contact Me</button>
            </div>
            <div className="contact-image">
                <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" 
                alt=""/>
            </div>
        </div>
    )
}

export default AboutSection;