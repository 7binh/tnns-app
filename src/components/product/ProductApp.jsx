import React from "react";
import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";

const ProductApp = () => {
  return (
    <>
      <ProductHeader>Danh sách sản phẩm</ProductHeader>
      <ProductList></ProductList>
    </>
  );
};

export default ProductApp;
