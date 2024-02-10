import React from "react";
import Management from "./NavDropdownComponents/Management";
import GrowthPlans from "./NavDropdownComponents/GrowthPlans";
import CustomPlans from "./NavDropdownComponents/CustomPlans";
import Growth from "./NavDropdownComponents/Growth";

function NavbarPlansDropdown({ showPlans }) {
  return (
    <div className={`navbar-dropdown1${showPlans ? " show" : ""}`}>
      <div className="navbar-dropdown-items">
        <div className="navbar-dropdown-wrapper">
          <Management />
          <GrowthPlans />
        </div>
        <div className="navbar-dropdown-wrapper">
          <CustomPlans />
          <Growth />
        </div>
      </div>
      <div className="btn-wrapper1 ">
        <button>View All Services</button>
      </div>
    </div>
  );
}

export default NavbarPlansDropdown;
