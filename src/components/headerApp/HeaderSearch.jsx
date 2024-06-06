import React, { useState } from "react";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";
import HeaderSearchList from "./HeaderSearchList";

const HeaderSearch = () => {
  const [changetxt, setchangetxt] = useState(false);

  return (
    <div className="relative flex gap-2 items-center">
      <input
        onPo
        onChange={() => setchangetxt(true)}
        onBlur={() => setchangetxt(false)}
        className="bg-[#eee] rounded-full  p-2 w-80 holder shadow-md px-4"
        placeholder="Bạn tìm gì?"
        type="text"
      />

      <Button className="shadow-md flex items-center justify-between gap-2">
        <FaSearch />
        Tìm kiếm
      </Button>
      <div className=""></div>
      {changetxt && <HeaderSearchList />}
    </div>
  );
};

export default HeaderSearch;
