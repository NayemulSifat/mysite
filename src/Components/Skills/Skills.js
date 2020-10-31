import React from 'react';
import './Skills.css';
import html from '../images/icons/html.png';
import css from '../images/icons/css.png';
import js from '../images/icons/js.png';
import react from '../images/icons/react.png';
import bootstrap from '../images/icons/bootstrap.png';
import redux from '../images/icons/redux.png';
import node from '../images/icons/nodejs.png';
import express from '../images/icons/expressjs.png';
import mongo from '../images/icons/mongodb.png';
import material from '../images/icons/meta-ui.png';
import heroku from '../images/icons/heroku.png';
import netlify from '../images/icons/netlify.png';
import firebase from '../images/icons/firebase.png';
import git from '../images/icons/git.png';
import github from '../images/icons/github.png';
import vs from '../images/icons/vs-code.png';
import npm from '../images/icons/npm.png';
import cdt from '../images/icons/cdt.png';
import xd from '../images/icons/xd.png';
import figma from '../images/icons/figma.png';

const Skills = () => {
    return (
        <div className="Skills container text-center py-5 mt-5 animate__animated animate__zoomIn">
            <div className="header">
                <h2>TECHNICAL <span>SKILLS</span></h2>
                <p>First you should know</p>
            </div>
            <div className="comfortable">
                <h3>Comfortable</h3>
                <div className="row d-flex justify-content-center align-items-center">
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={react} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>React</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'40px', paddingTop:'8px'}} src={js} alt=""/>
                        <figcaption style={{marginTop:'7px'}}>JavaScript</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'67px'}} src={bootstrap} alt=""/>
                        <figcaption>Bootstrap</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={html} alt=""/>
                        <figcaption style={{marginTop:'5px'}}>HTML</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'46px'}} src={css} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>CSS</figcaption>
                    </div>
                </div>
            </div>
            <div className="familiar mt-5">
                <h3>Familiar</h3>
                <div className="row d-flex justify-content-center align-items-center"> 
                     <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={redux} alt=""/>
                        <figcaption style={{marginTop:'13px'}}>Redux</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'43px'}} src={node} alt=""/>
                        <figcaption style={{marginTop:'13px'}}>Node.js</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'55px'}} src={express} alt=""/>
                        <figcaption style={{marginTop:'6px'}}>Express.js</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'60px'}} src={mongo} alt=""/>
                        <figcaption>MongoDB</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'38px'}} src={firebase} alt=""/>
                        <figcaption style={{marginTop:'8px'}}>Firebase</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'45px', paddingTop:'15px'}} src={material} alt=""/>
                        <figcaption style={{marginTop:'9px'}}>Material-UI</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'48px'}} src={netlify} alt=""/>
                        <figcaption style={{marginTop:'12px'}}>Netlify</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={heroku} alt=""/>
                        <figcaption style={{marginTop:'10px'}}>Heroku</figcaption>
                    </div>
                </div>
            </div>
            <div className="tools mt-5">
                <h3>Tools</h3>
                <div className="row d-flex justify-content-center align-items-center"> 
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={vs} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>Visual Studio Code</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'53px'}} src={git} alt=""/>
                        <figcaption>Git</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={github} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>GitHub</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'85px', paddingTop:'10px'}} src={npm} alt=""/>
                        <figcaption style={{marginTop:'10px'}}>npm</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={cdt} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>Chrome Dev Tools</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'48px'}} src={xd} alt=""/>
                        <figcaption style={{marginTop:'6px'}}>Adobe XD</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'29px'}} src={figma} alt=""/>
                        <figcaption style={{marginTop:'10px'}}>Figma</figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;