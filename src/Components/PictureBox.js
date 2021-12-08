import React from "react";

const PictureBox = ({ gameState }) => {
  const img0 = require("./Pictures/pizza0.png");
  const img1 = require("./Pictures/pizza1.png");
  const img2 = require("./Pictures/pizza2.png");
  const img3 = require("./Pictures/pizza3.png");
  const img4 = require("./Pictures/pizza4.png");
  const img5 = require("./Pictures/pizza5.png");
  const img6 = require("./Pictures/pizza6.png");
  const img7 = require("./Pictures/pizza7.png");
  const img8 = require("./Pictures/pizza8.png");

  const imgList = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

  return <img src={imgList[gameState]} className="App-logo" alt="logo" />;
};

export default PictureBox;
