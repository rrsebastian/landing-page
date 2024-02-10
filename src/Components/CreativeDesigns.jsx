import React from "react";
import "../Styles/CreativeDesign.css";
import img1 from "../assets/company_shape.png.png";
import img2 from "../assets/div.company-img.png";
import img3 from "../assets/company_shape_smaller_screen.png";
import check from "../assets/check_icon.png.png";

function CreativeDesigns({ windowWidth }) {
  return (
    <div className="creative-design-container">
      <img src={windowWidth > 1375 ? img1 : img3} className="creative-img1" />
      <section className="creative-top-container">
        <h2>Our Company</h2>
        <h1>We Create Creative Designs For Every Web Page</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </section>
      <section className="creative-bottom-container">
        <div>
          <img className="creative-img" src={img2} />
        </div>
        <div className="creative-content-container">
          <h2>All Your Questions Are Here</h2>
          <ul className="creative-list-items">
            <li>
              <img src={check} /> Seo quotes to inspire your campaign
            </li>
            <li>
              {" "}
              <img src={check} /> Much easier to double your business
            </li>
            <li>
              {" "}
              <img src={check} /> Free page speed insights tool to find out
              exactly
            </li>
            <li>
              {" "}
              <img src={check} /> Seo quotes to inspire your campaign
            </li>
          </ul>
          <div className="btn-wrappers creative-btn-wrapper">
            <button>Discover More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreativeDesigns;
