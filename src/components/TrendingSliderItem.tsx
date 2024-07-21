"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { ShowInfo } from "@/lib/types";

const TrendingSliderItem = ({ imgUrl, name, year, rating, type }: ShowInfo) => {
  return (
    <SwiperSlide>
      <div className="slider-item">
        <Image
          src={imgUrl}
          alt=""
          className="slider-img"
          width={300}
          height={150}
        />
      </div>
    </SwiperSlide>
  );
};

export default TrendingSliderItem;
