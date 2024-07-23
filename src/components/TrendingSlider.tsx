"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "@/styles/trendingSlider.css";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import BookmarkIcon from "./icons/BookmarkIcon";
import MoviesIcon from "./icons/MoviesIcon";
import { trendingMovies } from "@/lib/data";
import { useEffect, useState } from "react";

const TrendingSlider = () => {
  const [sliderGap, setSliderGap] = useState(getGap());

  useEffect(() => {
    const handleSliderGapChange = () => {
      setSliderGap(getGap());
    };

    window.addEventListener("resize", handleSliderGapChange);

    return () => {
      window.removeEventListener("resize", handleSliderGapChange);
    };
  }, []);

  function getGap() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return 16;
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      return 38;
    } else {
      return 39;
    }
  }

  return (
    <Swiper
      spaceBetween={sliderGap}
      slidesPerView="auto"
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
      freeMode={true}
      // loop={true}
      modules={[FreeMode, Autoplay]}
    >
      {trendingMovies.map((movie, idx) => (
        <SwiperSlide key={idx}>
          <div className="slider-item relative h-[8.7rem] rounded-[9px] overflow-hidden md:h-[14.37rem]">
            <Image
              src={movie.sliderThumbnail.small}
              alt=""
              className="slider-img md:hidden"
              fill
              sizes=""
            />
            <Image
              src={movie.sliderThumbnail.large}
              alt=""
              className="slider-img hidden md:block"
              fill
              sizes=""
            />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <button className="absolute z-1 top-2 right-2 w-8 h-8 flex justify-center items-center bg-night/40 rounded-full md:right-7 md:top-4">
                <BookmarkIcon />
              </button>
              <div className="absolute left-0 right-0 bottom-0 text-white px-4 pb-[0.9rem] md:pb-[1.3rem] md:px-6">
                <div className="mt-[0.38rem] flex items-center gap-[0.57rem]">
                  <p className="text-[0.78rem] font-light tracking-[-0.022em] flex items-center md:text-[0.9rem] md:tracking-[0.019em]">
                    <span className="mr-2">{movie.year}</span>
                    <span className="h-[0.15rem] w-[0.15rem] rounded-full bg-white md:h-[0.19rem] md:w-[0.19rem]"></span>
                  </p>
                  <span>
                    <MoviesIcon widthClass="w-[0.74rem]" />
                  </span>
                  <span>
                    <p className="text-[0.78rem] font-light flex items-center md:text-[0.9rem]">
                      <span className="mr-2">{movie.type}</span>
                      <span className="h-[0.1rem] w-[0.1rem] rounded-full bg-white md:h-[0.19rem] md:w-[0.19rem]"></span>
                    </p>
                  </span>
                  <span>
                    <p className="text-[0.6rem] font-light uppercase md:text-[0.9rem]">
                      {movie.rating}
                    </p>
                  </span>
                </div>
                <p className="text-[0.9rem] tracking-wide capitalize md:text-[1.5rem] md:tracking-[0]">
                  {movie.name}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrendingSlider;
