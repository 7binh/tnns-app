import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const HeaderCart = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="relative">
        <FaShoppingCart size={30} className="text-darkGray"></FaShoppingCart>
        <div className="absolute top-[-10px] right-[-5px] w-6 h-6 rounded-full text-center bg-primary bg-opacity-70 backdrop-blur-sm font-bold inline-block text-white">
          0
        </div>
      </div>
      <h5 className="text-darkGray font-bold text-sm">Giỏ hàng</h5>
    </div>
  );
};

export default HeaderCart;
