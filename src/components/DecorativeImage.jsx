import { useState, useEffect, useRef } from "react";

// Componente de Imagen con efecto de aparición
export default function AnimatedImage({ src, alt, className, style }) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  // Detectar cuando la imagen entra en la vista del usuario
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // La imagen está en la vista, entonces aparece
        }
      },
      {
        threshold: 0.5, // Se activa cuando el 50% de la imagen es visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current); // Iniciar la observación
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current); // Limpiar la observación cuando el componente se desmonte
      }
    };
  }, []);

  return (
    <div ref={imageRef} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-[150px] object-cover transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={style}
      />
    </div>
  );
}
