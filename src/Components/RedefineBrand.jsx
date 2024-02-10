import React from "react";
import "../Styles/RedefineBrand.css";
import img1 from "../assets/image6.png";
import img2 from "../assets/image4.png";
import img3 from "../assets/Meme1.png";
import img4 from "../assets/image5.png";
import img5 from "../assets/image7.png";
import img6 from "../assets/MemeIG.png";
import img7 from "../assets/image3.png";
import img8 from "../assets/MemeIG1.png";

function RedefineBrand({ windowWidth }) {
  return (
    <div className="redefine-brand-container">
      <section className="redefine-top-section">
        <h2>Visually Impressive</h2>
        <h1>
          We Can't Wait To <br /> Redefine Your Brand
        </h1>
      </section>
      <section className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={img1} />
          </div>
          <div className="slide">
            <img src={img2} />
          </div>
          <div className="slide">
            <img src={img3} />
          </div>
          <div className="slide">
            <img src={img4} />
          </div>

          <div className="slide">
            <img src={img1} />
          </div>
          <div className="slide">
            <img src={img2} />
          </div>
          <div className="slide">
            <img src={img3} />
          </div>
          <div className="slide">
            <img src={img4} />
          </div>
        </div>
        <div className="slide-track1">
          <div className="slide">
            <img className="img5" src={img5} />
          </div>
          <div className="slide">
            <img className="img6" src={img6} />
          </div>
          <div className="slide">
            <img className="img7" src={img7} />
          </div>
          <div className="slide">
            <img className="img8" src={img8} />
          </div>

          <div className="slide">
            <img className="img5" src={img5} />
          </div>
          <div className="slide">
            <img className="img6" src={img6} />
          </div>
          <div className="slide">
            <img className="img7" src={img7} />
          </div>
          <div className="slide">
            <img className="img8" src={img8} />
          </div>
        </div>
      </section>
      <div className="redefine-bottom-container">
        <h3>What Are You Waiting For?</h3>
        <div className="redefine-btn-wrapper">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M15.25 6.78998L9.25 12.79L15.25 18.79"
                stroke="#2D2D48"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M9.26999 18.79L15.27 12.79L9.26999 6.78998"
                stroke="#2D2D48"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ display: windowWidth > 1375 ? "none" : "block" }}
          className="btn-wrappers redefine-small-scrren-btn"
        >
          <button>Protect Your Brand</button>
        </div>
      </div>
    </div>
  );
}

export default RedefineBrand;
