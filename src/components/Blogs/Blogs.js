import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import int from '../../Images/int.png'
import react from '../../Images/react_f.png'
import JavaScript from '../../Images/Javascript-ES6.jpg'
import JS from '../../Images/js_foundamental.png'
const Blogs = () => {
    const textStyle = {
        color: 'black',
        textDecoration: 'none'
    }
    return (
        <div>
            <Navbar/>
          <div className="p-3 ">
          <div className='row '>
                <h1 style={{color:'#ffb400'}} className='my-4'>MY BLOGS</h1>
                
                <div className="col-lg-4 col-md-6 col-12 mb-5">
                <div className="card m-auto" style={{width: '21rem', height: '20rem'}}>
                    <a style={textStyle} target='_blank' href="https://iqbalahmed9865.medium.com/10-javascript-interview-questions-that-you-need-to-know-36750ed7ff06">
                    <img style={{height:'13rem'}} className="card-img-top image-fluid" src={int} alt="Card image cap" />
                    <div className="card-body">
                    <p style={textStyle} className="card-text">10 JavaScript interview questions that you need to know.</p>
                    </div></a>
                </div>

                </div>
              <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card m-auto" style={{width: '21rem',height: '20rem'}}>
                  <a  style={textStyle} target='_blank' href="https://iqbalahmed9865.medium.com/10-important-es6-things-that-every-js-developer-should-know-1981b8b1d88a">
                    <img  style={{height:'13rem'}} className="card-img-top  image-fluid" src={JavaScript} alt="Card image cap" />
                    <div className="card-body">
                    <p style={textStyle} className="card-text">10 important ES6 things that every JS programmer should know.</p>
                    </div>
                    </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="card m-auto" style={{width: '21rem', height: '20rem'}}>
                  <a  style={textStyle}  href="https://iqbalahmed9865.medium.com/10-fundamental-concept-of-react-js-that-you-should-know-as-a-react-js-developer-565231a8fddb" target='_blank'>
                    <img className="card-img-top image-fluid" style={{height:'13rem'}} src={react} alt="Card image cap" />
                    <div className="card-body">
                    <p style={textStyle} className="card-text">10 Fundamental Concept of react.js that you should know as a react.js developer</p>
                    </div>
                    </a>
                </div>
              </div>

              <div className="col-md-4  my-3">
              <div className="card m-auto" style={{width: '21rem', height: '20rem'}}>
                  <a  style={textStyle}  href="https://iqbalahmed9865.medium.com/javascript-core-fundamental-concept-part-1-e41fc0d8a8c5" target='_blank'>
                    <img className="card-img-top image-fluid" style={{height:'13rem'}} src={JS} alt="Card image cap" />
                    <div className="card-body">
                    <p style={textStyle} className="card-text">JavaScript Core Fundamental Concept (Part-1)</p>
                    </div>
                    </a>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default Blogs;