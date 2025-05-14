import React, { useState } from 'react';
import './registrationPage.css';


import PDF_IMAGE from '../public/images/logo/PDF_IMAGE.png';

const REGISTRATION_API_URL = 'http://localhost:8080/employee-registration/upload';

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

  const [fileURL, setFileURL] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formToSubmit = {
      ...formData,
      mobileNumber: formData.phone,
    };
  
   
    delete formToSubmit.phone;
  
    const formDataToSend = new FormData();
    formDataToSend.append('employee', new Blob([JSON.stringify(formToSubmit)], { type: 'application/json' }));
    formDataToSend.append('resume', formData.resume);
  
    try {
      const response = await fetch(REGISTRATION_API_URL, {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Registration successful!');
        console.log('Saved Employee:', result);
      } else {
        alert('Failed to submit the form. Please check the details.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [id]: file,
      }));
      setFileURL(URL.createObjectURL(file));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
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
  };

 
  return (
    <>
    <form className="signup-page" onSubmit={handleSubmit}>
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
                {fileURL && (
                  <a href={fileURL} target="_blank" rel="noopener noreferrer" className="upload-preview">
                   <img
                  src={PDF_IMAGE}
                  alt="Upload icon"
                  className="upload-icon"
                />
                <br />
                click to view file here
                  </a>
                )}
                
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
      
    </form>
    {/* <Fotter /> */}
    </>
  );
}

export default SignupForm;