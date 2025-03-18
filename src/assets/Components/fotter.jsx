import React from 'react';
import './fotter.css';

import EVEAP_logo from '../../../public/images/logo/EVAAP_LOGO.png';
import Twitter_logo from '../../../public/images/logo/twitter.png';
import Instagram_logo from '../../../public/images/logo/instagram-circle.png';
import LinkedIn_logo from '../../../public/images/logo/linkedin-circled.png';

const Footer = () => { 
    return(
        <div className="fotter">
        <div className="fotter2">
          <a href="#">
            <img
              className="evaap-logo-2-1-ai-brush-removebg-8-nqsg-4-zr-222"
              src={EVEAP_logo}
              alt="EVEAP Logo"
            />
            <p id="tooltip">Go To Top</p>
          </a>
          <a href="https://maps.app.goo.gl/AZg1Rxsktv8cs1Nq5">
            <div className="contact-us4">
              <div className="contact-us5">Contact Us:</div>
            </div>
            <div className="no-179-down-street-new-york-xxxxxxxxxxx-usa-600096">
              prashanthi hills
              <br />
              meerpet pincode-500058
              <br />
              Hyderabad
              <br />
              Telangana,India
            </div>
          </a>
          <ul>
            <div className="quick-links">
              <div className="quick-links2">Quick Links:</div>
            </div>
            <div className="home3">
              <a href="./index.html">
                <div className="home2" id="alertParagraph">
                  Home
                </div>
              </a>
            </div>
            <div className="contact-us3">
              <a href="./contact us.html">
                <div className="contact-us2">Contact Us</div>
              </a>
            </div>
            <div className="about-us3">
              <a href="./about us page.html">
                <div className="about-us2">About Us</div>
              </a>
            </div>
            <div className="our-services3">
              <a href="./service page.html">
                <div className="our-services2">Our Services</div>
              </a>
            </div>
          </ul>
          <ul>
            <div className="tools">
              <div className="tools2">Tools:</div>
            </div>
            <div className="fa-qs">
              <a href="https://www.example.com">
                <div className="fa-qs2">FAQs</div>
              </a>
            </div>
            <div className="carrer">
              <a href="https://www.example.com">
                <div className="carrer2">Carrer</div>
              </a>
            </div>
            <div className="announces">
              <a href="https://www.example.com">
                <div className="announces2">Announces</div>
              </a>
            </div>
          </ul>
          <div className="follow-us">
            <div className="follow-us2">Follow Us:</div>
          </div>
          <ul className="follow-us-ul">
            <div className="instagram-circle">
              <a href="https://www.instagram.com/evaap_2024" target="_blank">
                <img className="instagram-circle2" src={Instagram_logo} />
              </a>
            </div>
            <div className="linked-in-circled">
              <a
                href="https://www.linkedin.com/in/evaap-3a2965340/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img className="linked-in-circled2" src={LinkedIn_logo} />
              </a>
            </div>
            <div className="twitter">
              <a href="https://x.com/evvap415664?t=L4ihkZ-4E8FNY8k8RkY9Bg" target="_blank">
                <img className="twitter2" src={Twitter_logo} />
              </a>
            </div>
          </ul>
        </div>
      </div>

    )
}

export default Footer;