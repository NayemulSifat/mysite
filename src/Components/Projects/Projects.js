import React from 'react';
import project from '../images/Project'
import './Projects.css';


const Projects = () => {
    return (
        <div className="Projects">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST <span>PROJECTS</span></h2>
                    <p>An eye for detail makes my works excellent</p>
                </div>
                <div className="row">
                
                        {
                        project.map(data =><div key={data.Id} className="col-lg-4 col-md-6"> 
                        <div className="card mt-4">
                        <img className="card-img-top" src={data.Image} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{data.Name}</h5>
                            <p className="card-text">{data.Description}</p>
                            <a href={data.GitLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-github mr-3 size-3"/></a>
                            <a href={data.SiteURL} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link"/></a>
                        </div>
                    </div>
                    </div>) 
                        }
                    
                </div>
            </div>
        </div>
    );
};

export default Projects;