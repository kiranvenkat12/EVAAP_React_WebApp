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
          </a>
         
            <div className="contact-us4">
              <div className="contact-us5"><b>Contact Us:</b></div>
               <a href="https://maps.app.goo.gl/AZg1Rxsktv8cs1Nq5">
             
                prashanthi hills <br />
                meerpet pincode-500058
             
                 Hyderabad, <br />
                Telangana,India
             
               </a>
              </div>
           <div>
         <ul className="fotter-quickLink-ul">
              <div className="quick-links2"><b>Quick Links:</b> </div>
              <li>
              <a href="">
                  Home
              </a>
              </li>
              <li>
              <a href="">
              Contact Us
              </a>
              </li>
              <li>
              <a href="">
              About Us
              </a>
              </li>
              <li>
              <a href="">
              Our Services
              </a>
              </li>
          </ul>
         </div>
          
          <ul className ="fotter-tools-ul">
            
            <div className="tools">
              <div className="tools2"><b>Tools:</b></div>
            </div>
            
            <li>
            <a href="https://www.example.com">
                FAQs
              </a>
            </li>
            <li>
            <a href="https://www.example.com">
                Carrer
              </a>
            </li>
            <li>
            <a href="https://www.example.com">
                Announces
              </a>
            </li>
          </ul>
         
          <ul className="follow-us-ul"> 
          <div className="follow-us">
            <div className="follow-us2"><b>Follow Us:</b></div>
          </div>

            <li className="follow-us-ul-li">
              <a href="https://www.instagram.com/evaap_2024" target="_blank">
                <img className="instagram-circle2" src={Instagram_logo} />
              </a>
            </li>
            <li className="follow-us-ul-li">
              <a
                href="https://www.linkedin.com/in/evaap-3a2965340/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img className="linked-in-circled2" src={LinkedIn_logo} />
              </a>
            </li>
            <li className="follow-us-ul-li">
              <a href="https://x.com/evvap415664?t=L4ihkZ-4E8FNY8k8RkY9Bg" target="_blank">
                <img className="twitter2" src={Twitter_logo} />
              </a>
            </li>
          </ul>
          </div>
      </div>

    )
}

export default Footer;