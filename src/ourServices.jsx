import React from "react";
import "./ourServices.css"; 
import image1 from "./assets/Components/service_page_Images/preEmployementBackground.jpg"
import image2 from "./assets/Components/service_page_Images/whyImportantImg.jpg"
import image3 from "./assets/Components/service_page_Images/background_img.png"
import image4 from "./assets/Components/service_page_Images/ticImage.png"
import image5 from "./assets/Components/service_page_Images/carrierCheck.png"
import image6 from "./assets/Components/service_page_Images/education check.png"
import image7 from "./assets/Components/service_page_Images/introductionNextGen.jfif"
import image8 from "./assets/Components/service_page_Images/evaapBundles.jfif"
import image9 from "./assets/Components/service_page_Images/clickImg.png"
import image10 from "./assets/Components/service_page_Images/chatImage.png"    
import image11 from "./assets/Components/service_page_Images/chatImage.png"
import image12 from "./assets/Components/service_page_Images/happyFaceImg.png"
import image13 from "./assets/Components/service_page_Images/happyFaceImg2.png"


const OurServices = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        
        <div className="hero-text">
          <p>
          EVAAP  provides in-depth background screenings that cover more 
          than just criminal record checks. Embrace the next generation of pre-employment
          screening and begin your background verification now. Main mention was the all
          titles should start from the same line from the starting point onwards
          </p>
          <button className="cta-button">Get Start Now</button>
        </div>
    
      </div>

      {/* Background Check Solutions */}
      <div className="section1">
      <h2 className="heading">
        Pre-Employment Background Check Solutions
      </h2>
      <div className="content">
        <div className="image-container2">
          <img src={image1} alt="Background Check" />
        </div> 
    
        <div className="text">
          <p>
            As a leading provider of background screening services, we deliver
            solutions that help you efficiently identify criminal records, sex offenses, 
            and professional or financial sanctions through comprehensive background checks for employment.
          </p>
          <p>
            Our National Criminal File is a database search of millions of 
            criminal records, with 6000 to 5000 new records added daily.
          </p>
          <p>
            In addition, as a premier background screening company, we have 
            an unmatched global reach for businesses that require global searches.
          </p>
        </div>
      </div>
      </div>

      {/* Why is it important to conduct a pre-employment background check?*/}
      <div className="section2">
      <h2 className="heading2">
      Why is it important to conduct a pre-employment background check?
        </h2>
        <div className="content2">
          <div className="text2">
            <p>
              Background checks enable you to make informed, strategic hiring
              choices that can ultimately save your business both time and
              money. With a wide range of services offered, accessing the
              necessary information for confident onboarding decisions is
              straightforward. In short, background checks play a crucial role
              in ensuring that new hires align well with your company culture.
            </p>
          </div>
          <div className="image-container2">
          <img src={image2} alt="Background Check" />
        </div>  
        </div>
      </div>
      {/* Background Checks You Can Trust */}
      <div className="section3">
      <h2 className="heading3">
      Background Checks You Can Trust
        </h2>
        <div className="content3">
        <div className="image-container3">
          <img src={image3}alt="Background Check" />
        </div>
          <div className="text3">
            <p>
              Thorough pre-employment background checks assist in confirming or
              verifying an applicant’s immigration status, as well as their
              professional and educational history. As a top provider of
              background screening services, Evaap boasts one of the highest
              verification success rates in the industry.
            </p>
          </div>
        </div>
      </div>
      {/* Background Verifications checks include:- */}
      <div className="section4">
      <h2 className="heading4">
      Background Verifications checks include:-
        </h2>
        <div className="content4">
          <div className="text4">
            <p>
              Employment (HR department):-here verification done for
              confirmation of employment details provided by the candidate or
              client with the HR department
            </p>
            <p>
              Education verification check: This was the main advantage cross
              verifies all the relevant education date presented by the
              candidate-
            </p>
            <p>
              Gap in employment History:- checking of the background
              verification form to identify if there is any gap in between
              employment or in education
            </p>
            <p>
              Gap in employment History:- checking of the background
              verification form to identify if there is any gap in between
              employment or in education
            </p>
            <p>
              Personal check:- A written order that instructs a bank to pay
              money from the funds deposited in an individual's checking account
            </p>
          </div>
        </div>
      </div>
      {/* Solutions to Exceed Your Standards */}
      <div className="section5">
      <h2 className="heading5">
         Solutions to Exceed Your Standards
        </h2>
        <h4 className="heading6">
          From criminal records checks to continuous monitoring, we’ve got you
          covered.{" "}
        </h4>
        
        <div className="image-container5">
          <img src={image4} alt="Background Check" />
        </div>
        <div className="image-container6">
          <img src={image5} alt="Background Check" />
        </div>
        <div className="image-container7">
          <img src={image6} alt="Background Check" />
        </div>
            <div className="text"></div>
          </div>
      {/* Introducing Next-Gen RightID */}
      <div className="section6">
      <h2 className="heading7">Introducing Next-Gen RightID</h2>
      <h4 className="heading8">The RightID At The Right Time</h4>
      <div className="content7">
        <div className="image-container8">
          <img src={image7} alt="Background Check" />
        </div>
        <div className="text7">
          <p>
            RightID combats identity fraud with a multi-layered, dynamic
            approach that includes liveness detection, document review, and
            knowledge-based methods to identify counterfeits and detect deep
            fakes, providing strong protection against identity fraud.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
      <h2 className="heading9">EVVAP Bundles</h2>
      <h4 className="heading10">Refine Your Hiring Pathway</h4>
      <div className="content8">
        <div className="text8">
          <p>
            EVVAP simplifies the hiring and onboarding process by offering
            bundled solutions that help you hire efficiently and onboard
            quickly. Their integrated, applicant-focused technology improves
            time-to-hire and enhances your employer brand.
          </p>
          <button className="cta-button2">Learn More</button>
        </div>
        <div className="image-container9">
          <img src={image8} alt="Background Check" />
        </div>
      </div>
    </div>
      {/* EVAAP Customer care is commited */}
      <div className="section7">
      <h4 className="heading11">
        EVVAP Customer Care is committed to providing seamless and expert
        support. As part of our ongoing improvements, we’re introducing a new
        support model to enhance how we serve and connect with customers.
      </h4>
      <div className="content9">
        <div className="icon-container">
          <img src={image9} alt="Click" className="icon-image" />
          <p className="icon-text">click</p>
        </div>

        <div className="icon-container">
          <img src={image10} alt="Chat" className="icon-image" />
          <p className="icon-text">chat</p>
        </div>

        <div className="icon-container">
          <img src={image11}alt="Call" className="icon-image" />
          <p className="icon-text">call</p>
        </div>
      </div>
      <p className="footer-text">www.evvap.com</p>
    </div>

    {/* WHY Evaap */}
    <section className="section9">
      <h2>Why EVVAP?</h2>
      <div className="content">
        <p>
          Leading HR teams rely on EVVAP for dependable screening, verifications, safety, and
          compliance throughout the applicant journey and beyond.
        </p>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-icon">💡</div>
          <h3>Hire Smarter</h3>
          <p>
            Actionable insights boost confidence in your hiring process by using technology to
            effectively review and assess applicant data.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">⚡</div>
          <h3>On Board Faster</h3>
          <p>
            Use automation to quickly return screening results and streamline onboarding with faster
            Form I-9 compliance, tax credits, background checks, and drug testing.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">📝</div>
          <h3>Applicants First</h3>
          <p>
            Every applicant is a valuable individual. Create a positive experience with a mobile,
            applicant-focused journey.
          </p>
        </div>
      </div>

      <button className="learn-more-btn">Learn More</button>
    </section>
    {/* WHY Evaap */}
    <section className="people-section">
      <div className="people-container">
        <div className="people-images">
          <img src={image12} alt="Happy Woman" className="image1" />
          <img src={image13} alt="Smiling Man" className="image2" />
        </div>
        <div className="people-text">
          <h2>People are at the Heart of Everything We Do</h2>
          <p>
            EVVAP is committed to environmental, social, and corporate governance initiatives.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default OurServices;
