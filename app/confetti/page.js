"use client"
import React, { useState } from 'react';
import Confetti from 'react-confetti';

function HappyBirthday() {
  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 5000); // Stop confetti after 5 seconds
  };

  return (
    <div>
      <h1>Happy Birthday!</h1>
      <button onClick={handleButtonClick}>Celebrate!</button>
      {isRunning && <Confetti />}
    </div>
  );
}

export default HappyBirthday;
import { StrictMode } from "react";
import ReactDOM from "react-dom";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
