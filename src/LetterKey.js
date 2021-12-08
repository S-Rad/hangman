import React, { useState } from "react";
import { Box, Button } from "@mui/material/";

const LetterKey = ({ letter, handleClick }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      variant="contained"
      style={{ margin: "10px" }}
      disabled={disabled}
      onClick={() => {
        handleClick(letter);
        setDisabled(true);
      }}
    >
      {letter}
    </Button>
  );
};

export default LetterKey;
