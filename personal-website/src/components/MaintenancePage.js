import React from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal/Fade';

export default function MaintenancePage(){
    let colors = ["#56D0F1", "#F1B3C8"]
    return (
        <>
        <Fade bottom>
        <div className="maintenance-content">
            <h1 className="maintenance-heading">Site currently under maintenance</h1>
            <p className="maintenance-link"><a className="maintenance-link" href="https://pornhub.com">Resume</a></p>
            <p className="maintenance-link"><a className="maintenance-link" href="https://www.linkedin.com/in/nreuben/">LinkedIn</a></p>
            <p className="maintenance-link"><a className="maintenance-link" href="mailto:nitishreuben2600@gmail.com">nitishreuben2600@gmail.com</a></p>
        </div>
        </Fade>
        <ParticlesBg type="circle" bg={true} color={colors}/>
        </>
    );
}