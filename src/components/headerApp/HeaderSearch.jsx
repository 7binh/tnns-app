import React from "react";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";

const HeaderSearch = () => {
  return (
    <div className="relative flex gap-2 items-center">
      <input
        className="bg-[#eee] rounded-full  p-2 w-80 holder shadow-md px-4"
        placeholder="Bạn tìm gì?"
        type="text"
      />

      <Button className="shadow-md flex items-center justify-between gap-2">
        <FaSearch />
        Tìm kiếm
      </Button>
      <div className=""></div>
    </div>
  );
};

export default HeaderSearch;
