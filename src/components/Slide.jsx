import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AnimatedImage from "./AnimatedImage";
import "../App.css";

export default function Slide() {
  const [imageHeight, setImageHeight] = useState(0);

  const images = [
    {
      mobile: '/helados-estrella/slide_m1.jpg',
      desktop: '/helados-estrella/Slide1.svg',
    },
    {
      mobile: '/helados-estrella/slide_m2.jpg',
      desktop: '/helados-estrella/Slide3.jpg',
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
          delay: 10000,
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
   {/* <AnimatedImage
  alt="Imagen 1"
  className="absolute left-0 bottom-16 sm:bottom-40 md:bottom-40 w-32 z-50"
/> */}
    </>
  );
}
