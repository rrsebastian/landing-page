import React, { useEffect, useRef } from "react";
import "../Styles/SocialMediaManagement.css";

function SocialMediaManagement({ windowWidth }) {
  const officeRef = useRef(null);
  const customersRef = useRef(null);
  const workersRef = useRef(null);
  const projectsRef = useRef(null);
  const componentSectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetNumber = parseInt(
            entry.target.querySelector("p").innerText,
            10
          );
          const suffix = entry.target.dataset.suffix || "";
          startCounting(entry.target, targetNumber, suffix);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    [officeRef, customersRef, workersRef, projectsRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounting = (targetRef, targetNumber, suffix) => {
    let currentNumber = 0;

    const intervalId = setInterval(() => {
      targetRef.querySelector("p").innerText = currentNumber + suffix;
      currentNumber++;

      if (currentNumber > targetNumber) {
        clearInterval(intervalId);
      }
    }, 50);
  };

  return (
    <div className="social-management-container">
      <section className="social-left-container">
        <h2>Social Media Management is</h2>
        <h1>
          Building Brands <br />
          Creating Connections <br />
          Driving Sales
        </h1>
        <div className="social-content">
          <p>
            Social Media is{" "}
            <span className="social-smaller-screen-text-style">
              more than just posting
            </span>{" "}
            and showing off how many followers you have. It's a valuable
            addition to your marketing strategy that <u>builds trust</u> and{" "}
            <u>creates connections</u> with potential customers to{" "}
            <u>drive sales</u> and <u>increase your revenue.</u>
          </p>
          <p>
            Save your time and money by partnering with us and start seeing
            results that give you that <u>highest return on investment</u>.
          </p>
          <p>After all; when you grow, we grow together.</p>
        </div>
        <div className="btn-wrappers social-btn-wrapper">
          <button>Contact Us</button>
          <p className="btn-wrapper-p">How We Can Help</p>
        </div>
      </section>
      <section className="number-count-container">
        <div className="number-count-wrapper num-count-1">
          <div className="office-wrapper" ref={officeRef}>
            <p>{windowWidth > 1375 ? "100" : "252"}</p>
            <h2>Offices</h2>
          </div>
          <div className="customers-wrapper" ref={customersRef} data-suffix="K">
            <p>{windowWidth > 1375 ? "3" : "15"}K</p>
            <h2>Customers</h2>{" "}
          </div>
        </div>
        <div className="number-count-wrapper" ref={componentSectionRef}>
          <div className="workers-wrapper" ref={workersRef}>
            <p>10</p> <h2>Workers</h2>
          </div>
          <div className="projects-wrapper" ref={projectsRef} data-suffix="+">
            <p>{windowWidth > 1375 ? "100" : "1300"}+</p>
            <h2>Projects</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialMediaManagement;
