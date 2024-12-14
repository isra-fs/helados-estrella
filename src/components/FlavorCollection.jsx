import { OrderButton } from "./Buttons";

const FlavorCollection = () => {
  return (
    <div className="w-full mt-32 flex flex-col-reverse md:flex-row">
      {/* Div 1: Texto */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start px-4 py-8 md:pr-10 md:pl-10">
        <div className="text-left w-[80%] md:w-full">
          <h1 className="sm:text-3xl md:text-4xl xl:text-6xl text-lg leading-tight text-custom-red-title font-mulish">
            Colección
            <br />
            de <strong className="font-sansita">sabores</strong>
            <br />
            para cada <strong className="font-sansita">gusto</strong>
          </h1>
          <p className="text-base sm:text-lg text-custom-gray mt-4">
            Cremosas · Light · Enchilositas
          </p>
          <OrderButton text="Ordenar" />
        </div>
      </div>

      {/* Div 2: Imagen */}
      <div className="w-full md:w-1/2 flex justify-end items-center">
        <img
          src="flavor_info.jpg"
          alt="Colección de sabores"
          className="object-contain h-auto w-[70%] md:w-[80%]"
        />
      </div>
    </div>
  );
};

export default FlavorCollection;
