import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import HeaderMenuNavItem from "./HeaderMenuNavItem";
import { PiGearFine } from "react-icons/pi";
import HeaderSubNav from "./HeaderSubNav";

const HeaderMenuNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="absolute top-[87%] left-0 flex">
      <div className="text-[black] rounded-2xl border-solid border-lightGray border z-10 bg-white  w-[300px] pr-0 overflow-hidden">
        <ul className="">
          <HeaderMenuNavItem>
            <FaGift />
            Tổng hợp các khuyến mãi
          </HeaderMenuNavItem>
          <HeaderMenuNavItem>
            <PiGearFine />
            Linh kiện mới
          </HeaderMenuNavItem>
        </ul>
      </div>
      <HeaderSubNav></HeaderSubNav>
    </div>
  );
};

export default HeaderMenuNav;
