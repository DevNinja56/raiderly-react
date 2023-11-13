import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import Card from '../Home/SliderCard';

const HomeSlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper h-full w-full"
      breakpoints={{
        0: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.3,
        },
        1280: {
          slidesPerView: 4,
        }
      }}
    >
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex justify-center">
        <Card img="/images/Home/sliderUser1.svg" />
      </SwiperSlide>
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex items-center justify-center">
        <Card img="/images/Home/sliderUser2.svg" />
      </SwiperSlide>
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex justify-center">
        <Card img="/images/Home/sliderUser3.svg" />
      </SwiperSlide>
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex items-center justify-center">
        <Card img="/images/Home/sliderUser4.svg" />
      </SwiperSlide>
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex justify-center">
        <Card img="/images/Home/sliderUser3.svg" />
      </SwiperSlide>
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex items-center justify-center">
        <Card img="/images/Home/sliderUser1.svg" />
      </SwiperSlide>
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex justify-center">
        <Card img="/images/Home/sliderUser4.svg" />
      </SwiperSlide>
      <SwiperSlide className="h-vh60 2xl:h-vh50 flex items-center justify-center">
        <Card img="/images/Home/sliderUser2.svg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
