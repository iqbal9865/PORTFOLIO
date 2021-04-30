import React from 'react';
import './Header.css'
import iqbal1 from '../../Images/Iqbal1.png'
import iqbal2 from '../../Images/Iqbal2.png'
const Header = () => {
    return (
        <div className='row p-5 w-100'>
            <div className='col-md-5 col-sm-12 image-section'>
               <img className='image-fluid image' src={iqbal1} alt=""/>
            </div>
            <div className='col-md-7 col-sm-12 description py-5'>
               <div>
                    <h1 style={{color: '#ffb400',letterSpacing:'1px'}}> Hi !  I'M IQBAL AHMED.</h1>
                    <h1>WEB DEVELOPER</h1>
               </div>
               <div className="about py-3">
                   <strong className='text'>
                   I'm a Curious JavaScript Programmer & front‑end developer  focused on  <br/> crafting clean  & user‑friendly experiences, I am  passionate about building  <br/> excellent  software that improves the lives of those around me 
                   I just  want to expose  <br/> my skills in the field of ‘web development’ and want to learn a lot of things.
                   </strong>
                   <br/> <br/>
                   <button className='button'>DOWNLOAD RESUME</button>
               </div>

            </div>
        </div>
    );
};

export default Header;