import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/1TpeUZJ8rhuQyMu8Q1igd_k8REQy9Io9n/view?usp=sharing">Download Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;