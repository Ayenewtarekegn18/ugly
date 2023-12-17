import { useState } from "react";
import "./App.css";
import RedAlert from "./RedAlert";

function App() {
  const [count, setCount] = useState(0);
  const handleBClick = () => {
    while (true) {
      let count = 0;
      console.log(count);
    }
  };
  return (
    <>
      <div className="Nav-bar">
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </div>
      <h1>Ugly site for AASTU Software</h1>
      <RedAlert />
      <div className="footer">
        <button className="button" onClick={handleBClick} type="button">
          {" "}
          footer
        </button>
      </div>
    </>
  );
}

export default App;
