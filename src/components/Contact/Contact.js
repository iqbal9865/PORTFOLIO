import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import './Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

import { faFacebook,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    
    const { register, formState: { errors } } = useForm();
    return (
        <div>
            <Navbar/>
            <div>
                <div className='row py-2 w-100 m-auto container'>
                    
                    <div className='col-lg-4 col-12 mt-5 pt-5'>
                        <div className=''>
                            <h4 style={{fontSize:'30px'}} className='text-start pr-5'>SEND ME AN EMAIL</h4>
                            <p style={{fontSize:'18px'}} className='text-start pr-5'>Feel free to get in touch with me. I am always open to discussing new  projects or creative ideas.</p>
                        </div>
                        <div className='d-flex'>
                            <div className='text-start' style={{fontSize:'35px', color:'#ffb400'}}><FontAwesomeIcon icon={faEnvelopeOpen} /></div>
                            <div>
                                <h5 className='text-start px-4'>MAIL ME</h5>
                                <h5 className='text-start px-4'>iqbalahmed9865@gmail.com</h5>
                            </div>
                        </div>

                        <div className='d-flex my-4'>
                            <div className='text-start' style={{fontSize:'40px', color:'#ffb400'}}><FontAwesomeIcon icon={faPhoneSquareAlt} /></div>
                            <div>
                                <h5 className='text-start px-4'>CALL ME</h5>
                                <h5 className='text-start px-4'>01755837019</h5>
                            </div>     
                        </div>
                        <div className='text-start'>
                        <a href="https://www.facebook.com/IqbalEmon142/"><FontAwesomeIcon style={{fontSize:'30px',marginLeft:'50px',marginBottom:'30px',color:'#fff'}} icon={faFacebook} /></a>
                        <a href="https://github.com/iqbal9865"><FontAwesomeIcon style={{fontSize:'30px',marginLeft:'10px',marginBottom:'30px',color:'#fff'}} icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/iqbal-ahmed43/"><FontAwesomeIcon style={{fontSize:'30px',marginLeft:'10px',marginBottom:'30px',color:'#fff'}} icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className='col-lg-8 col-12'>
                    <h1 className='my-3 get-in-touch' style={{fontSize:'45px',color:'#ffb400', textAlign: 'left', padding: '0 18px'}}>GET IN TOUCH </h1>
                      <form className='form' target='_blank' action="https://formspree.io/f/xgerozkq"
                        method="POST">
                        <div>
                            <div className="form-group col-md-12 container mt-2 mb-3">
                            <input className="form-control" placeholder='Enter Your Name' {...register("name", { required: true })} />
                            </div> 

                            <div className='form-group container col-md-12 my-3'>
                            <input className='form-control' placeholder='Enter Your Email' {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="form-group container col-md-12 my-3">
                            <input className="form-control" placeholder='Your Subject' {...register("subject",{ required: true })} />
                            </div>
                        </div>
                        <div className='form-group container'>
                             <textarea className='form-control' placeholder='Your Message' rows="5" cols="100"  {...register("text", { required: true })}>
                        
                        </textarea> </div>
                         <input className='submit my-4 d-flex justify-content-start' type="submit" value='SEND MESSAGE' />
                      </form>
                    </div>

                </div>
           
            </div>
            

        </div>
    );
};

export default Contact;