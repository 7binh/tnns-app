import React, { useState } from "react";
import {
  FaAlignJustify,
  FaBitcoin,
  FaRegMoneyBillAlt,
  FaWallet,
} from "react-icons/fa";
import { IoIosSettings, IoMdOptions } from "react-icons/io";
import { FaShield } from "react-icons/fa6";
import HeaderMenuNav from "./HeaderMenuNav";

const HeaderMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    // <div className=" relative mt-4 container max-w-[1240px] mx-auto flex  items-center hover:shadow-xl transition duration-300  rounded-full bg-lightGray px-2">
    <div className=" relative mt-4 container max-w-[1240px] mx-auto flex  items-center hover:shadow-xl transition duration-300  rounded-full bg-lightGray px-2">
      <div
        className=" cursor-pointer w-96 justify-center flex items-center gap-2  text-white bg-darkGray rounded-full px-4 py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaAlignJustify size={15} />
        <p className=" font-light">Danh mục sản phẩm</p>
        {isHovered && <HeaderMenuNav />}
      </div>
      <div className="flex gap-4 w-full items-center justify-around ml-4 py-2 font-normal text-sm">
        <a
          href="#"
          className="bg-white flex items-center px-2 py-2 rounded-full"
        >
          <IoIosSettings size={20} />
          Lắp đặt phòng net
        </a>
        <a
          href="#"
          className="bg-white flex items-center px-2 py-2 rounded-full"
        >
          <FaWallet size={15} className="mr-2" />
          Trả góp
        </a>
        <a
          href="#"
          className="bg-white flex items-center px-2 py-2 rounded-full"
        >
          <FaRegMoneyBillAlt size={20} className="mr-2" />
          Bản giá
        </a>
        <a
          href="#"
          className="bg-white flex items-center px-2 py-2 rounded-full"
        >
          <IoMdOptions size={20} className="mr-2" />
          Xây dựng cấu hình
        </a>
        <a
          href="#"
          className="bg-white flex items-center px-2 py-2 rounded-full"
        >
          <FaShield size={15} className="mr-2" />
          Chính sách bảo hành
        </a>
        <a
          href="#"
          className="bg-white flex items-center px-2 py-2 rounded-full"
        >
          <FaBitcoin size={20} className="mr-2" /> Thiết bị mining
        </a>
      </div>
    </div>
  );
};

export default HeaderMenu;
