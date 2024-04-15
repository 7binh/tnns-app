import React from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderRight from "./HeaderRight";

const HeaderApp = () => {
  return (
    <div className="container max-w-[1240px] mx-auto px-4 flex py-2 items-center justify-between">
      <div className="w-32">
        <img
          className="object-cover w-full h-full"
          src="https://theme.hstatic.net/200000420363/1000988446/14/logo.png?v=2262"
          alt="logo tin hoc ngoi sao"
        />
      </div>
      <HeaderSearch></HeaderSearch>
      <HeaderRight></HeaderRight>
    </div>
  );
};

export default HeaderApp;
