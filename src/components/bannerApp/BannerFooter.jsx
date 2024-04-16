import React from "react";
import BannerFooterImage from "./BannerFooterImage";

const BannerFooter = () => {
  return (
    <div className="grid grid-cols-4 items-center justify-between gap-2">
      <BannerFooterImage src="https://theme.hstatic.net/200000420363/1001195159/14/banner_home_1_master.jpg?v=1117"></BannerFooterImage>
      <BannerFooterImage src="https://theme.hstatic.net/200000420363/1001195159/14/banner_home_2_master.jpg?v=1117"></BannerFooterImage>
      <BannerFooterImage src="https://theme.hstatic.net/200000420363/1001195159/14/banner_home_3_master.jpg?v=1117"></BannerFooterImage>
      <BannerFooterImage src="https://theme.hstatic.net/200000420363/1001195159/14/banner_home_4_master.jpg?v=1117"></BannerFooterImage>
    </div>
  );
};

export default BannerFooter;
