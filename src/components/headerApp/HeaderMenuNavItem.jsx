import React from "react";
import { FaGift } from "react-icons/fa";

const HeaderMenuNavItem = (props) => {
  return (
    <li className="hover:bg-lightGray hover:shadow-2xl py-2 px-4">
      <a href="#" className="flex items-center gap-2 flex-shrink-0 ">
        {props.children}
      </a>
    </li>
  );
};

export default HeaderMenuNavItem;
