import React from 'react';
import './header.css';
import EVEAP_logo from '../../../public/images/logo/EVAAP_LOGO.png';

const Header = () => {
    return (
        <header className="header-section">
            <div className="flex-container">
                <div className="logo-wrapper">
                    <img src={EVEAP_logo} alt="Company Logo" className="logo" />
                </div>
                <nav className="nav-content">
                    <div className="nav-wrapper">
                        <div className="nav-header">
                            <h1 className="main-title">EMPLOYMENT VERIFICATION AND ACADEMIC PROOFING</h1>
                            <select id="lang" name="languages">
                                <option value="apple">Languages</option>
                                <option value="apple">English</option>
                                <option value="apple">Spanish</option>
                                <option value="banana">German</option>
                                <option value="orange">Spain</option>
                                <option value="grape">Hindi</option>
                                <option value="mango">Telugu</option>
                            </select>
                        </div>
                        <div className="nav-links">
                            <a href="./index.html" className="nav-link">
                                Home
                            </a>
                            <a href="./contact us.html" className="nav-link">
                                Contact Us
                            </a>
                            <a href="./about us page.html" className="nav-link">
                                About Us
                            </a>
                            <a href="./service page.html" className="nav-link">
                                Our Services
                            </a>
                        </div>
                        <div className="login">
                            <div className="login2">
                                <a href="./common signup page.html">Login</a>
                            </div>
                        </div>
                        <div className="utility-links">
                            <button type="button" className="help-btn">
                                Help
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;