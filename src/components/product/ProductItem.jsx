import React from "react";
import { Products } from "./Products";
import Button from "../button/Button";
import ButtonSecondary from "../button/ButtonSecondary";

const ProductItem = (props) => {
  return (
    <div className="bg-white border-lightGray border rounded-2xl overflow-hidden p-3 shadow-sm hover:shadow-2xl hover:border-primary duration-500 flex flex-col items-center">
      <div className=" mb-4 w-[270px] h-[270px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={props.url}
          alt={props.name}
        />
      </div>
      <div className=" text-center">
        <h4 className="line-clamp-2 font-bold mb-2">{props.name}</h4>

        <p className="text-primary mb-3 ">{props.price}</p>
      </div>
      <div className="flex gap-2 mb-3">
        <Button>Chi tiết</Button>
        <ButtonSecondary>Thêm vào giỏ hàng</ButtonSecondary>
      </div>
    </div>
  );
};

export default ProductItem;
