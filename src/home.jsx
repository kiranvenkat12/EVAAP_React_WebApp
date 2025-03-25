import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "./assets/Components/header_images/verification_imges/Background-Checks-Pre-employment.png";
import img2 from "./assets/Components/header_images/verification_imges/verification_image1.png";
import img3 from "./assets/Components/header_images/verification_imges/pre_verification_image.png";
import img4 from "./assets/Components/header_images/haeder_backgound_image.jpg";

import "./home.css";

const home = () => {
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
    </div>
  );
};

export default home;
