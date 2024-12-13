import { OrderButton } from "./Buttons";
import AnimatedImage from "./AnimatedImage";
const FlavorCollection = () => {
  return (
    <div className="w-full flex sm:mt-16 md:mt-16 mt-32">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center pr-10 pl-10">
        <div className="text-left">
          <h1 className="sm:text-2xl md:text-4xl xl:text-6xl  leading-tight text-custom-red-title font-mulish">
            Colección
            <br />
            de <strong className="font-sansita">sabores</strong>
            <br />
            para cada <strong className="font-sansita">gusto</strong>
          </h1>
          <p className="text-base text-custom-gray mt-4">
            Cremosas · Light · Enchilositas
          </p>
          <OrderButton text="Ordenar"></OrderButton>
        </div>
      </div>

      {/* Div 2: Imagen */}
      <div className="w-1/2 flex justify-end items-center">
        <img
          src="flavor_info.jpg"
          alt="Colección de sabores"
          className="object-contain h-auto"
        />
      </div>
    </div>
  );
};

export default FlavorCollection;
