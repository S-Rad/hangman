import React from "react";
import { Box } from "@mui/material/";
import LetterKey from "./LetterKey";

const Keyboard = ({ handleClick, gameState }) => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {letters.map((letter) => (
        <LetterKey letter={letter} handleClick={handleClick} gameState={gameState} key={letter} />
      ))}
    </Box>
  );
};

export default Keyboard;
