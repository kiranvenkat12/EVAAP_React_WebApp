import React from "react";
import "./aboutUsPage.css";

import Aboutus_img from "./assets/Components/header_images/about_us_Images/aboutus_img.jpg";

const AboutusPage = () => {
  return (

    <div className="aboutus_container">
      {/* Main Content */}
      <div className = "EVAAP">
      <div className="header">
        <div className="header-content">
          <div className="text-content">
            <h1>Employment Verification And Academic Proofing</h1>
            <p>
              We are a progressive group of professionals, working together to
              solve complex technological & business problems in the field of
              employment and educational background screening from worldwide.
            </p>
          </div>
          <img src={Aboutus_img} alt="Laptop" className="header-image" />
        </div>
        </div>
      </div>
      
      {/* Vision Statement */}
      <div className="Our_Vision_Container">
        <section className="vision">
        <h2>Our Vision Statement</h2>
        <p>
          Deliver innovative solutions and insights that help our employers
          manage risk and hire the best talent.
        </p>
        </section>
       </div>
      {/* Background Verification Section */}
      <div className="Comprehensive-background-verification">
      <section className="background-verification">
        <h3>Comprehensive Background Verification</h3>
        <p>
          EVAAP,you can conduct background screenings that go beyond a simple
          criminal record lookup. Enter a new era of pre-employment screenings
          background checks now.
        </p>
        <button>Get Started Now</button>
      </section>
      </div>
      {/* About Us */}
      <div className="About Us Content">
        <section className="about-us">
         <h3>About Us.</h3>
          <p className="highlight">
          Evaap has been recognised as one of the most trusted and reliable
          partners for background verification service.
          </p>
         <p>
          Found in 2022. Evaap has been recognised as a enterprise for
          background verifing application who”s know for its uncompromised
          quality and customer satisfaction.we are deliberately and competently
          growing background screening company in india which thrives success
          for its clients and people.we work an intregrated approach to be
          recognised as a preferred choice for companies and its proud to be
          preferred partner to now over.
         </p>
         <p>
          Evaap comprehensive range of background checks i.e Employment
          Screening,professinal Background,criminal Records,Courts Records
          Global Due Diligence and Risk Database Screening ,Address
          Verification,Educational Qualification,Financial Credit,Proof Checks
          and Various Checks as per your business needs.Arc attest help
          companies in mitigating risk of frauds,create safe work
          environment,prevent frauds,establish trust and.
         </p>
         <p>
          Our smart,digital,automated processes help our clients save good
          amount of time and resources invested by them reducing the inpults and
          monitoring from their them.Our team proactively focuses towards
          betterment of the processes to make them more effcient which saves
          time and resources and delivers best results without compromising on
          the quality of output.we are a proactive and vibrant community of
          professinals and our detail-driven indigenous professinals extends
          service experience and believes in client satisfaction to its core.
         </p>
         </section>
         </div>
      {/* Vision & Mission */}
      <section className="vision-mission">
        <h3 className="vision-title"> Vision</h3>
        <p>
          To be the preferred partner recognized for the quality, product, and
          our people.
        </p>
        <h3 className="mission-title"> Mission</h3>
        <p>
          Attain distinction through professional excellence and consistent
          growth.
        </p>
      </section>
      {/* Why Join Us? */}
      <section className="why-join-us">
        <h3>Why Join Us?</h3>
        <ul>
          <li>A space to think freely, live projects & learn.</li>
          <li>Limitless opportunities for growth.</li>
          <li>
            Employee-friendly practices ensuring a healthy work-life balance.
          </li>
          <li>Recognition for commendable performance.</li>
          <li>A vibrant, friendly team guiding you through thick & thin.</li>
        </ul>
      </section>
      {/* Contact Section */}
      <section className="contact">
        <h3>Interested to work with Us?</h3>
        <p>
          If you are passionate about what you do,deliver it with
          authenticity.are distinctive from your peers and when it comes to
          creating the next generation of workforce.then we’d love to talk to
          you.write an email to or click the button below to fill your info and
          we will get in touch with you or come up for a coffee to explore the
          opportunities and possibilities for an association.
        </p>
      </section>

    </div>
  );
};

export default AboutusPage; 