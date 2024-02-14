import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { team } from "../../../data";

import TeamItem from "./TeamItem";

export default function ArabicTeam() {
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
    <section className="px-[50px] mt-[100px] sm:mt-[250px] md:mt-[70px]">
      <h3 className="text-special-red text-center md:text-right text-md mb-[15px] font-bold uppercase">الفريق الجزائري</h3>
      <h1 className="text-3xl text-center md:text-right sm:text-4xl text-special-green font-bold">
        رياضيينا
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
          {team.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamItem id={item.id} name={item.name} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
