import React, { useState } from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import PictureBox from "./Components/PictureBox";
function App() {
  const word = "hangman";
  const [triesLeft, setTriesLeft] = useState(0);
  const imgSrc = "./Components/Pictures/pizza" + triesLeft.toString() + ".png";
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
        <PictureBox gameState={triesLeft} />
        <div style={{ fontFamily: "monospace" }}>_ _ _ _ _ _ _</div>
        <Keyboard handleClick={handleGuess} gameState={triesLeft} />
      </header>
    </div>
  );
}

export default App;
