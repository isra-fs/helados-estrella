import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Title from "./Title";
const Products = () => {
  const images = [
    {
      mobile: "https://via.placeholder.com/100x150/000000/FFFFFF",
      desktop: "https://via.placeholder.com/200X250/000000/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/100x150/33FF57/FFFFFF",
      desktop: "https://via.placeholder.com/200X250/33FF57/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/100x150/3357FF/FFFFFF",
      desktop: "https://via.placeholder.com/200X250/3357FF/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/100x150/FFFF33/333333",
      desktop: "https://via.placeholder.com/200X250/FFFF33/333333",
    },
    {
      mobile: "https://via.placeholder.com/100x150/000000/FFFFFF",
      desktop: "https://via.placeholder.com/200X250/000000/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/100x150/33FF57/FFFFFF",
      desktop: "https://via.placeholder.com/200X250/33FF57/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/100x150/3357FF/FFFFFF",
      desktop: "https://via.placeholder.com/200X250/3357FF/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/100x150/FFFF33/333333",
      desktop: "https://via.placeholder.com/200X250/FFFF33/333333",
    },
  ];

  return (
    <div className="container mx-auto sm:mt-16 md:mt-32">
      <Title text="Las Favoritas" />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          500: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        // className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source srcSet={image.mobile} media="(max-width: 768px)" />
              <img src={image.desktop} alt={`Slide ${index + 1}`} />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
