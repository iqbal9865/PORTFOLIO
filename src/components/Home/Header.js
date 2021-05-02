import React from 'react';
import './Header.css'
import iqbal1 from '../../Images/Iqbal1.png'
import iqbal2 from '../../Images/Iqbal2.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
import { faFacebook,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <div className='row p-5 w-100 m-auto'>
            <div className='col-md-5 col-sm-12 image-section'>
               <img className='image-fluid image' src={iqbal1} alt=""/>
            </div>
            <div className='col-md-7 col-sm-12 description '>
               <div>
                    <h1 id='animated' className='pt-5' style={{color: '#ffb400',letterSpacing:'1px',marginLeft:'90px'}}> Hi !  I'M IQBAL AHMED.</h1>
                    <h1 >WEB DEVELOPER</h1>
               </div>
               <div className="about py-3">
                   <strong className='text'>
                   I'm a Curious JavaScript Programmer & MERN STACK developer  focused on  <br/> crafting clean  & user‑friendly experiences, I am  passionate about building  <br/> excellent  software that improves the lives of those around me 
                   I just  want to expose  <br/> my skills in the field of ‘web development’ and want to learn a lot of things.
                   </strong>
                   <br/> <br/>
                   <a href="https://drive.google.com/uc?export=download&id=140-HWDdvLqCnmp4VmsRVPUP__6IfV-fc" ><button className='button'>DOWNLOAD RESUME</button></a>
               </div>
               <div className='text-end mt-5'>
               <a href="https://www.facebook.com/IqbalEmon142/"><FontAwesomeIcon style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faFacebook} /></a>
                <a href="https://github.com/iqbal9865"><FontAwesomeIcon style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/iqbal-ahmed43/"><FontAwesomeIcon style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faLinkedin} /></a>
               </div>
            </div>

        </div>
    );
};

export default Header;