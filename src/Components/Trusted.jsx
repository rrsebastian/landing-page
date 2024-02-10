import React from "react";
import "../Styles/Trusted.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

function Trusted({ windowWidth }) {
  return (
    <div className="trusted-container">
      <div className="mobile-slide-track">
        <div className="mobile-slide">
          <img src={logo1} />
        </div>
        <div className="mobile-slide">
          <img src={logo2} />
        </div>
        <div className="mobile-slide">
          <img src={logo3} />
        </div>
        <div className="mobile-slide">
          <img src={logo4} />
        </div>

        <div
          style={{ display: windowWidth > 1375 && "none" }}
          className="mobile-slide"
        >
          <img src={logo1} />
        </div>
        <div
          style={{ display: windowWidth > 1375 && "none" }}
          className="mobile-slide"
        >
          <img src={logo2} />
        </div>
        <div
          style={{ display: windowWidth > 1375 && "none" }}
          className="mobile-slide"
        >
          <img src={logo3} />
        </div>
        <div
          style={{ display: windowWidth > 1375 && "none" }}
          className="mobile-slide"
        >
          <img src={logo4} />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
