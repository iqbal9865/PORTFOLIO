import React from 'react'
import './About.css';
import iqbal3 from '../../Images/iqbal3.JPG'
import iqbal4 from '../../Images/iqbal4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
const AboutMe = () => {
    return(
        <div className='about-main py-4 m-auto w-75 m-auto'>
            <h1 className='title py-5'>My Resume</h1>
            <div className="row about-me">
                <div className="col-md-6">
                    <img className='image-fluid' src={iqbal3} alt=""/>
                </div>
                <div className="col-md-6">
                    <p className='text-start about-text'>I'm Iqbal Ahmed, bangladeshi based web designer and front‑end developer living in Sylhet focused on crafting clean, creative and user‑friendly experiences, I build beautiful and powerful websites and android applications.</p>
                    <div className='d-flex py-3'>
                        <div className='text-start px-3' style={{fontSize:'30px', color:'#ffb400'}}><FontAwesomeIcon icon={faEnvelopeOpen} />
                        </div>
                        <div>
                            <h5 className='text-start'>Email</h5>
                            <h5 className='text-start'>iqbalahmed9865@gmail.com</h5>
                        </div>
                        <div className='text-start px-3' style={{fontSize:'35px', color:'#ffb400'}}><FontAwesomeIcon icon={faPhoneSquareAlt} /></div>
                            <div>
                                <h5 className='text-start'>Mobile No.</h5>
                                <h5 className='text-start'>01755837019</h5>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;