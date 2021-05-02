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
      setProject(Data.find(dt => dt.id == id))
      console.log(Data)
    },[id])
    const {img,name,description,features1,features2,features3,features4,features5,Live} = project;

    return (
        <div>
            <Navbar />
            <div className='projectDetails py-5'>
                <div className="row m-2">
                    <div className="col-md-4 featureImage-section my-3">
                        <img className='image-fluid h-100 w-100' src={project.featureImg1} alt=""/>
                    </div>
                    <div className="col-md-4 my-3">
                        <img className='image-fluid h-100 w-100' src={project.featureImg2} alt=""/>
                    </div>
                    <div className="col-md-4 my-3">
                        <img className='image-fluid h-100 w-100' src={project.featureImg3} alt=""/>
                    </div>
                </div>

                

        <div className='row w-100 m-auto px-5'>
        <h1 className='name mt-5 mb-5'> {name}</h1>
                <div className="col-md-6  half-width">
                    <h3>Project Description</h3>
                    <strong className='d-flex justify-content-center'>{description}</strong> <br/>
                    <h4><a className='live-link' href="https://city-riders-752aa.web.app/">LIVE SITE</a></h4>
                </div>
                
            <div className="col-md-6">
                <h3>Project Features</h3>
                <div className='d-flex justify-content-center'>
                   <div>
                    <strong>{features1}</strong><br/>
                    <strong>{features2}</strong><br/>
                    <strong>{features3}</strong><br/>
                    <strong>{features4}</strong><br/>
                    <strong>{features5}</strong>
                    </div> 
                </div>
            </div>
        </div>

    </div>
    </div>
    );
};

export default ProjectDetails;