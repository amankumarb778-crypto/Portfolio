import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import heroImage from '../assets/hero-illustration.svg';
// Import your profile photo here - replace with your actual image path
// import profilePhoto from '../assets/profile-photo.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="profile-photo-wrapper">
                        <div className="profile-photo">
                            {/* Replace the src with your actual profile photo */}
                            {/* <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKtJhnVE7y0Jc-kFpS5EYIOrD96HK3ko1Tg&s"
                                alt="Profile"
                                className="profile-img"
                            /> */}
                        </div>
                    </div>
                    <h1 className="hero-title">
                        Building Digital <span className="highlight">Experiences</span>
                    </h1>
                    <p className="hero-subtitle">
                        Hi, I'm a passionate developer crafting modern, accessible, and beautiful web applications.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                    <div className="hero-socials">
                        <a
                            href="https://github.com/amankumar1508"
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
                <div className="hero-image">
                    <img src={heroImage} alt="Digital Experience" className="floating-image" />
                </div>
            </div>
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
};

export default Hero;
