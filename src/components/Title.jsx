export const Title = ({ text, className }) => {
  return (
    <h1
      className={`text-3xl font-mulish text-center text-custom-red-title mb-4 pt-8 pb-8 ${className}`}
    >
      {text}
    </h1>
  );
};

export default Title;
