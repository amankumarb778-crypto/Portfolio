import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:email@example.com" className="btn contact-btn">Say Hello</a>
                <div className="contact-socials">
                    <a
                        href="https://github.com/amankumarb778-crypto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aman-kumar-067825379/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
