import React from "react";
import aImage from "../img/a.svg";
const Ad = ({ showAd }) => {
  if (showAd) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={aImage} alt="Ad Banner" />
      </div>
    );
  } else {
    return null;
  }
};

export default Ad;
