import React from "react";
import img0 from "./Pictures/pizza0.png";
import img1 from "./Pictures/pizza1.png";
import img2 from "./Pictures/pizza2.png";
import img3 from "./Pictures/pizza3.png";
import img4 from "./Pictures/pizza4.png";
import img5 from "./Pictures/pizza5.png";
import img6 from "./Pictures/pizza6.png";
import img7 from "./Pictures/pizza7.png";
import img8 from "./Pictures/pizza8.png";

const PictureBox = ({ gameState }) => {
  const imgList = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

  return <img src={imgList[gameState]} className="App-logo" alt="logo" />;
};

export default PictureBox;
