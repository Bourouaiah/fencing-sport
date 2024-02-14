import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";

import { partners } from "../../../data/index";

export default function ArabicPartners() {
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
        <h2 className="text-1xl text-center sm:text-right sm:text-2xl text-special-red font-semibold text-2xl mb-[20px]">الرعاة</h2>
      <h1 className="text-3xl text-center sm:text-right sm:text-5xl text-special-green font-bold">
        من يدعمنا ؟
      </h1>
      <div className="relative mt-[40px]">
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
          modules={[FreeMode]}
          className="mySwiper"
        >
          {partners.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[250px] h-[250px] flex items-center justify-center">
                <img
                  className="object-cover object-top"
                  src={item.image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
