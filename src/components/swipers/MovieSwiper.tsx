import { FC } from "react";
import "./swiper.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { filmsData } from "../../data/data";

const MovieSwiper: FC = () => {
  return (
    <div className="container">
      <Swiper
        className="movie__swiper"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {filmsData.map((movie) => (
          <SwiperSlide key={movie.id} className="movie__swiper-item">
            <img
              src={movie.img}
              alt={movie.title}
              className="movie__swiper-item__img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSwiper;
