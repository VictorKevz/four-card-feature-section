import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Data from "./components/Data";
function App() {
  return (
    <main>
      <Header />
      <div className="outer-container">
        
        <div className="grid-container">
          {Data.map(({ id, title, description, icon }) => (
            <Card
              key={id}
              id={id}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
