import React from "react";
import HeaderApp from "./components/headerApp/HeaderApp";
import HeaderMenu from "./components/headerApp/HeaderMenu";
import BannerApp from "./components/bannerApp/BannerApp";
import ContainerApp from "./components/ContainerApp";
import ProductApp from "./components/product/ProductApp";
import { Routes, Route } from "react-router-dom";
import DetailApp from "./components/details/DetailApp";
import LoginApp from "./components/authPage/LoginApp";
import FooterApp from "./components/footerApp/FooterApp";

const App = () => {
  return (
    <div className="bg-[#fdfdfd]">
      <HeaderApp></HeaderApp>
      <Routes>
        <Route
          path="/"
          element={
            <ContainerApp>
              <BannerApp></BannerApp>
              <ProductApp></ProductApp>
            </ContainerApp>
          }
        />
        <Route
          path="/details"
          element={
            <ContainerApp>
              <DetailApp></DetailApp>
            </ContainerApp>
          }
        />
        <Route
          path="/login"
          element={
            <ContainerApp>
              <LoginApp></LoginApp>
            </ContainerApp>
          }
        />
      </Routes>
      <FooterApp></FooterApp>
    </div>
  );
};

export default App;
