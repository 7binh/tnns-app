import React from "react";

const ButtonSecondary = (props) => {
  return (
    <button
      className={`border-primary border rounded-full font-normal py-2 px-4 text-primary ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonSecondary;
