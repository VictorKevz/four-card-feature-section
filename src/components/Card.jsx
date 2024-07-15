import React from "react";
import data from "./Data";
import "./css/card.css";

function Card({isDark}) {
  const checkClassName = (id) => {
    if (id == 1) {
      return "supervisor";
    }
    if (id == 2) {
      return "team-builder";
    }
    if (id == 3) {
      return "karma";
    }
    if (id == 4) {
      return "calculator";
    }
  };

  return (
    <div className="card-container">
      {data.map((obj) => {
        return (
          <div
            key={obj.id}
            className={`card ${isDark ? "card-dark-bg" : ""} ${checkClassName(
              obj.id
            )}`}
          >
            <div className="text-container">
              <h2
                className={`card-title ${checkClassName(obj.id)} ${
                  isDark ? "dark-text" : ""
                }`}
              >
                {obj.title}
              </h2>
              <p className={`card-parag ${checkClassName(obj.id)}`}>
                {obj.description}
              </p>
            </div>
            <div className="card-icon">
              <img src={obj.icon} alt="icon" className="card-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
