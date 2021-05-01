import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import './Contact.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
import { faFacebook,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const onSubmit = data => console.log(data);
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div>
            <Navbar/>
            <div>
                <div className='row py-5 w-100 m-auto'>
                    <h1 className='my-3' style={{fontSize:'50px'}}>GET IN <span style={{color:'#ffb400'}}>TOUCH</span> </h1>
                    <div className='col-md-4 col-12'>
                        <div className='container'>
                            <h4 style={{fontSize:'30px'}} className='text-start px-4'>SEND ME AN EMAIL</h4>
                            <p style={{fontSize:'18px'}} className='text-start px-4'>Feel free to get in touch with me. I am always open to discussing new  projects or creative ideas.</p>
                        </div>
                        <div className='d-flex container'>
                            <div className='text-start px-4' style={{fontSize:'35px', color:'#ffb400'}}><FontAwesomeIcon icon={faEnvelopeOpen} /></div>
                            <div>
                                <h5 className='text-start'>MAIL ME</h5>
                                <h5 className='text-start'>iqbalahmed9865@gmail.com</h5>
                            </div>
                        </div>

                        <div className='d-flex container my-4'>
                            <div className='text-start px-4' style={{fontSize:'40px', color:'#ffb400'}}><FontAwesomeIcon icon={faPhoneSquareAlt} /></div>
                            <div>
                                <h5 className='text-start'>CALL ME</h5>
                                <h5 className='text-start'>01755837019</h5>
                            </div>
                            
                        </div>

                        <a href="https://www.facebook.com/IqbalEmon142/"><FontAwesomeIcon style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faFacebook} /></a>
                        <a href="https://github.com/iqbal9865"><FontAwesomeIcon style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/iqbal-ahmed43/"><FontAwesomeIcon style={{fontSize:'30px',margin:'10px',color:'#fff'}} icon={faLinkedin} /></a>
                        

                    </div>
                    <div className='col-md-8 col-12'>
                      <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex'>
                            <div className="form-group container col-md-4 col-6">
                            <input className="form-control" placeholder='Enter Your Name' {...register("name", { required: true })} />
                            </div> 

                            <div className='form-group container col-md-4 col-6'>
                            <input className='form-control' placeholder='Enter Your Email' {...register("email", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <div className="form-group container col-md-4">
                            <input className="form-control" placeholder='Your Subject' {...register("subject", { required: true })} />
                            </div>
                        </div>
                        <div className='form-group container'>
                             <textarea className='form-control' placeholder='Your Message' rows="6" cols="100">
                        
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