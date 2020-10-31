import React from 'react';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical'
import { FaBlog} from "react-icons/fa";
import Profile from '../images/Image.JPG'

const About = () => {
    const expertise = ["I am ", "I am a Full Stack web developer", 5000]
    return (
        <main>

            <div className="row">
                <div className="col-md-7" style={{ marginTop: '170px' }}>
                    <h5 style={{ color: 'rgb(99 105 102);' }}>Hello, I am</h5>
                    <Fade left>
                        <h1 className='rgb(99 105 102);'><b>Nayemul Alam</b> </h1>
                    </Fade>
                    <Typical className="mb-3 h3"
                        style={{ color: "#4f3fad" }}
                        steps={expertise}
                        loop={Infinity}
                        wrapper="p"
                    />
                    <h6 className='mb-3'>Hi, I’m Nayemul Alam . I’m a Full Stack Web Developer with 6 month of experience. I can make Full Stack Web Applications for you with React and NodeJS</h6>
                    <a style={{ fontSize: '30px', color: 'Black', paddingRight: '30px' }} href="#"><button className='btn btn-success'>Read My Blogs</button> </a>
                </div>
                <div className="col-md-5">
                    <img style={{ width: '100%', marginTop: '120px', borderRadius: '50%' }} src={Profile} alt="" />
                </div>
            </div>
        </main>
    );
};

export default About;