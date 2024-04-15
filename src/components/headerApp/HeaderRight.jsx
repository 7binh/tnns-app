import React from "react";
import HeaderAuth from "./HeaderAuth";
import HeaderCart from "./HeaderCart";

const HeaderRight = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <HeaderAuth></HeaderAuth>
      <HeaderCart></HeaderCart>
    </div>
  );
};

export default HeaderRight;
