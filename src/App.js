import React from "react";
import HeaderApp from "./components/headerApp/HeaderApp";
import HeaderMenu from "./components/headerApp/HeaderMenu";
import BannerApp from "./components/bannerApp/BannerApp";
import ContainerApp from "./components/ContainerApp";
import ProductApp from "./components/product/ProductApp";

const App = () => {
  return (
    <div className="bg-[#fdfdfd]">
      <HeaderApp></HeaderApp>
      <HeaderMenu></HeaderMenu>
      <ContainerApp>
        <BannerApp></BannerApp>
        <ProductApp></ProductApp>
      </ContainerApp>
    </div>
  );
};

export default App;
