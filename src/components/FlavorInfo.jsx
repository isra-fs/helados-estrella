import { OrderButton } from "../components/Buttons";
import Title from "./Title";
import AnimatedImage from "./AnimatedImage";

const FlavorInfo = () => {
  // Arreglo de los elementos con sus imágenes y subtítulos
  const items = [
    {
      imgSrc: "NC-Icon1.svg",
      alt: "Artesanalmente hecho en México",
      text: "Artesanalmente hecho en México",
    },
    {
      imgSrc: "NC-Icon2.svg",
      alt: "Colores y Sabores Naturales",
      text: "Colores y Sabores Naturales",
    },
    {
      imgSrc: "NC-Icon3.svg",
      alt: "Productos y Servicio de excelente calidad",
      text: "Productos y Servicio de excelente calidad",
    },
    {
      imgSrc: "NC-Icon4.svg",
      alt: "Entrega a domicilio",
      text: "Entrega a domicilio",
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <Title text="Nos complace" />

      <p className="text-lg text-center text-custom-gray mb-8 max-w-3xl mx-auto font-mulish">
        Llevar la esencia de los sabores mexicanos a los consumidores,
        transformados en deliciosos postres congelados.
      </p>

      <div className="flex flex-wrap justify-around items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[170px] min-w-[170px] w-full sm:w-1/2 md:w-1/4 mb-8"
          >
            <img
              src={item.imgSrc}
              alt={item.alt}
              className="object-cover rounded-full mb-2"
            />
            <p className="font-mulish text-custom-gray text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <AnimatedImage alt="Imagen 1" className="absolute right-0 w-32 z-50" />
      {/* <AnimatedImage alt="Imagen 1" className="absolute left-0 w-32 z-50" /> */}
      <div className="flex justify-center items-center mt-16">
        <OrderButton text="Conoce nuestro proceso" />
      </div>
    </div>
  );
};

export default FlavorInfo;
