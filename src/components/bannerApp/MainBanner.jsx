import React, { useEffect, useRef, useState } from "react";
// import data from picture slider JS
import { PictureSlider } from "./PictureSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? PictureSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isFirstSlide = currentIndex === PictureSlider.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);
  return (
    <div className="w-full h-[570px] mt-6 rounded-3xl relative group shadow-sm">
      <div
        style={{ backgroundImage: `url(${PictureSlider[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <IoIosArrowBack onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <IoIosArrowForward onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default MainBanner;
