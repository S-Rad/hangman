import pizza from "./pizza0.png";
import "./App.css";
import Keyboard from "./Keyboard";
import { Box, Button } from "@mui/material/";

function App() {
  const isCorrectGuess = (letter) => {
    console.log(letter);
    console.log(this);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <Button onClick={isCorrectGuess}>AAAAAAA</Button>
        <div style={{ fontFamily: "monospace" }}>_ _ _ _ _ _ _</div>
        <Keyboard handleClick={isCorrectGuess} />
      </header>
    </div>
  );
}

export default App;
