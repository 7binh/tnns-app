import React from "react";

const HeaderSubNavItem = (props) => {
  return (
    <div>
      <li>
        <h5 className="font-bold">{props.title}</h5>
        <div>{props.children}</div>
      </li>
    </div>
  );
};

export default HeaderSubNavItem;
