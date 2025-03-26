import React from 'react';
import './Footer.css'; // Optional: import CSS for footer styles

const Footer = () => {
    return (
        <div className='foot'>
        <footer className="footer">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Brain Technologies.All Right Reserved</p>
                <ul className="footer-links">
                    <li><a href="/Terms&condition">Terms&condition</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="https://www.instagram.com/brain_technologies22/">Instagram</a></li>
                    <li><a href="/privacypolicy">Privacy Policy</a></li>

                </ul>
            </div>
        </footer>
        </div>
    );
}

export default Footer;