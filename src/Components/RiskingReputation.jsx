import React from "react";
import "../Styles/RiskingReputation.css";
import phoneImg from "../assets/div.team-img-wrap.png";
import shape1 from "../assets/team_shape01.png.png";
import shape2 from "../assets/team_shape02.png.png";
import mobilePhoneImg from "../assets/div.team-img-wrap-mobile.png";

function RiskingReputation({ windowWidth }) {
  return (
    <div className="risking-rep-container">
      <section className="risking-img-container">
        <img className="risking-shape1" src={shape1} />
        <img
          className="risking-phone-img"
          src={windowWidth <= 450 ? mobilePhoneImg : phoneImg}
        />
      </section>
      <section className="risking-rep-content">
        <div className="risking-rep-main-content">
          <h2>Worry-Free</h2>
          <h1>Risking Your Reputation and Losing Sales?</h1>
          <p className="risking-text">
            Our 24/7 Inbox Management is your answer to keep up with messages
            and not miss out on potential leads.
          </p>
          <p>
            By offering <u>quick replies</u> to your audience you will{" "}
            <u>elevate your brands image</u> and help you <u>get the sale.</u>
          </p>
        </div>
        <div className="btn-wrappers risking-btn-wrapper">
          <img className="risking-shape2" src={shape2} />
          <button>Start Replying Faster</button>
        </div>
      </section>
    </div>
  );
}

export default RiskingReputation;
