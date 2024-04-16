import React from "react";

const BannerFooterImage = (props) => {
  return (
    <>
      <div className="w-[300px] h-[150px] shadow-xl rounded-2xl my-4 overflow-hidden">
        <img className="object-cover w-full h-full" src={props.src} alt="" />
      </div>
    </>
  );
};

export default BannerFooterImage;
