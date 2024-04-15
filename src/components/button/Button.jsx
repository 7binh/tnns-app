import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-primary rounded-full font-normal py-2 px-4 text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
