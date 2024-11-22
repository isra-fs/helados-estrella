import Title from "./Title";
const Ticker = () => {
  const images = [
    "/sponsor_1.svg",
    "/sponsor_2.svg",
    "/sponsor_3.svg",
    "/sponsor_4.svg",
  ];

  return (
    <div className="ticker-wrap" style={{ "--ticker-duration": "50s" }}>
      <Title text="Encuentranos en:" />
      <div className="ticker">
        {images.map((item, index) => (
          <div key={index} className="ticker__item">
            <img
              src={item}
              alt={`Imagen ${index + 1}`}
              className="w-44 h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
