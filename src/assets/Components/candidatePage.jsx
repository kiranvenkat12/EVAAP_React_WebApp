import React from 'react'
import "./candidatePage.css";
import { IoPeopleCircleSharp } from "react-icons/io5";


function CandidatePage() {
  return (
    <div>
        <div className="containerparent">
        <div className="canslide">
      <div className="icon"><IoPeopleCircleSharp /></div> 
      <ul className="text">
        <li className="head">User Name</li>
        <li className="head">EVAAP ID : 123</li>
        <li className="subtext">Basic Details</li>
        <li className="subtext">Education Details</li>
        <li className="subtext">Internship & Work Experiance</li>
        <li className="subtext">Skills Subject & Languages</li>
        <li className="subtext">Position of Responsibility</li>
        <li className="subtext">Projects</li>
        <li className="subtext">Accomplishments</li>
        <li className="subtext">Volunteering</li>
        <li className="subtext">Extra-curricular Activities</li>
        <li className="subtext">Resume, Docs & Write-ups</li>
      </ul>
            </div>
        <div className="cancontainer">
            <div className="containersub">
               <h1>Request for background Verification</h1>
            </div>
        </div>

        <div className="cancontainer">
            <div className="containersub">
              <h1>Whole background verification</h1>
            </div>
        </div>
       
        </div>
        {/* side options code starts here */}
        
        
      
    </div>

  )
}

export default CandidatePage;
