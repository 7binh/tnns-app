import React from "react";
import { FaGift } from "react-icons/fa";
import HeaderMenuNavItem from "./HeaderMenuNavItem";
import { PiGearFine } from "react-icons/pi";

const HeaderMenuNav = () => {
  return (
    <div className="text-[black] absolute p-4 rounded-2xl border-solid shadow-2xl z-10 bg-white top-[100%] left-0 w-[400px]">
      <ul className="">
        <HeaderMenuNavItem>
          <FaGift />
          Tổng hợp các khuyến mãi
        </HeaderMenuNavItem>
        <HeaderMenuNavItem>
          <PiGearFine />
          Linh kiện mới/cũ
        </HeaderMenuNavItem>
        <HeaderMenuNavItem>
          <PiGearFine />
          Laptop
        </HeaderMenuNavItem>
        <HeaderMenuNavItem>
          <FaGift />
          PC Gaming/Văn Phòng/Đồ Hoạ
        </HeaderMenuNavItem>
        <HeaderMenuNavItem>
          <PiGearFine />
          Phụ kiện
        </HeaderMenuNavItem>
        <HeaderMenuNavItem>
          <FaGift />
          Bàn phím
        </HeaderMenuNavItem>
        <HeaderMenuNavItem>
          <PiGearFine />
          Chuột
        </HeaderMenuNavItem>
      </ul>
    </div>
  );
};

export default HeaderMenuNav;
