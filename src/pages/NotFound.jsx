import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mt-2">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-black hover:text-black/80"
        >
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
