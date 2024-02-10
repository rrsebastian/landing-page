import React, { useState } from "react";
import "../Styles/AllQuestions.css";
import img1 from "../assets/faq_img.png.png";
import img2 from "../assets/faq_shape.png.png";
import smallerScreenImg from "../assets/faq_img02.png.png";
import AllQuestionsComponent from "./AllQuestionsComponent";

function AllQuestions({ windowWidth }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="all-questions-container">
      <section className="all-questions-top-container">
        <div className="all-questions-img-wrapper">
          <img src={img1} />
          <img
            className="all-questions-smaller-screen-img"
            src={smallerScreenImg}
          />
        </div>

        <div className="all-questions-content">
          <h1>All Your Questions Are Here</h1>
          <h2>& Knock Me Directly to Know More</h2>
          <p>
            Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt
            arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh.{" "}
            {windowWidth <= 1375 ? "Dolores Consectetuer" : ""}
          </p>
        </div>
      </section>
      <section className="questions-container">
        <AllQuestionsComponent
          index={0}
          isOpen={openIndex === 0}
          onToggle={handleToggle}
        />
        <AllQuestionsComponent
          index={1}
          isOpen={openIndex === 1}
          onToggle={handleToggle}
        />
        <AllQuestionsComponent
          index={2}
          isOpen={openIndex === 2}
          onToggle={handleToggle}
        />
        <AllQuestionsComponent
          index={3}
          isOpen={openIndex === 3}
          onToggle={handleToggle}
        />
        <img className="all-questions-shape" src={img2} />
      </section>
    </div>
  );
}

export default AllQuestions;
