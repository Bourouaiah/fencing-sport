import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { createdCompetetions } from "../../../data/index";

import ArabicCompetitionItem from "./ArabicCompetitionItem";

export default function ArabicCompetitions() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="px-[50px] mt-[250px]">
      <h1 className="text-3xl text-center sm:text-right sm:text-4xl text-special-green font-bold">
        مسابقات للمتابعة
      </h1>
      <div className="relative h-[400px] mt-[40px]">
        <Swiper
          style={{
            "--swiper-pagination-color": "#DC383E",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {createdCompetetions.map((item) => (
            <SwiperSlide key={item.id}>
              <ArabicCompetitionItem
                image={item.image}
                title={item.title}
                date={item.date}
                location={item.location}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
