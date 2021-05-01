import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Projects.css'
import { useHistory } from 'react-router-dom';
import Data from '../../Data/Data.json'
const Projects = () => {
    
    const history = useHistory()
    const handleInfo = (id) => {
        console.log('clicked project', id)
        history.push(`/projectsDetails/${id}`);
    }
    return (
        <div>
            <Navbar />
            <div className='project-main p-3'>
                <h1 className='p-5 title'>MY PROJECTS</h1>
                <div className='row'>
                    {
                        Data.map(project => 
                         <div className='col-md-4  pb-5' onClick={() => handleInfo(project.id)}>
                            <img className='image-fluid' src={project.img} alt=""/>
                        </div> )
                    }
                </div>
            </div>

        </div>
    );
};

export default Projects;