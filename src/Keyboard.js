import React from "react";
import { Box, Button } from "@mui/material/";
import LetterKey from "./LetterKey";

const Keyboard = ({ handleClick }) => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {letters.map((letter) => (
        //<Button variant="contained" style={{ margin: "10px" }} onClick={() => {handleClick(letter);}}>{letter}</Button>
        <LetterKey letter={letter} handleClick={handleClick} />
      ))}
    </Box>
  );
};

export default Keyboard;
