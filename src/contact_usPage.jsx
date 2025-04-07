import React, { useState } from "react";
import './contact_usPage.css';


const FeedBack_API_URL = "http://localhost:8080/feedback";
const ContactUs = () => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedBack: "",
  });

  const feedbackForm = () => {
    setActive(!active);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    const feedbackData = {
      name: formData.name,
      email: formData.email,
      feedBack: formData.feedBack,
    };



    try {
      const response = await fetch(FeedBack_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        alert( ` ${feedbackData.name}, your Feedback submitted successfully!`);
        console.log("Feedback submitted:", feedbackData);
        setFormData({ name: "", email: "", feedBack: ""}); 
      } else {
        alert("Error submitting feedback.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error, please try again later.");
    }
  };

  return (
    <div className="ContactUs_container">
      <div className="ContactUs_container_hero_part">
        <h2>CONTACT US</h2>
        <h3>Thank You for visiting our site!</h3>
      </div>

      <ul className="ContactUs_pageinfo">
        <li>
          <h4><b>Email : </b>Info@hiscope.com</h4>
        </li>
        <li>
          <h4><b>Visit Us : </b>Prashanthi Hills Meerpet, Hyderabad, India</h4>
        </li>
        <li>
          <h4><b>Call Us : </b>123456789<br />
          Our team is available Monday to Friday, From 9 AM to 5 PM</h4>
        </li>
        <li>
          <h4><b>Social Media : </b><br />
          Join our community to get early updates and tips.</h4>
        </li>
      </ul>

      <div className="contactus_follow-us">
        <h4 className="follow-us2"><b>Follow Us:</b></h4>
      </div>

      <ul className="ContactUs_pageinfo_followus">
      </ul>

      <button className="contactus_feedback_btn" onClick={feedbackForm}>
        {active ? "Close" : "Feedback"}
      </button>

      <div className={!active ? "contactus_page_form" : "active_contactus_page_form"}>
        <form onSubmit={handleSubmit}>
          <div className="contactus_page_form_div">
            <label>Name :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your FullName..."
              required
            />
          </div>
          <div className="contactus_page_form_div">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your email@gmail.com..."
              required
            />
          </div>
          <div className="contactus_page_form_div">
            <label>Description :</label>
            <textarea
            type="text"
              name="feedBack"
              value={formData.feedBack}
              onChange={handleChange}
              placeholder="Enter your feedback..."
              required
            ></textarea>
          </div>
          <button className="contact_us_submit_btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;