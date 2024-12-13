import Title from "./Title";
const Ticker = () => {
  const images = [
    "/helados-estrella/sponsor_1.svg",
    "/helados-estrella/sponsor_2.svg",
    "/helados-estrella/sponsor_3.svg",
    "/helados-estrella/sponsor_4.svg",
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
