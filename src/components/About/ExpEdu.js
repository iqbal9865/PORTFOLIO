import React from 'react';
import './About.css'
const ExpEdu = () => {
    return (
        <div>
             <div class='about-main pt-5 container'>
             <div className="row pb-3">
                <div className="col-md-6 experience">
                    <h3 className='text-end exp px-3 mb-5'>Experience</h3>

                    <p className='text-start px-3'>17 Feb 2022 - Present</p>
                    <h4 className='text-start px-3'> Jr. Software Engineer - Syftet, Mirpur DOHS, Dhaka</h4>
                    <p id='exp-text' className='text-start px-3 '>I am a Web Developer there. My job is building user interface, state management, server side rendaring using MEAN Stack.</p>

                    <p className='text-start px-3'>01 Jan 2020 - 30 April 2020</p>
                    <h4 className='text-start px-3'>Front-End Developer (Intern) - Source9, Dhaka</h4>
                    <p id='exp-text' className='text-start px-3 '>I was an Intern there. My job was building user friendly website using WordPress's themes and plugins. During working here I'm include in Web Development sector.</p>
                </div>
                <div className="col-md-6 education">
                    <h3 className='text-start edu px-3 mb-5'>Education</h3>
                    <p className='text-start px-3'>30 Dec 2017 - 31 Dec 2021</p>
                    <h4 className='text-start px-3'>BSc in CSE - City University, Dhaka, BD</h4>
                    <p id='edu-text' className='text-start px-3'>Here I am participate with many club activities. I am the Co-convener of BASIS student forum City University Chapter. I'm also an executive member of City University Programming Club</p>
                    <br />
                    <p className='text-start px-3'> June 2015 - June 2017</p>
                    <h4 className='text-start px-3'>HSC - Madan Mohan Collage, Sylhet</h4>
                    <p id='edu-text' className='text-start px-3'>Here I am participate with many club activities. Like Madan Mohan Collage Cultural Club etc.</p>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default ExpEdu;