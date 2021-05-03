import React from 'react'
import './About.css';
import iqbal3 from '../../Images/iqbal3.JPG'
import Iqbal2 from '../../Images/Iqbal2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
const AboutMe = () => {
    return(
        <div className='about-main py-4 w-75 m-auto'>
            <h1 className='title py-5'>My Resume</h1>
            <div className="row about-me">
                <div className="col-md-6">
                    <img className='image-fluid' src={Iqbal2} alt=""/>
                </div>
                <div className="col-md-6">
                    <p className='text-start about-text mt-4'>I'm Iqbal Ahmed, Bangladeshi based web designer and MERN STACK developer living in Sylhet focused on crafting clean, creative and user‑friendly experiences, I build beautiful and powerful websites.</p>
                    <div className='py-3'>
                       <div className='d-flex'>
                       <div className='text-start px-3' style={{fontSize:'30px', color:'#ffb400'}}><FontAwesomeIcon icon={faEnvelopeOpen} />
                        </div>
                        <div>
                            <h5 className='text-start'>Email</h5>
                            <h5 className='text-start'>iqbalahmed9865@gmail.com</h5>
                        </div>
                       </div>
                        
                        <div className='d-flex mt-4'>
                        <div className='text-start px-3' style={{fontSize:'35px', color:'#ffb400'}}><FontAwesomeIcon icon={faPhoneSquareAlt} /></div>
                            <div>
                                <h5 className='text-start'>Mobile No.</h5>
                                <h5 className='text-start'>01755837019</h5>
                            </div>
                        </div>

                        <div className='d-flex mt-4'>
                        <div className='text-start px-3' style={{fontSize:'35px', color:'#ffb400'}}><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <div>
                                <h5 className='text-start'>Address.</h5>
                                <h5 className='text-start'>Sylhet-3106, Bangladesh</h5>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;