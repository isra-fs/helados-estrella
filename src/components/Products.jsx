import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Title from "./Title";
const Products = () => {
  const images = [
    {
      mobile: "/helados-estrella/fav1.jpg",
      desktop: "/helados-estrella/fav1.jpg",
    },
    {
      mobile: "/helados-estrella/fav2.jpg",
      desktop: "/helados-estrella/fav2.jpg",
    },
    {
      mobile: "/helados-estrella/fav3.jpg",
      desktop: "/helados-estrella/fav3.jpg",
    },
    {
      mobile: "/helados-estrella/fav4.jpg",
      desktop: "/helados-estrella/fav4.jpg",
    },
    {
      mobile: "/helados-estrella/fav5.jpg",
      desktop: "/helados-estrella/fav5.jpg",
    },
    {
      mobile: "/helados-estrella/fav6.jpg",
      desktop: "/helados-estrella/fav6.jpg",
    },
    {
      mobile: "/helados-estrella/fav7.jpg",
      desktop: "/helados-estrella/fav7.jpg",
    },
    {
      mobile: "/helados-estrella/fav8.jpg",
      desktop: "/helados-estrella/fav8.jpg",
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
            slidesPerView: 3,
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
