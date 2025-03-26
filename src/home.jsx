import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import img1 from "./assets/Components/header_images/verification_imges/Background-Checks-Pre-employment.png";
import img2 from "./assets/Components/header_images/verification_imges/verification_image1.png";
import img3 from "./assets/Components/header_images/verification_imges/pre_verification_image.png";
import img4 from "./assets/Components/header_images/haeder_backgound_image.jpg";

import bannerImg from "./assets/Components/header_images/verification_imges/employee verification.jpg";
import bannerImg2 from "./assets/Components/header_images/verification_imges/candidate verification.jpg";

import serviceImg1 from "./assets/Components/header_images/verification_imges/laptop image.avif";
import serviceImg2 from "./assets/Components/header_images/verification_imges/time picture image.avif";
import serviceImg3 from "./assets/Components/header_images/verification_imges/fraud image.webp";

import "./home.css";

const Home = () => {
  return (
    <div className="home_container">
      {/* <Header/> */}

      <div className="Home_Carousal_div">
        <Carousel fade>
          <Carousel.Item>
            <img src={img4} alt="image1" className="Home_Carousal_div_img" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="image2" className="Home_Carousal_div_img" />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="image3" className="Home_Carousal_div_img" />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img1} alt="image3" className="Home_Carousal_div_img" />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="image3" className="Home_Carousal_div_img" />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="home_hero_div">
        <div className="home_hero_div_div">
          <h3>Verify with Evaap</h3>
          <h5>Trusted verification</h5>
        </div>
        <p className="home_hero_div_p">
          Evaap is your trusted-partener for employment verification and
          academic proofing we ensure that your credentials are accurately
          verified providing peace of mind for both employers and educational
          institutions Our streamlined process is designed to be efficient and
          reliable making it easier for you to get the verification you need
          quickly and securely.
        </p>
        <button className="home_hero_div_btn">verify</button>
      </div>
      <div className="home_banner_div">
        <li>
          <h2>
            <b>For Employers</b>
          </h2>
          <img src={bannerImg} alt="home_image" />
        </li>
        <li>
          <p>
            eVaap stremlines the background check process for employers by
            providing pre-verified candidates. This ensures authenticity and
            saves time, making your recruitment process more efficient and
            reliable.To request an employment verification, simply submit the
            employee’s name, dates of employment, and the specific details you
            wish to verify via [contact method, e.g., email or secure portal].
            We will process your request promptly, typically within our business
            days, and provide you with the requested information. Please ensure
            that you have obtained the necessary consent from the individual
            prior to making a request.
          </p>
        </li>
      </div>

      <div className="home_banner_div2">
        <li>
          <p>
            With evaap, candidates can easily verify their identification and
            history with HR departments. This verification helps prioritize them
            among their peers, providing a competitive edge in the job market.
            To initiate a candidate verification, employers can submit a request
            that includes the candidate’s full name, the specific information
            they wish to verify (such as previous job titles, education, or
            references), and any necessary consent forms. Our team will promptly
            process the request and provide accurate verification details,
            typically within our business days. We ensure that all information
            is verified securely and in compliance with data protection
            regulations.
          </p>
        </li>
        <li>
          <h2>
            <b>For Candidates</b>
          </h2>
          <img src={bannerImg2} alt="home_image" />
        </li>
      </div>

      <div className="home_verification_path_div2">
        <Link
          to="/registrationPage"
          className="home_verification_path_div2_link"
        >
          Need an immediate verification ?
        </Link>
      </div>

      <div className="home_verification_path_div3">
        <li>
          <img src={serviceImg1} alt="home_service_img" />
          <p>
            <b>Open 24/7</b> <br />
            Our online Verification Services are available to you 24/7.That’s
            why we offer 24/7 verification services for both candidates and
            employers. Whether you need to verify a job applicant’s credentials,
            employment history, or qualifications, or confirm details about
            potential employees, our team is always available to provide
            reliable, real-time verification. We ensure that all requests are
            handled promptly and securely, giving you peace of mind at any hour
            of the day or night
          </p>
        </li>
        <li>
          <img src={serviceImg2} alt="home_service_img" />
          <p>
            <b> Get instant results</b> <br />
            we know that time is valuable. That’s why we partner with The
            Clearinghouse to provide instant, up-to-date verifications for both
            candidates and employers. Our system ensures that you receive
            accurate, real-time results, helping your business save time and
            make faster, more informed decisions. Whether you need to verify
            employment, qualifications, or credentials, you can count on
            immediate access to the most current data, available 24/7
          </p>
        </li>
        <li>
          <img src={serviceImg3} alt="home_service_img" />
          <p>
            <b>Reduce credentials fraud </b> <br />
            We help you safeguard your business against credentials fraud by
            ensuring diploma, enrollment, and degree authenticity. We understand
            the importance of confidentiality and handle all candidate
            verification requests with the highest level of security. Whether
            you're looking to confirm work experience, educational credentials,
            or professional licenses, our service provides a trusted solution to
            help you make the best hiring decisions
          </p>
        </li>
      </div>
    </div>
  );
};

export default Home;
