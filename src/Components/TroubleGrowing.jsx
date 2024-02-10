import React from "react";
import "../Styles/TroubleGrowing.css";
import shape1 from "../assets/success_shape01.png.png";
import shape2 from "../assets/team_shape02.png.png";
import sectionImg from "../assets/success_img.png.png";
import mobileSectionImg from "../assets/success_img-mobile.png";

function TroubleGrowing({ windowWidth }) {
  return (
    <div className="trouble-growing-container">
      <img className="trouble-growing-shape1" src={shape1} />
      <section className="trouble-growing-content">
        <h2>Thinking "Outside The Box"</h2>
        <h1>Troubles Growing Your Audience?</h1>
        <div>
          <p>
            <u> Attract new followers</u> that are <u>relevant</u> to your
            objectives by reaching <u> outside your social media</u> bubble, and
            you'll start to see a <u>quicker return on your investment</u>.
          </p>
          <div className="trouble-middle-text">
            <p>
              Along with <u>captivating visuals</u>, our teams perform countless{" "}
              <u>hours of research and planning</u> to deliver <u>optimized</u>
              <u>marketing campaigns</u> that target your <u>ideal audience</u>
              who are most likely to <u>convert into leads</u> .
            </p>
          </div>

          <p>
            By thoroughly planning your paid <u>Social Media Advertising</u>{" "}
            campaign, we are able to ensure that every penny of your{" "}
            <u>marketing budget is well spent</u>.
          </p>
        </div>
        <div className="btn-wrappers btn-trouble-wrapper">
          <img className="trouble-growing-shape2" src={shape2} />
          <button>Start Driving Sales</button>
        </div>
      </section>
      <section>
        <img src={windowWidth <= 600 ? mobileSectionImg : sectionImg} />
      </section>
    </div>
  );
}

export default TroubleGrowing;
