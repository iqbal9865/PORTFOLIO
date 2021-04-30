import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* <div className="container"> */}

        <div className="navi container-fluid w-100">
          <a className="navbar-brand logo w-25" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto w-75 d-flex justify-content-end">
              <li className="nav-item">
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/projects'>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/blogs'>Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/coverLetter'>Cover Letter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>Contact</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
    {/* </div> */}
      </nav>
    );
};

export default Navbar;