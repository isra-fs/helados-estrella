export const OrderButton = ({ text, className }) => {
  return (
    <button
      className={`text-white mt-6 px-8 bg-custom-orange py-3 text-lg font-mulish rounded-full hover:bg-custom-beige hover:text-custom-red ${className}`}
    >
      {text}
    </button>
  );
};

export default OrderButton;
