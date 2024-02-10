import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarServiceDropdown from "./NavbarServiceDropdown";
import NavbarPlansDropdown from "./NavbarPlansDropdown";
import "../Styles/Navbar.css";
import "../Styles/NavbarDropdowns.css";

function Header({ windowWidth }) {
  const [showService, setShowService] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideDropdown = () => {
    setShowService(false);
    setShowPlans(false);
  };

  return (
    <div className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
      <div
        onClick={hideDropdown}
        className={`overlay ${showService || showPlans ? "show" : ""}`}
      ></div>
      <Navbar
        windowWidth={windowWidth}
        showService={showService}
        setShowService={setShowService}
        showPlans={showPlans}
        setShowPlans={setShowPlans}
        isScrolled={isScrolled}
      />
      <NavbarServiceDropdown showService={showService} />
      <NavbarPlansDropdown showPlans={showPlans} />
    </div>
  );
}

export default Header;
