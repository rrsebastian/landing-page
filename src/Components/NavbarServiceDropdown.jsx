import React from "react";
import Fundamentals from "./NavDropdownComponents/Fundamentals";
import Content from "./NavDropdownComponents/Content";
import PublicRelations from "./NavDropdownComponents/PublicRelations";
import MarketGrowth from "./NavDropdownComponents/MarketGrowth";

function NavbarServiceDropdown({ showService }) {
  return (
    <div className={`navbar-dropdown${showService ? " show" : ""}`}>
      <div className="navbar-dropdown-items">
        <div className="navbar-dropdown-wrapper">
          <Fundamentals />
          <Content />
        </div>

        <div className="navbar-dropdown-wrapper">
          <PublicRelations />
          <MarketGrowth />
        </div>
      </div>
      <div className="btn-wrapper">
        <button>View All Services</button>
      </div>
    </div>
  );
}

export default NavbarServiceDropdown;
