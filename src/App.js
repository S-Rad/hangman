import React, { useState } from "react";
import pizza from "./pizza0.png";
import "./App.css";
import Keyboard from "./Keyboard";

function App() {
  const word = "hangman";
  const [triesLeft, setTriesLeft] = useState(0);
  const imgSrc = "./pizza" + triesLeft.toString() + ".png";
  const handleGuess = (letter) => {
    console.log(letter);
    console.log(imgSrc);
    if (!word.toLowerCase().includes(letter.toLowerCase())) {
      setTriesLeft(triesLeft + 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgSrc} className="App-logo" alt="logo" key={imgSrc} />
        <div style={{ fontFamily: "monospace" }}>_ _ _ _ _ _ _</div>
        <Keyboard handleClick={handleGuess} />
      </header>
    </div>
  );
}

export default App;
