import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const HeaderAuth = () => {
  return (
    <a href="/login" className="flex items-center justify-between gap-4">
      <FaUser color="#555" size={30} />
      <div className="">
        <h5 className="font-bold text-darkGray flex items-center">
          Tài khoản <FaCaretDown />
        </h5>
        <p className="text-darkGray text-sm">Đăng nhập/Đăng ký</p>
      </div>
    </a>
  );
};

export default HeaderAuth;
