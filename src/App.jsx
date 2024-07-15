import React, { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import "./App.css";
import lightIcon from "./assets/images/light-mode.svg";
import darkIcon from "./assets/images/dark-mode.svg";

function App() {
  const [isDark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!isDark);
  }
  return (
    <main>
      <div className={`outer-container ${isDark ? "body-bg-dark" : ""}`}>
        <div className="inner-container">
          <Header isDark={isDark} />
          <Card isDark={isDark} />
          <div className="icons-container" onClick={toggleTheme}>
            <p className="dark-mode-text">Switch</p>
            <img
              src={isDark ? lightIcon : darkIcon}
              alt={`${isDark ? "light Icon" : "dark Icon"}`}
             
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
