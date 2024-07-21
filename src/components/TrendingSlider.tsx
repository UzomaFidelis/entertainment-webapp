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

const TrendingSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
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
          <div className="slider-item relative">
            <Image
              src={movie.thumbnail.small}
              alt=""
              className="slider-img"
              fill
            />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <button className="absolute z-1 top-2 right-2 w-8 h-8 flex justify-center items-center bg-night/40 rounded-full">
                <BookmarkIcon />
              </button>
              <div className="absolute left-0 right-0 bottom-0 text-white px-4 pb-[0.9rem]">
                <div className="mt-[0.38rem] flex items-center gap-[0.57rem]">
                  <p className="text-[0.78rem] font-light tracking-[-0.022em] flex items-center">
                    <span className="mr-2">{movie.year}</span>
                    <span className="h-[0.15rem] w-[0.15rem] rounded-full bg-white"></span>
                  </p>
                  <span>
                    <MoviesIcon widthClass="w-[0.74rem]" />
                  </span>
                  <span>
                    <p className="text-[0.78rem] flex items-center">
                      <span className="mr-2">{movie.type}</span>
                      <span className="h-[0.1rem] w-[0.1rem] rounded-full bg-white"></span>
                    </p>
                  </span>
                  <span>
                    <p className="text-[0.6rem] uppercase">{movie.rating}</p>
                  </span>
                </div>
                <p className="text-[0.9rem] tracking-wide capitalize">
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
