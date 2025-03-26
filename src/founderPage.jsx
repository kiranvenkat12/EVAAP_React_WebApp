import React from "react";
import "./founderPage.css";

import Cards from "./assets/Components/cards";

import Anji from "./assets/Components/header_images/founderImages/anji.jpg";
import Alekhya from "./assets/Components/header_images/founderImages/alekhya.jpg";
import Bhadru from "./assets/Components/header_images/founderImages/bhadru.jpg";
import Durga from "./assets/Components/header_images/founderImages/Durga.jpg";
import Kiran from "./assets/Components/header_images/founderImages/kiran.jpg";
import Mohan from "./assets/Components/header_images/founderImages/mohan.jpg";
import Pavan from "./assets/Components/header_images/founderImages/Pavan P.jpg";
import Praveen from "./assets/Components/header_images/founderImages/Praveen.jpg";
import Sai from "./assets/Components/header_images/founderImages/sai.jpg";
import Sandeep from "./assets/Components/header_images/founderImages/sandeep.jpg";
import SaiSakth from "./assets/Components/header_images/founderImages/SaiSakth.jpg";
import Shiva from "./assets/Components/header_images/founderImages/Shiva.jpg";
import Vyshanavi from "./assets/Components/header_images/founderImages/Vaishanavi.jpg";

const FounderPage = () => {
  const founderDetails = [
    {
      name: "Anjaneyulu Kadari",
      role: "Software Developer, Digital Marketing",
      image: Anji,
    },
    { name: "Pavan P", role: "Team Lead", image: Pavan },
    { name: "Alekhya Padala", role: "Java Developer", image: Alekhya },
    { name: "Bhadru Lotavath", role: "Java Developer", image: Bhadru },
    { name: "Praveen Puvvala", role: "Java Developer", image: Praveen },
    { name: "KiranVenkat Bishetti", role: "Software Developer", image: Kiran },
    { name: "Mohan Bishetti", role: "Data Analyst, Designer", image: Mohan },
    { name: "Durga Prasad", role: "Finance Department", image: Durga },
    { name: "Sandeep Kumar M", role: "Full Stack Developer", image: Sandeep },
    { name: "Sai Saketh", role: "Data Engineer", image: SaiSakth },
    { name: "Shiva Banoth", role: "Full Stack Developer", image: Shiva },
    { name: "Vaishnavi G", role: "Full Stack Developer", image: Vyshanavi },
  ];

  return (
    <div className="founderPage-main">
      <div className="founderpage-founder">
        <div className="founderpage-founder-div-img">
          <img
            className="founderpage-founder-img"
            src={Sai}
            alt="Sai Madiraju"
          />
        </div>
        <h2 className="founderpage-founder-h2">
          Sai Madiraju <br />
          Founder & CEO
          <p className="founderpage-founder-p">
            Founder Of: Hiscope Cyberlinks <br />
            EVAAP (Employment Verification and Academic Proofing) <br />
            VDr (Verified Doctor)
          </p>
        </h2>
      </div>
      <h2 className="founderpage-developer-h2">DEVELOPERS</h2>
      <div className="founderpage-developers">
        <ul className="founderpage-developers-ul">
          {founderDetails.map((founder, index) => (
            <Cards key={index} details={founder} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FounderPage;
