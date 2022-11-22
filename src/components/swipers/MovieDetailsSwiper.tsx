// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const MovieDetailsSwiper = ({ images }: any) => {
  return (
    <Swiper
      className="movie__details-swiper"
      modules={[Autoplay]}
      loop
      spaceBetween={30}
      centeredSlides
      autoplay={{ delay: 2, disableOnInteraction: true }}
      slidesPerView={7}
      freeMode
      speed={4000}
    >
      {images?.map((image: any) => (
        <SwiperSlide key={image?.id} className="movie__details-swiper__item">
          {image?.url ? (
            <img src={image?.url} alt={image?.caption} />
          ) : (
            <img src={image?.relatedNames?.image?.url} alt={image?.caption} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieDetailsSwiper;
