import React, { useState } from "react";
import { Box, Button } from "@mui/material/";

const LetterKey = ({ letter, handleClick, gameState, key }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      variant="contained"
      style={{ margin: "10px" }}
      disabled={gameState == 8 ? true : disabled}
      onClick={() => {
        handleClick(letter);
        setDisabled(true);
      }}
      key={key}
    >
      {letter}
    </Button>
  );
};

export default LetterKey;
