import React from 'react';
import './Header.css'
import iqbal1 from '../../Images/Iqbal1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        
        <div className='row p-5 w-100 m-auto'>      
            <div className='col-md-5 col-sm-12 image-section'>
               <img className='image-fluid image' src={iqbal1} alt=""/>
            </div>
            <div className='col-md-7 col-sm-12 description '>
               <div>
                    <h1 id='animated' className='pt-5' style={{color: '#ffb400',letterSpacing:'1px',marginLeft:'90px'}}> Hi I'M IQBAL AHMED.</h1>
                    <h1 >WEB DEVELOPER</h1>
               </div>
               <div className="about py-3">
                   <p className='text text-start'>
                   I'm a Curious JavaScript Programmer & MERN STACK Web developer  focused on   crafting clean and user‑friendly experiences, I am  passionate about building  excellent  software that improves the lives of those around me 
                   I just  want to expose  my skills in the field of ‘web development’ and want to learn a lot of things. Coding is my passion, I don't feel bored when I coding. SO you are always welcome in My World!
                   </p>
                   
                   <a href="https://drive.google.com/uc?export=download&id=140-HWDdvLqCnmp4VmsRVPUP__6IfV-fc" ><button className='button'>DOWNLOAD RESUME</button></a>
               </div>
               <div className='text-end mt-3'>
               <a  href="https://www.facebook.com/IqbalEmon142/"><FontAwesomeIcon className='social-link' style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faFacebook} /></a>
                <a className='social-link' href="https://github.com/iqbal9865"><FontAwesomeIcon className='social-link' style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faGithub} /></a>
                <a className='social-link' href="https://www.linkedin.com/in/iqbal-ahmed43/"><FontAwesomeIcon className='social-link' style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faLinkedin} /></a>
               </div>
            </div>
            
        </div>
    );
};

export default Header;