import React, { useState } from "react";
import './contact_usPage.css'

import Twitter_logo from '../public/images/logo/twitter.png';
import Instagram_logo from '../public/images/logo/instagram-circle.png';
import LinkedIn_logo from '../public/images/logo/linkedin-circled.png';

const ContactUs = ()=>{

    const [active,setActive] = useState(false)

 const feedbackForm =()=>{
        setActive(!active)
    }

    return(
        <div className="ContactUs_container">
            <div className="ContactUs_container_hero_part">
                <h2>CONTACT US</h2>
                <h3>Thank You for visiting our site!</h3>
            </div>

            <ul className="ContactUs_pageinfo">
                <li> <h4><b>Email : </b>Info@hiscope.com </h4> </li>
                <li> <h4> <b>Visit Us : </b>Prashanthi Hills Meerpet, Hyderabad, India </h4></li>
                <li> <h4><b>Call Us : </b>123456789 <br />
                Our team is available Monday to Friday,From 9 AM to 5 PM </h4></li>
                <li> <h4><b>Social Media :   </b> <br />
                Join our community to get early updates and tips.</h4></li>
            </ul>
                 <div className="contactus_follow-us">
                        <h4 className="follow-us2"><b>Follow Us:</b></h4>
                </div>
            <ul className="ContactUs_pageinfo_followus"> 
                     
            
                        <li className="ContactUs_pageinfo_followus-ul-li">
                          <a href="https://www.instagram.com/evaap_2024" target="_blank">
                            <img className="instagram-circle2" src={Instagram_logo} />
                          </a>
                        </li>
                        <li className="ContactUs_pageinfo_followus-ul-li">
                          <a
                            href="https://www.linkedin.com/in/evaap-3a2965340/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                          >
                            <img className="linked-in-circled2" src={LinkedIn_logo} />
                          </a>
                        </li>
                        <li className="ContactUs_pageinfo_followus-ul-li">
                          <a href="https://x.com/evvap415664?t=L4ihkZ-4E8FNY8k8RkY9Bg" target="_blank">
                            <img className="twitter2" src={Twitter_logo} />
                          </a>
                        </li>
             </ul>

             <button className="contactus_feedback_btn" onClick={feedbackForm}>{active?"close":"feedback"}</button>
            <div className={!active?"contactus_page_form":"active_contactus_page_form"}>
             <form action="">
                <div className="contactus_page_form_div">
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder="Enter Your FullName..."/>
                </div>
                <div className="contactus_page_form_div">
                    <label htmlFor="" >Email :</label>
                    <input type="email" placeholder="Enter Your email@gmail.com.."/>
                </div>
                <div className="contactus_page_form_div">
                  <label htmlFor="" >Description</label>
                   <textarea name="description" id="" placeholder="enter your feedback..."></textarea>
                </div>
                <button className="contact_us_submit_btn">submit</button>
             </form>
             </div>
        </div>
    );
}

export default ContactUs;