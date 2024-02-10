import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "../Styles/Navbar.css";
import hamburgerIcon from "../assets/Symbol5.png";
import closeIcon from "../assets/SymbolClose.png";
import { Link as ScrollLink } from "react-scroll";

function Navbar({
  showService,
  setShowService,
  showPlans,
  setShowPlans,
  isScrolled,
  windowWidth,
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [closeBtnClick, setCloseBtnClick] = useState(false);

  useEffect(() => {
    if (windowWidth >= 1375) {
      setShowMobileMenu(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    setShowPlans(false);
    setShowService(false);
  }, [windowWidth]);

  useEffect(() => {
    setShowService(false);
    setShowPlans(false);
  }, [closeBtnClick]);

  const handleClick = () => {
    if (!showMobileMenu) {
      setShowMobileMenu(!showMobileMenu);
    } else if (showMobileMenu) {
      setCloseBtnClick(true);
      setShowMobileMenu(false);
      setTimeout(() => setCloseBtnClick(false), 100);
    }
  };

  return (
    <>
      <header
        style={{
          background:
            showService || (showMobileMenu && windowWidth <= 1375)
              ? "white"
              : showPlans || isScrolled
              ? "white"
              : "transparent",
        }}
        className="header"
      >
        <img
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="social-seal-logo"
          src={Logo}
        />
        <nav>
          <ul
            style={{
              left: showMobileMenu ? "0px" : "-2000px",
            }}
            className="list-items"
          >
            <li>Management</li>
            <li>Marketing</li>
            <li>Increase Sales</li>
            <li
              style={{ color: showService && "#F89E52" }}
              onClick={() => {
                if (showPlans) {
                  setShowPlans(false);
                  setShowService(!showService);
                } else setShowService(!showService);
              }}
              className="onhover-for-arrow"
            >
              Services{" "}
              {!showService ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_745)">
                    <path
                      d="M14.62 5.21875C14.7867 5.40625 14.7867 5.58333 14.62 5.75L8.05754 12.3125C7.89087 12.4792 7.72421 12.4792 7.55754 12.3125L0.995041 5.75C0.828374 5.58333 0.828374 5.40625 0.995041 5.21875L1.62004 4.625C1.78671 4.4375 1.96379 4.4375 2.15129 4.625L7.80754 10.25L13.4638 4.625C13.6513 4.4375 13.8284 4.4375 13.995 4.625L14.62 5.21875Z"
                      fill="#252541"
                      className="arrow-icon"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_745">
                      <rect
                        width="14"
                        height="16"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.870041 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_1157)">
                    <path
                      d="M1.11987 10.7813C0.953207 10.5938 0.953207 10.4167 1.11987 10.25L7.68237 3.6875C7.84904 3.52083 8.01571 3.52083 8.18237 3.6875L14.7449 10.25C14.9115 10.4167 14.9115 10.5937 14.7449 10.7813L14.1199 11.375C13.9532 11.5625 13.7761 11.5625 13.5886 11.375L7.93237 5.75L2.27612 11.375C2.08862 11.5625 1.91154 11.5625 1.74487 11.375L1.11987 10.7813Z"
                      fill="#F89E52"
                      className="arrow-icon"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1157">
                      <rect
                        width="14"
                        height="16"
                        fill="white"
                        transform="matrix(-1 8.74228e-08 8.74228e-08 1 14.8699 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </li>
            <li
              onClick={() => {
                if (showService) {
                  setShowService(false);
                  setShowPlans(!showPlans);
                } else setShowPlans(!showPlans);
              }}
              className="onhover-for-arrow"
            >
              Plans & Pricing{" "}
              {!showPlans ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_745)">
                    <path
                      d="M14.62 5.21875C14.7867 5.40625 14.7867 5.58333 14.62 5.75L8.05754 12.3125C7.89087 12.4792 7.72421 12.4792 7.55754 12.3125L0.995041 5.75C0.828374 5.58333 0.828374 5.40625 0.995041 5.21875L1.62004 4.625C1.78671 4.4375 1.96379 4.4375 2.15129 4.625L7.80754 10.25L13.4638 4.625C13.6513 4.4375 13.8284 4.4375 13.995 4.625L14.62 5.21875Z"
                      fill="#252541"
                      className="arrow-icon"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_745">
                      <rect
                        width="14"
                        height="16"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.870041 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_1026)">
                    <path
                      d="M0.889893 10.7813C0.723226 10.5938 0.723226 10.4167 0.889893 10.25L7.45239 3.6875C7.61906 3.52083 7.78573 3.52083 7.95239 3.6875L14.5149 10.25C14.6816 10.4167 14.6816 10.5937 14.5149 10.7813L13.8899 11.375C13.7232 11.5625 13.5461 11.5625 13.3586 11.375L7.70239 5.75L2.04614 11.375C1.85864 11.5625 1.68156 11.5625 1.51489 11.375L0.889893 10.7813Z"
                      fill="#F89E52"
                      className="arrow-icon"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1026">
                      <rect
                        width="14"
                        height="16"
                        fill="white"
                        transform="matrix(-1 8.74228e-08 8.74228e-08 1 14.6399 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </li>
            <div
              style={{ display: showMobileMenu && "block" }}
              className="mobile-background-wrapper"
            ></div>
          </ul>
        </nav>
        <div className="navbar-btn-wrapper">
          <ScrollLink
            to="best-agency-container"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <button
              style={{ display: showMobileMenu && "none" }}
              className="nav-speak-btn"
            >
              Speak With Us!
            </button>
          </ScrollLink>
          {windowWidth < 1375 && (
            <button onClick={handleClick} className="hamburger-btn">
              {showMobileMenu ? (
                <img src={closeIcon} />
              ) : (
                <img src={hamburgerIcon} />
              )}
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
