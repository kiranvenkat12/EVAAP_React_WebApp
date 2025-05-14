import React from 'react'
import "./admin.css";
import img from "./assets/Components/adminimages/image.png";

const Admin = () => {
  return (
    <div>
        <h1 className="adminhead">Registration form </h1>
        <div className="admincontainer">
        <div className="inadmincontainer">
        <img src={img} className="imgpos"/>
        </div>
            <div className="inadmincontainer2">
            <label htmlFor="firstName" >
                     
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstname"
                      className="input-content"
                      placeholder="First name"
                      required
                    />
                    <label htmlFor="SecondName" className="visually-hidden">
                      Second Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="secondname"
                      className="input-content"
                      placeholder="Second name"
                      required
                    />
                    <label htmlFor="officialemail" className="visually-hidden">
                      official Email
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="officialemail"
                      className="input-content"
                      placeholder="Official Email"
                      required
                    />
                    <label htmlFor=" Mobile Number" className="visually-hidden">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      name="mobilenumber"
                      placeholder="Mobile number"
                      required
                    />
                
            </div>
            <h1 className='sub'>Organization Details
            </h1>
            <div className="inadmincontainer3">
            <label htmlFor="firstName" className="visually-hidden">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      placeholder="First name"
                      required
                    />
                      <label htmlFor="firstName" className="visually-hidden">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      placeholder="Last name"
                      required
                    />
                      <label htmlFor="firstName" className="visually-hidden">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      placeholder="Organization"
                      required
                    />
                     <label htmlFor="firstName" className="visually-hidden">
                      Address
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      placeholder="Organization"
                      required
                    />
                     <label htmlFor="firstName" className="visually-hidden">
                      Register id
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      placeholder="register id"
                      required
                    />
                     <label htmlFor="firstName" className="visually-hidden">
                      Designation
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-content"
                      placeholder="Designation"
                      required
                    />
                    
                    
                
                </div>
                <button className="adminbut">Submit</button>
           
        </div>
       
       
      
    </div>
  )
}

export default Admin;
