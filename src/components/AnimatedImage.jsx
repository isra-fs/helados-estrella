import { useEffect, useState } from "react";

const AnimatedImage = ({ alt, className }) => {
  // Arreglo de imágenes dentro del componente
  const imagesArray = [
    "/helados-estrella/Limon.svg",
    "/helados-estrella/Fresas.svg",
    "/helados-estrella/Flor.svg",
    "/helados-estrella/Coco.svg",
  ];

  // Elegir una imagen aleatoria del arreglo
  const [src, setSrc] = useState("");

  useEffect(() => {
    const randomImage =
      imagesArray[Math.floor(Math.random() * imagesArray.length)];
    setSrc(randomImage);
  }, []); // Solo se ejecuta una vez al montar el componente

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Si el elemento está en la vista, cambiamos la visibilidad
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.querySelector(`[data-src="${src}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [src]); // Solo cambia cuando `src` cambia

  return (
    <img
      data-src={src}
      src={src}
      alt={alt}
      className={`transition-opacity transform duration-[1500ms] ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      } ${className}`}
    />
  );
};

export default AnimatedImage;
