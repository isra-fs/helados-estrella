import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Title from "./Title";
import { useState, useEffect } from 'react';

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

  const [imageHeight, setImageHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageHeight(200); // Para móviles
      } else {
        setImageHeight(250); // Para pantallas grandes
      }
    };

    handleResize(); // Ajusta la altura al inicio
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto sm:mt-16 md:mt-32">
      <Title text="Las Favoritas" />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 2, // 3 elementos en móviles
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 3, // 3 elementos en dispositivos de tamaño pequeño a mediano
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4, // 4 elementos en pantallas medianas (tabletas)
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5, // 6 elementos en pantallas grandes
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source srcSet={image.mobile} media="(max-width: 768px)" />
              <img
                src={image.desktop}
                alt={`Slide ${index + 1}`}
                className="rounded-xl object-cover"
                style={{ height: `${imageHeight}px`, width: "100%" }}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
