import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <a href="#terms">Terms & Privacy</a>
                    <a href="#contact">Contact us</a>
                    <a href="#who-we-are">Who we are?</a>
                </div>
                <div className="footer-right">
                    <a href="/Login">Log-In</a>
                    <a href="#register">Register</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

