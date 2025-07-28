import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <img
        src="/images/nav-logo.svg"  
        alt="missing logo"
        className="md:w-24 w-20 h-auto" 
      />
    </nav>
  );
};

export default NavBar;
