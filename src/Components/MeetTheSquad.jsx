import React from "react";
import "../Styles/MeetTheSquad.css";
import img1 from "../assets/inner_team03.jpg.png";
import img2 from "../assets/inner_team04.jpg.png";
import img3 from "../assets/inner_team05.jpg.png";

function MeetTheSquad({ windowWidth }) {
  return (
    <div className="squad-container">
      <section className="squad-top-container">
        <h1>Meet The Squad</h1>
        <p>
          {windowWidth < 1375
            ? "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores"
            : "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget."}
        </p>
      </section>
      <section className="squad-imgs-container">
        <div className="squad-person-wrapper">
          <img src={img1} />
          <div className="squad-person-details">
            <h2>Ryan Vetrovs</h2>
            <h3>CEO Kawasaki Inc.</h3>
          </div>
        </div>
        <div className="squad-person-wrapper">
          <img src={img2} />
          <div className="squad-person-details">
            <h2>Emerson Saris</h2>
            <h3>CEO Kawasaki Inc.</h3>
          </div>
        </div>
        <div className="squad-person-wrapper">
          <img src={img3} />
          <div className="squad-person-details">
            <h2>Lindsey Schleifer</h2>
            <h3>CEO Kawasaki Inc.</h3>
          </div>
        </div>
      </section>
      <div className="radio-inputs-container">
        <input type="radio" name="radio-group" />
        <input type="radio" name="radio-group" />
        <input type="radio" name="radio-group" defaultChecked />
        <input
          style={{ display: windowWidth <= 1375 ? "block" : "none" }}
          type="radio"
          name="radio-group"
        />
        <input
          style={{ display: windowWidth <= 720 ? "block" : "none" }}
          type="radio"
          name="radio-group"
        />
      </div>
    </div>
  );
}

export default MeetTheSquad;
