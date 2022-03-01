import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import Navbar from '../../Shared/Navbar/Navbar';
import Data from '../../../Data/Data.json';
import './ProjectDetails.css'
const ProjectDetails = () => {

    const {id} = useParams()
    console.log(id)
    const [project, setProject] = useState({})
    useEffect(() => {
      setProject(Data.find(dt => dt.id === id))
      console.log(Data)
    },[id])
    const {img,name,description,features1,features2,features3,features4,features5,Live} = project;

    return (
        <div>
            <Navbar />
            <div className='projectDetails py-5 container'>
                <div className="row">
                    <div className="col-md-4 my-3">
                        <img className='img-fluid h-100 w-100' src={project.featureImg1} alt=""/>
                    </div>
                    <div className="col-md-4 my-3">
                        <img className='img-fluid h-100 w-100' src={project.featureImg2} alt=""/>
                    </div>
                    <div className="col-md-4 my-3">
                        <img className='img-fluid h-100 w-100' src={project.featureImg3} alt=""/>
                    </div>
                </div>

                

        <div className='row w-100 m-auto px-5'>
        <h1 className='name my-3'> {name}</h1>
        <h4><a className='live-link' href={Live}>LIVE SITE</a></h4>
                <div className="col-md-6  half-width">
                    <h3>Project Description</h3>
                    <p className='d-flex justify-content-center text-start text-justify'>{description}</p> <br/>
                    
                </div>
                
            <div className="col-md-6">
                <h3>Project Features</h3>
                <div className='d-flex justify-content-center'>
                   <div>
                    <p className='text-start'>{features1}</p>
                    <p className='text-start'>{features2}</p>
                    <p className='text-start'>{features3}</p>
                    <p className='text-start'>{features4}</p>
                    <p className='text-start'>{features5}</p>
                    </div> 
                </div>
            </div>
        </div>

    </div>
    </div>
    );
};

export default ProjectDetails;