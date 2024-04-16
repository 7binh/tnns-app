import React from "react";

const ProductHeader = (props) => {
  return (
    <div className="bg-primary p-2 mb-4 mt-10 rounded-2xl text-center">
      <h2 className="inline-block font-bold  text-3xl ml uppercase text-darkGray shadow-lg bg-white py-2 px-10 rounded-xl  ">
        {props.children}
      </h2>
    </div>
  );
};

export default ProductHeader;
