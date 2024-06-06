import React from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderRight from "./HeaderRight";
import HeaderMenu from "./HeaderMenu";

const HeaderApp = () => {
  return (
    <div className="">
      <div className="container max-w-[1240px] mx-auto px-4 flex py-2 items-center justify-between">
        <a href="/" className="w-32">
          <img
            className="object-cover w-full h-full"
            src="https://theme.hstatic.net/200000420363/1000988446/14/logo.png?v=2262"
            alt="logo tin hoc ngoi sao"
          />
        </a>
        <HeaderSearch></HeaderSearch>
        <HeaderRight></HeaderRight>
      </div>
      <HeaderMenu></HeaderMenu>
    </div>
  );
};

export default HeaderApp;
