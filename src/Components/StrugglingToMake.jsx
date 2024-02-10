import React, { useEffect, useState } from "react";
import "../Styles/StrugglingToMake.css";
import shape1 from "../assets/project_shape01.png.png";
import shape2 from "../assets/project_shape02.png.png";
import socialImg1 from "../assets/barber-shop-grand-opening.png.png";
import socialImg2 from "../assets/image.png";
import socialImg3 from "../assets/pistachio-img.png";
import image4 from "../assets/home-insurance.png.png";

function StrugglingToMake() {
  const [imageOrder, setImageOrder] = useState([
    socialImg1,
    socialImg2,
    socialImg3,
  ]);
  const [specialIndex, setSpecialIndex] = useState(2);
  const [smallerScreenImageOrder, setSmallerScreenImageOrder] = useState([
    socialImg3,
    image4,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOrder((prevOrder) => {
        const [first, ...rest] = prevOrder;
        return [...rest, first];
      });
      setSpecialIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const smallerScreenIntervalId = setInterval(() => {
      setSmallerScreenImageOrder((prevOrder) => {
        const [first, ...rest] = prevOrder;
        return [...rest, first];
      });
    }, 5000);

    return () => clearInterval(smallerScreenIntervalId);
  }, []);

  return (
    <div className="struggling-tomake-container">
      <section className="struggling-top-container">
        <div className="struggling-text-wrapper">
          <img className="struggling-shape1" src={shape1} alt="Shape 1" />
          <h2>Our Expertise is Your Success</h2>
          <h1>Struggling to Make Engaging Content?</h1>
          <p>
            From the research and planning to creating striking images and
            videos for your posts, our service focuses on creating a{" "}
            <u>unique voice</u> for your brand that will{" "}
            <u>engage your audience</u> and keep them coming back for more!
          </p>
        </div>
        <div className="btn-wrappers struggling-btn-wrapper">
          <button>View more</button>
          <img className="struggling-shape2" src={shape2} alt="Shape 2" />
        </div>
      </section>
      <section className="struggling-img-wrapper">
        {imageOrder.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={
              index === specialIndex ? "icecream-img special" : "icecream-img"
            }
          />
        ))}
      </section>
      <section className="struggling-smaller-screen-imgs">
        {smallerScreenImageOrder.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </section>
    </div>
  );
}

export default StrugglingToMake;
