import React from "react";
import ProductItem from "./ProductItem";
import { Products } from "./Products";

const ProductList = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Products.map((item, index) => (
        <ProductItem
          key={item.id}
          url={item.url}
          name={item.name}
          price={item.price}
        ></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
