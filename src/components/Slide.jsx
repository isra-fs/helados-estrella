import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AnimatedImage from "./AnimatedImage";
import "../App.css";

export default function Slide() {
  const [imageHeight, setImageHeight] = useState(0);

  const images = [
    {
      mobile: "https://via.placeholder.com/768x400/000000/FFFFFF",
      desktop: "https://via.placeholder.com/1920x1080/000000/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/768x400/33FF57/FFFFFF",
      desktop: "https://via.placeholder.com/1920x1080/33FF57/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/768x400/3357FF/FFFFFF",
      desktop: "https://via.placeholder.com/1920x1080/3357FF/FFFFFF",
    },
    {
      mobile: "https://via.placeholder.com/768x400/FFFF33/333333",
      desktop: "https://via.placeholder.com/1920x1080/FFFF33/333333",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const headerHeight = 100;
      const screenHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setImageHeight(screenHeight * 0.7);
      } else {
        setImageHeight(screenHeight - headerHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source srcSet={image.mobile} media="(max-width: 768px)" />
              <img
                src={image.desktop}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover"
                style={{ height: `${imageHeight}px` }}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimatedImage
        alt="Imagen 1"
        className="absolute left-0 bottom-8 w-64 z-50"
      />
    </>
  );
}
