import React from "react";
import "../Styles/Hero.css";
import purpleBall from "../assets/purpleball.png";
import pinkBall from "../assets/pinkball.png";
import lightPinkBall from "../assets/lightpinkball.png";
import HeroMediaIcons from "./HeroMediaIcons";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import mobileBall from "../assets/banner_shape04.png.png";
import mobileImg1 from "../assets/imageMobile.png";
import mobileImg2 from "../assets/image2mobile.png";
import mobileImg3 from "../assets/team_shape02.png.png";
import mobileShape from "../assets/team_shape01.png.png";

function Hero({ windowWidth }) {
  return (
    <div className="hero-section">
      <svg
        className="background-shape"
        xmlns="http://www.w3.org/2000/svg"
        width="655"
        height="698"
        viewBox="0 0 655 698"
        fill="none"
      >
        <path
          d="M609.974 46.1754C664.092 146.301 662.755 258.442 640.708 371.25C619.328 484.059 577.237 597.535 489.714 654.273C402.19 711.678 268.567 713.013 183.049 655.608C97.53 598.202 60.7836 483.391 20.6967 355.23C-18.7221 227.737 -60.8133 87.5607 -8.70033 -11.8976C43.4127 -111.356 189.73 -169.429 318.008 -154.744C446.286 -140.726 555.857 -53.2829 609.974 46.1754Z"
          fill="#F3F7FA"
        />
      </svg>

      <img className="lightpink-ball" src={lightPinkBall} />

      <section className="hero-left-section">
        <div className="hero-text-wrapper">
          <p>
            Social Media Marketing{" "}
            <span>That Works{windowWidth > 600 && "!"}</span>
            <img className="purple-ball" src={purpleBall} />
            <img className="pinkball" src={pinkBall} />
          </p>
        </div>
        <h1>
          <img className="mobile-ball" src={mobileBall} />
          Save Time <br /> Build Connections <br /> Increase Profits
        </h1>
        <HeroMediaIcons windowWidth={windowWidth} />
        <div className="btn-wrappers">
          <div className="hero-mobile-btn-wrapper">
            <button className="view-our-plans-btn">View Our Plans</button>
          </div>

          <p>What We Offer</p>
        </div>
      </section>
      <section className="hero-img-section">
        <img className="mobile-arrow-img" src={mobileImg3} alt="" />
        <div className="hero-img-wrapper">
          <img className="img1" src={image1} />
          <img
            className="img2"
            src={windowWidth < 1375 ? mobileImg2 : image2}
          />
        </div>
        <img className="img-3" src={windowWidth < 1375 ? mobileImg1 : image3} />
        <img className="hero-mobile-shape" src={mobileShape} />
      </section>
    </div>
  );
}

export default Hero;
