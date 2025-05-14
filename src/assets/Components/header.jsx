import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import EVEAP_logo from "../../../public/images/logo/EVAAP_LOGO.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header-section">
      <div className="flex-container">
        <div className="header-logo-wrapper">
          <img src={EVEAP_logo} alt="Company Logo" className="header-logo" />
        </div>
        <h2 className="header_h2">
          EMPLOYMENT VERIFICATION AND ACADEMIC PROOFING
        </h2>
        <nav
          className={
            isOpen ? "header_div_navlink" : "header_div_active_navlink"
          }
        >
          <ul className="header_div_navlink_ul">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "header_active_navlink" : "header_navlink"
                }
              >
                Hom
              </NavLink>
              <NavLink
                to="/aboutUsPage"
                className={({ isActive }) =>
                  isActive ? "header_active_navlink" : "header_navlink"
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/contact_usPage"
                className={({ isActive }) =>
                  isActive ? "header_active_navlink" : "header_navlink"
                }
              >
                Contact us
              </NavLink>
              <NavLink
                to="/ourServices"
                className={({ isActive }) =>
                  isActive ? "header_active_navlink" : "header_navlink"
                }
              >
                Our Services
              </NavLink>
              <NavLink
                to="/founderPage"
                className={({ isActive }) =>
                  isActive ? "header_active_navlink" : "header_navlink"
                }
              >
                Our Founders
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="header_menu_bar_btn" onClick={toggleButton}>
          {isOpen ? <ImCross /> : <FaBars />}
        </button>
        <div className="header_div_login">
          <NavLink to="/loginForm">
            <button className="header_div_login_btn">Login</button>
          </NavLink>
          <NavLink to="/admin">
          <button className="header_div_help_btn">Help</button></NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
