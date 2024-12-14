import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Title from "./Title";
import { useState, useEffect } from 'react';

const Products = () => {
  const images = [
           { mobile: "/helados-estrella/fav9.jpg", desktop: "/helados-estrella/fav9.jpg" },
    { mobile: "/helados-estrella/fav10.jpg", desktop: "/helados-estrella/fav10.jpg" },
    { mobile: "/helados-estrella/fav11.jpg", desktop: "/helados-estrella/fav11.jpg" },
    { mobile: "/helados-estrella/fav12.jpg", desktop: "/helados-estrella/fav12.jpg" },
     { mobile: "/helados-estrella/fav13.jpg", desktop: "/helados-estrella/fav13.jpg" },
    { mobile: "/helados-estrella/fav1.jpg", desktop: "/helados-estrella/fav1.jpg" },
    { mobile: "/helados-estrella/fav2.jpg", desktop: "/helados-estrella/fav2.jpg" },
    { mobile: "/helados-estrella/fav3.jpg", desktop: "/helados-estrella/fav3.jpg" },
    { mobile: "/helados-estrella/fav4.jpg", desktop: "/helados-estrella/fav4.jpg" },
    { mobile: "/helados-estrella/fav5.jpg", desktop: "/helados-estrella/fav5.jpg" },
    { mobile: "/helados-estrella/fav6.jpg", desktop: "/helados-estrella/fav6.jpg" },
    { mobile: "/helados-estrella/fav7.jpg", desktop: "/helados-estrella/fav7.jpg" },
    { mobile: "/helados-estrella/fav8.jpg", desktop: "/helados-estrella/fav8.jpg" },

  ];

  const [imageHeight, setImageHeight] = useState(300);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setImageHeight(isMobileView ? 200 : 250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: !isMobile,
    breakpoints: {
      300: { slidesPerView: 2, spaceBetween: 20 },
      500: { slidesPerView: 3, spaceBetween: 5 },
      768: { slidesPerView: 4, spaceBetween: 30 },
      1024: { slidesPerView: 5, spaceBetween: 20 },
    },
    modules: [Navigation],
  };

const renderSlides = (startIndex = 0) => {
  return images.slice(startIndex).map((image, index) => (
    <SwiperSlide key={index}>
      <picture>
        <source srcSet={image.mobile} media="(max-width: 768px)" />
        <img
          src={image.desktop}
          alt={`Slide ${index + 1}`}
          className="rounded-xl object-cover"
          style={{
            height: `${imageHeight}px`,
            width: isMobile ? 'auto' : '100%',  // Ajusta el ancho en móviles
            margin: isMobile ? '0 10px' : '0 auto',  // Añade márgenes en móvil
          }}
        />
      </picture>
    </SwiperSlide>
  ));
};

  return (
    <div className="container mx-auto sm:mt-16 md:mt-32">
      <Title text="Las Favoritas" />

      {/* Mostrar un Swiper solo para dispositivos móviles */}
      <Swiper style={{ marginBottom: '40px' }} {...swiperSettings}>
        {renderSlides()}
      </Swiper>

      {/* Mostrar un segundo Swiper solo en dispositivos móviles */}
      {isMobile && (
        <Swiper  {...swiperSettings}>
          {renderSlides(Math.ceil(images.length / 2))}  {/* Segundo Swiper con las últimas imágenes */}
        </Swiper>
      )}
    </div>
  );
};

export default Products;
