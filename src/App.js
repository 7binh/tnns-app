import React from "react";
import HeaderApp from "./components/headerApp/HeaderApp";

import HeaderMenu from "./components/headerApp/HeaderMenu";
import HeaderMenuNav from "./components/headerApp/HeaderMenuNav";

const App = () => {
  return (
    <div className="">
      <HeaderApp></HeaderApp>
      <HeaderMenu></HeaderMenu>
      <HeaderMenuNav></HeaderMenuNav>

    </div>
  );
};

export default App;
