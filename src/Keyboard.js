import React from "react";
import { Box, Button } from "@mui/material/";

const Keyboard = ({ handleClick }) => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  console.log(letters);
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {letters.map((letter) => (
        <Button
          variant="contained"
          style={{ margin: "10px" }}
          onClick={() => {
            handleClick(letter);
          }}
        >
          {letter}
        </Button>
      ))}
    </Box>
  );
};

export default Keyboard;
