import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import EVEAP_logo from '../../../public/images/logo/EVAAP_LOGO.png';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Header = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggleButton = () =>{
            setIsOpen(!isOpen);
     }
    return (
        <header className="header-section">
            <div className="flex-container">
                <div className="logo-wrapper">
                    <img src={EVEAP_logo} alt="Company Logo" className="logo" />
                </div>
                <h2 className="header_h2">
                    EMPLOYMENT VERIFICATION AND ACADEMIC PROOFING
                </h2>
                    <nav  className={
                        isOpen?"header_div_navlink":"header_div_active_navlink"
                     } >
                    <ul className='header_div_navlink_ul'>
                        <li>
                            <a href="">Home</a>
                            <a href="">Contact Us</a>
                            <a href="">About US</a>
                            <a href="">Our Services</a>
                            <a href="">Our Founters</a>
                        </li>
                    </ul>
                    </nav>

                    <button className='header_menu_bar_btn' onClick={toggleButton}>{
                   isOpen? <ImCross />:<FaBars />
                        }
                    </button>
                    <div className='header_div_login'>
                         <button className='header_div_login_btn'>Login</button>
                         <button className='header_div_help_btn'>Help</button>
                    </div>
            </div>
        </header>
    );
};

export default Header;