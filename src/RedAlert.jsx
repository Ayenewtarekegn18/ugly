// RedAlert.js
import React, { useState } from "react";

const RedAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [audio] = useState(new Audio("./1.mp3"));

  const handleButtonClick = () => {
    setShowAlert(true);
    audio.play().catch((error) => {
      console.error("Autoplay blocked:", error);
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Welcome</button>

      {showAlert && (
        <>
          <div className="red-alert">
            <p>This is a giant red alert message!</p>
            <button onClick={handleButtonClick}>Close</button>
          </div>
          <div className="red-alert1">
            <p>This is a giant alert message!</p>
            <button onClick={handleButtonClick}>Close</button>
          </div>
          <div className="red-alert2">
            <p>This is a message!</p>
            <button onClick={handleCloseAlert}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default RedAlert;
