import React from "react";

const HeaderSearchItem = (props) => {
  return (
    <div className="flex item-center hover:shadow-xl border border-transparent hover:border-lightGray rounded-xl duration-500">
      <div className="w-14 h-14">
        <img
          className="object-cover w-full h-full rounded-xl shadow-xl border-lightGray border "
          src={props.url}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center ml-3">
        <h3>{props.name}</h3>
        <p className="text-primary font-semibold text-sm">{props.price} $</p>
      </div>
    </div>
  );
};

export default HeaderSearchItem;
