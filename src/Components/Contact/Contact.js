import React from 'react';
// import { FaFacebookSquare, FaGithub,FaLinkedin } from "react-icons/fa";


const Contact = () => {
    const style = {
        form: {
            marginTop: '50px',
            padding: "50px",
            paddingTop: "30px",
            borderRadius: "5px",
            width: "70%"
        }
    }
    const handleSubmit = data => {
        console.log(data);

    };

    return (
        <div>
            {/* <h2 style={{ color: 'rgb(81, 233, 157)', marginTop: '60px', marginBottom: '60PX', textAlign: 'center' }}>Contact Me</h2> */}
            <section className='col-12 col-sm-6 col-md-7 m-auto d-flex justify-content-center'>
                <form onSubmit={handleSubmit} style={style.form}>
                    <h2 className='text-center pb-3'>Get To Touch</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" Type Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="20" rows="5" placeholder="Type Your Message" required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}> Send </button>
                    </div>
                </form>
                
            </section>
            
        </div>
    );
};

export default Contact;