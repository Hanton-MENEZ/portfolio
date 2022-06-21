import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    const form: any = useRef();

    const sendEmail = (e: any) => {

        e.preventDefault();

        emailjs.sendForm('service_h7ww67s', 'template_10pz4z8', form.current, 'fgcqsUUgC7zQGX2Xb')
            .then((result: any) => {
                console.log(result.text);
            }, (error: any) => {
                console.log(error.message);
            });
    };

    return (
        <div className="container-contact" id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Location :</span>
                                </div>
                                <p>
                                    Marcq-en-Baroeul, France
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email :</span>
                                </div>
                                <p>
                                    <span>hanton.menez@viacesi.fr</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-user-graduate"></i>
                                    <span>Education ;</span>
                                </div>
                                <p>
                                    <span>CESI école d'ingénieur, Lille, France</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe-africa"></i>
                                    <span>Languages :</span>
                                </div>
                                <p>
                                    <span>French, Romanian, English</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href="https://github.com/Hanton-MENEZ" target="_blank">
                                <FontAwesomeIcon icon={faGithub}/>
                                </a>
                                <a href="https://www.linkedin.com/in/hanton-menez-16b7271ba/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-control i-c-2">
                                <input type="text" name="user_name" required placeholder='Name' />
                                <input type="email" name="user_email" required placeholder='Email' />
                            </div>
                            <div className="input-control">
                                <textarea name="message" required placeholder='Message' />
                            </div>
                            <div className="input-control">
                                <input id="sendbutton" className='btn' type="submit" required value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact
