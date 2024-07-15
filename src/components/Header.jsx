import React from "react";
import "./css/header.css";
function Header({isDark}) {
  return (
    <header className="header-container">
      <h1 className={`header-title ${isDark ? "dark-text" : ""}`}>
        <span className="title-light">Reliable, efficient delivery</span>
        Powered by Technology
      </h1>

      <p className="header-parag">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>
  );
}

export default Header;
