import React from "react";
import HeaderSubNavItem from "./HeaderSubNavItem";

const HeaderSubNav = () => {
  return (
    <div className="text-[black] p-4 rounded-2xl border-lightGray border shadow-lg z-10 bg-white pr-0 w-[940px]">
      <ul className="grid grid-cols-4  gap-y-6">
        <HeaderSubNavItem title="CPU">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </HeaderSubNavItem>
        <HeaderSubNavItem title="CPU">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </HeaderSubNavItem>
        <HeaderSubNavItem title="CPU">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </HeaderSubNavItem>
        <HeaderSubNavItem title="CPU">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </HeaderSubNavItem>
        <HeaderSubNavItem title="CPU">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </HeaderSubNavItem>
        <HeaderSubNavItem title="CPU">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </HeaderSubNavItem>
      </ul>
    </div>
  );
};

export default HeaderSubNav;
