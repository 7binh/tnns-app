import React from "react";
import ProductItem from "./ProductItem";
import { Products } from "../../data/Products";

const ProductList = () => {
  return (
    <a href="/details" className="grid grid-cols-4 gap-4">
      {Products.map((item, index) => (
        <ProductItem
          key={item.id}
          url={item.url}
          name={item.name}
          price={item.price}
        ></ProductItem>
      ))}
    </a>
  );
};

export default ProductList;
