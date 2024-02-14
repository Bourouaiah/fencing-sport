import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { news } from "../../../data";

import NewsItem from "./NewsItem";

export default function News() {
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
    <section>
      <div className="mt-[150px] sm:mt-[250px] md:mt-[100px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#337D53"
            fill-opacity="1"
            d="M0,96L120,85.3C240,75,480,53,720,58.7C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="px-[50px] translate-y-[-50px] lg:translate-y-[-150px]">
        <h1 className="text-3xl text-center sm:text-left sm:text-4xl text-special-green font-bold">
          News
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
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsItem
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  type={item.type}
                  id={item.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
