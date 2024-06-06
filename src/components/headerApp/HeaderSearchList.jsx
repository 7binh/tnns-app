import React from "react";
import { Products } from "../../data/Products";
import ProductItem from "../product/ProductItem";
import HeaderSearchItem from "./HeaderSearchItem";

const HeaderSearchList = () => {
  return (
    <a
      href="/details"
      className="absolute z-10 top-full left-0 w-full h-auto bg-white shadow-2xl rounded-2xl border border-lightGray px-4 py-2 flex flex-col justify-center gap-2"
    >
      {Products.map((item, index) => (
        <HeaderSearchItem
          key={item.id}
          url={item.url}
          name={item.name}
          price={item.price}
        ></HeaderSearchItem>
      ))}
    </a>
  );
};

export default HeaderSearchList;
