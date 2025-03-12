import React, { useState } from 'react';
import './registrationPage.css';

import EVEAP_logo from '../public/images/logo/EVAAP_LOGO.png';
import Twitter_logo from '../public/images/logo/twitter.png';
import Instagram_logo from '../public/images/logo/instagram-circle.png';
import LinkedIn_logo from '../public/images/logo/linkedin-circled.png';
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    education: [{ institution: '', graduationYear: '', fieldStudy: '', cgpa: '' }],
    employment: [{ company: '', jobTitle: '' }],
  });

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'file' ? files[0] : value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const { id, value } = e.target;
    setFormData((prevData) => {
      const updatedEducation = [...prevData.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [id.split('-')[0]]: value,
      };
      return { ...prevData, education: updatedEducation };
    });
  };

  const handleEmploymentChange = (index, e) => {
    const { id, value } = e.target;
    setFormData((prevData) => {
      const updatedEmployment = [...prevData.employment];
      updatedEmployment[index] = {
        ...updatedEmployment[index],
        [id.split('-')[0]]: value,
      };
      return { ...prevData, employment: updatedEmployment };
    });
  };

  const handleAddEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { institution: '', graduationYear: '', fieldStudy: '', cgpa: '' }],
    }));
  };

  const handleDeleteEducation = (index) => {
    setFormData((prevData) => {
      if (prevData.education.length > 1) {
        
        const updatedEducation = [...prevData.education];
        updatedEducation.splice(index, 1);
        return { ...prevData, education: updatedEducation };
      } else {
        alert("At least one educational detail is mandatory!");
        return prevData;
      }
    });
  };
  

  const handleAddEmployment = () => {
    setFormData((prevData) => ({
      ...prevData,
      employment: [...prevData.employment, { company: '', jobTitle: '' }],
    }));
  };
  const handleRemoveEmployment = (index) => {  
    setFormData((prevData) => {
      if (prevData.employment.length > 1) {
        const updatedEmployment = [...prevData.employment];
        updatedEmployment.splice(index, 1);
        return { ...prevData, employment: updatedEmployment };
      } else {
        alert("At least one employment detail is mandatory!");
        return prevData;
      }
    });
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully');
  };


  return (
    <form className="signup-page" onSubmit={handleSubmit}>
      <header className="header-section">
        <div className="flex-container">
          <div className="logo-wrapper">
            <img
              src= {EVEAP_logo}
              alt="Company Logo"
              className="logo"
            />
          </div>
          <nav className="nav-content">
            <div className="nav-wrapper">
              <div className="nav-header">
                <h1 className="main-title">
                  EMPLOYMENT VERIFICATION AND ACADEMIC PROOFING
                </h1>
                <select id="lang" name="languages" >
                  <option value="apple">Languages</option>
                  <option value="apple">English</option>
                  <option value="apple">Spanish</option>
                  <option value="banana">German</option>
                  <option value="orange">Spain</option>
                  <option value="grape">Hindi</option>
                  <option value="mango">Telugu</option>
                </select>
              </div>
             
              <div className="nav-links" >
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
      <h2 className="signup-title">REGISTRATION FORM</h2>
      <main className="main-content">
        <div className="flex-container">
          <div className="profile-image">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00f52b76c4f645aa20303ddd90160e514c87e8258a92f9e371b25fd422b1ece6?placeholderIfAbsent=true&apiKey=c19d8f4750274b97b67b1edd681d3183"
              alt="Profile section illustration"
              className="profile-photo"
            />
          </div>
          <div className="form-section">
            <div className="form-wrapper">
              <div className="personal-info">
                <div className="name-fields">
                  <div className="input-field">
                    <label htmlFor="firstName" className="visually-hidden">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lastName" className="visually-hidden">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input-content"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-field">
                  <label htmlFor="email" className="visually-hidden">
                    Official email Id
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-content"
                    placeholder="Official email Id"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="phone" className="visually-hidden">
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-content"
                    placeholder="Mobile number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="address" className="visually-hidden">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="input-content"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="dob" className="visually-hidden">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="input-content"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <h3 className="education-title">Education Details</h3>
              {formData.education.map((edu, index) => (
                <div key={index} className="education-form">
                  <label htmlFor={`degree-${index}`} className="degree-field">
                    Highest degree obtained
                  </label>
                  <div className="input-field">
                    <label htmlFor={`institution-${index}`} className="visually-hidden">
                      Institution Name
                    </label>
                    <input
                      type="text"
                      id={`institution-${index}`}
                      className="input-content"
                      placeholder="Institution Name"
                      required
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor={`graduationYear-${index}`} className="visually-hidden">
                      Graduation year
                    </label>
                    <input
                      type="text"
                      id={`graduationYear-${index}`}
                      className="input-content"
                      placeholder="Graduation year"
                      required
                      value={edu.graduationYear}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor={`fieldStudy-${index}`} className="visually-hidden">
                      Field of study
                    </label>
                    <input
                      type="text"
                      id={`fieldStudy-${index}`}
                      className="input-content"
                      placeholder="Field of study"
                      required
                      value={edu.fieldStudy}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor={`cgpa-${index}`} className="visually-hidden">
                      CGPA/Percentage
                    </label>
                    <input
                      type="text"
                      id={`cgpa-${index}`}
                      className="input-content"
                      placeholder="CGPA/Percentage"
                      required
                      value={edu.cgpa}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                </div>
              ))}
              <button type="button" onClick={handleAddEducation}>
                Add More Education
              </button>
              <br />
              <button type="button" onClick={handleDeleteEducation}>
                REMOVE
              </button>
              <h4 className="internship-title">Internship details:-</h4>
              {formData.employment.map((emp, index) => (
                <div key={index} className="submit-section">
                  <div className="input-field">
                    <label htmlFor={`company-${index}`} className="visually-hidden">
                      Company
                    </label>
                    <input
                      type="text"
                      id={`company-${index}`}
                      className="input-content"
                      placeholder="Company"
                      required
                      value={emp.company}
                      onChange={(e) => handleEmploymentChange(index, e)}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor={`jobTitle-${index}`} className="visually-hidden">
                      Job title
                    </label>
                    <input
                      type="text"
                      id={`jobTitle-${index}`}
                      className="input-content"
                      placeholder="Job title"
                      required
                      value={emp.jobTitle}
                      onChange={(e) => handleEmploymentChange(index, e)}
                    />
                  </div>
                </div>
              ))}
              <button type="button" onClick={handleAddEmployment}>
                Add More Employment
              </button>
              <br />
              <button type="button" onClick={handleRemoveEmployment}>
                Remove
              </button>
              <div className="upload-section">
                <label htmlFor="resume">upload your resume</label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                />
                <img
                  src="./candidate singup page/upload.jpg"
                  alt="Upload icon"
                  className="upload-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="submit-section">
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </div>
      <div className="fotter">
        <div className="fotter2">
          <a href="#">
            <img
              className="evaap-logo-2-1-ai-brush-removebg-8-nqsg-4-zr-222"
              src={EVEAP_logo}
              alt='EVEAP Logo'
            />
            <p id="tooltip">Go To Top</p>
          </a>
          
          <a href="https://maps.app.goo.gl/AZg1Rxsktv8cs1Nq5">
          <div className="contact-us4">
            <div className="contact-us5">
              Contact Us:
            </div>
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
            <div className="quick-links2">
              Quick Links:
            </div>
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
              <div className="contact-us2">
                Contact Us
              </div>
            </a>
          </div>
          <div className="about-us3">
            <a href="./about us page.html">
              <div className="about-us2">
                About Us
              </div>
            </a>
          </div>
          <div className="our-services3">
            <a href="./service page.html">
              <div className="our-services2">
                Our Services
              </div>
            </a>
          </div>
          </ul>
          <ul>
          <div className="tools">
            <div className="tools2">
              Tools:
            </div>
          </div>
          <div className="fa-qs">
            <a href="https://www.example.com">
              <div className="fa-qs2">
                FAQs
              </div>
            </a>
          </div>
          
          <div className="carrer">
            <a href="https://www.example.com">
              <div className="carrer2">
                Carrer
              </div>
            </a>
          </div>
          <div className="announces">
            <a href="https://www.example.com">
              <div className="announces2">
                Announces
              </div>
            </a>
          </div>
          </ul>
          <div className="follow-us">
            <div className="follow-us2">
              Follow Us:
            </div>
            </div>
          <ul className='follow-us-ul'>
         
          
          <div className="instagram-circle">
            <a href="">
            <img
              className="instagram-circle2"
              src={Instagram_logo}
            />
            </a>
          </div>
          <div className="linked-in-circled">
            <a href="">
            <img
              className="linked-in-circled2"
              src={LinkedIn_logo}
            />
            </a>
          </div>
          <div className="twitter">
            <a href="">
          <img className="twitter2" src= {Twitter_logo} />
          </a>
        </div>
        </ul>
           
        </div>
        
      </div>
     
    </form>
  );
}

export default SignupForm;