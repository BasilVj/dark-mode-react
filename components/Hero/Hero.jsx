"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerData } from "@/constants";
import "swiper/css";
import "swiper/css/navigation";
import "./Hero.css";
import { Navigation } from "swiper/modules";

const Hero = ({ darkMode }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Initial screen width value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldShowNavigation = screenWidth >= 850;

  return (
    <div className={darkMode ? "app__hero-dark" : "app__hero"}>
      <Swiper
        navigation={shouldShowNavigation}
        modules={[Navigation]}
        className="mySwiper"
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="slide-content">
              <div className={darkMode ? "text-dark" : "text"}>
                {banner.text}
              </div>
              {banner.button && (
                <a
                  href={`#${banner.link}`}
                  className={darkMode ? "dark-btn" : "btn"}
                >
                  {banner.btn_name}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
