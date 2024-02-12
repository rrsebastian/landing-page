import React, { useState } from "react";
import Swal from "sweetalert2";
import "../Styles/SocialStrategy.css";
import img1 from "../assets/SymbolPointing.png";
import img2 from "../assets/download-guide.png.png";

function SocialStrategy({ windowWidth }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "" || !emailRegex.test(email)) {
      setEmailValid(false);
      return;
    }

    setEmailValid(true);

    Swal.fire({
      title: "Success!",
      text: "Check your Email for the PDF link download",
      icon: "success",
      confirmButtonText: "Done",
      customClass: {
        confirmButton: "sweet-alert-btn",
      },
    });

    setEmail("");
  };

  const handleInputChange = (e) => {
    setEmailValid(true);

    setEmail(e.target.value);
  };

  return (
    <div className="social-strategy-container" onMouseMove={handleMouseMove}>
      <section className="strategy-top-container">
        <h1>Accelerate</h1>
        <h2>Your Social Strategy</h2>
        <p>
          Find out how to make social media work for you. We'll send you a PDF
          that explains different marketing strategies to help your business
          grow.
        </p>
      </section>

      <form
        style={{ background: emailValid ? "" : "#FF9494" }}
        className="strategy-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <img className="pointing-img" src={img1} />
        <input
          autoComplete="true"
          style={{ background: emailValid ? "" : "#FF9494" }}
          placeholder={
            windowWidth < 1375 && windowWidth > 600
              ? "Enter your e-mail"
              : "Enter your e-mail address"
          }
          type="text"
          value={email}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit">Download PDF</button>
        <div className="strategy-img-container">
          <img
            className="strategy-background-img"
            src={img2}
            style={{
              transform: `translate(-${mousePosition.x / 50}px, -${
                mousePosition.y / 50
              }px)`,
            }}
          />
        </div>
      </form>
      <section className="strategy-text">
        <p>
          Upon supplying us with your e-mail, we will send you a link to
          download this PDF. We will also follow up with you within 5 days to
          see if there is any way we can help you, and we'll sign you up to
          receive updated tips and tricks for growing your social media. Don't
          worry; we only send this newsletter once a month, and you can easily
          unsubscribe from all communications at any time.
        </p>
      </section>
    </div>
  );
}

export default SocialStrategy;
