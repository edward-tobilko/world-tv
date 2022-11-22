import "./swiper.scss";

import { useGetTvShowImagesQuery } from "../../api/movieAPI";
import Error from "../error/Error";
import Loader from "../loader/Loader";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

const TvShowsSwiper = () => {
  const { data, isFetching, isError } = useGetTvShowImagesQuery([]);

  if (isFetching) return <Loader />;
  if (isError) return <Error />;

  return (
    <Swiper
      className="tvshows__swiper"
      modules={[Autoplay, EffectCoverflow]}
      loop={true}
      slidesPerView="auto"
      effect="coverflow"
      grabCursor={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      centeredSlides={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
    >
      {data?.map((image) => (
        <SwiperSlide key={image.id} className="tvshows__swiper-item">
          <img
            src={image?.url}
            alt={image?.caption}
            className="tvshows__swiper-item__img"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TvShowsSwiper;
