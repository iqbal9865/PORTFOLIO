import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './About.css'
import AboutMe from './AboutMe';
import ExpEdu from './ExpEdu';
import Skills from './Skills';
const About = () => {
    return (
        <div>
            <Navbar/>
            <AboutMe/>
            <ExpEdu/>
            <Skills/>
        </div>
    );
};

export default About;