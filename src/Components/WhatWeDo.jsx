import React from "react";
import "../Styles/WhatWeDo.css";
import img from "../assets/bakery2.png";
import icon1 from "../assets/Symbol.png";
import icon2 from "../assets/Symbol1.png";
import icon3 from "../assets/Symbol2.png";
import icon4 from "../assets/Symbol3.png";
import icon5 from "../assets/Symbol4.png";

function WhatWeDo({ windowWidth }) {
  return (
    <div className="what-we-do-container">
      <section className="what-we-do-img-container">
        <img className="what-we-do-women-img" src={img} />
        <div className="what-we-do-img-experience">
          <h2>{windowWidth < 1375 ? "18+" : "5+"}</h2>
          <p>
            Years Of <br /> Experience
          </p>
        </div>
        <div className="what-we-do-img-projects">
          <h2>{windowWidth < 1375 ? "5K+" : "3K+"}</h2>
          <p>
            Have Faithfully Completed Projects <br /> Till Date
          </p>
        </div>
      </section>
      <section className="what-we-do-content">
        <h2>What We Do</h2>
        <h1>
          We design and develop web and mobile applications for our clients
          worldwide
        </h1>
        <p>
          Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt
          arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh
          dolores consectetuer,
        </p>
        <div
          style={{ display: windowWidth < 1375 && "none" }}
          className="what-we-do-icons"
        >
          <img src={icon1} />
          <img src={icon2} />
          <img src={icon3} />
          <img src={icon4} />
          <img src={icon5} />
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
