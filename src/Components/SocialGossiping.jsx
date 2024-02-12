import React, { useEffect, useRef } from "react";
import "../Styles/SocialGossiping.css";
import trollsImg from "../assets/social-trolls.png.png";
import icon1 from "../assets/blue-circle.png.png";
import icon2 from "../assets/red-circle.png.png";
import shape1 from "../assets/small-squiggle.png.png";
import shape2 from "../assets/large-squiggle.png.png";
import exclamationImg from "../assets/exclamation.png.png";

function SocialGossiping() {
  const exclamationRef = useRef();
  const containerRef = useRef();
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);

  useEffect(() => {
    const icon1 = icon1Ref.current;
    const icon2 = icon2Ref.current;

    const icon1Speed = 0.65;
    const icon2Speed = 0.65;

    let angle1 = 0;
    let angle2 = 0;

    function animateIcons() {
      const radius = 30;

      const x1 = radius * Math.cos(angle1 * (Math.PI / 120));
      const y1 = radius * Math.sin(angle1 * (Math.PI / 180));

      const x2 = radius * Math.cos((angle2 + 180) * (Math.PI / 120));
      const y2 = radius * Math.sin((angle2 + 180) * (Math.PI / 180));

      icon1.style.transform = `translate(${x1}px, ${y1}px)`;
      icon2.style.transform = `translate(${x2}px, ${y2}px)`;

      angle1 += icon1Speed;
      angle2 += icon2Speed;

      requestAnimationFrame(animateIcons);
    }

    function handleScroll() {
      const scrollPosition = window.scrollY;
      const containerTop = containerRef.current.offsetTop;

      const distance = scrollPosition - containerTop;

      const translateY = distance * 0.25;

      exclamationRef.current.style.transform = `translateY(${translateY}px)`;
    }

    window.addEventListener("scroll", handleScroll);

    animateIcons();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="social-gossip-container" ref={containerRef}>
      <img className="gossip-shape2" src={shape2} />

      <section className="trolls-img-container">
        <img className="gossip-icon1" src={icon1} ref={icon1Ref} alt="Icon 1" />
        <img
          className="gossip-exclamation-img"
          src={exclamationImg}
          alt="Exclamation Image"
          ref={exclamationRef}
        />
        <img className="trolls-img" src={trollsImg} />
      </section>
      <section className="gossip-content-container">
        <h2>Keeping You Covered</h2>
        <h1>Social Gossiping Slowing You Down?</h1>
        <div className="gossip-text-wrapper">
          <p>
            Staying on top of how your brand is being used is an important
            aspect to <u>protect your identity and reputation</u>
          </p>
          <p>
            Our sophisticated <u>threat monitoring</u> system enables us to{" "}
            <u>quickly identify threats</u> towards your brand and deal with
            them to <u>prevent damage</u> to your reputation.
          </p>
        </div>

        <h3>The most common threats we encounter:</h3>
        <div className="gossip-threats-container">
          <p>Brand Impersonation</p>
          <p>Compromised Account</p>
          <p>Scams</p>
          <p>Hi-jacked Posts</p>
          <p>Bad Sentiment</p>
          <p>Bad Reviews</p>
          <p>Competitor Envy</p>
          <p>False Media</p>
          <p>Low Social Authority</p>
          <p>Information Inaccuracy</p>
          <p>Missed Messages</p>
          <img
            className="gossip-icon2"
            src={icon2}
            ref={icon2Ref}
            alt="Icon 2"
          />
        </div>
        <h3>The most common threats we encounter:</h3>
        <div className="btn-wrappers gossip-btn-wrapper">
          <img className="gossip-shape1" src={shape1} />
          <button>Protect Your Brand</button>
        </div>
      </section>
    </div>
  );
}

export default SocialGossiping;
