// Componente para el logo y el carrito
const LogoAndCart = ({ toggleNav, cartButton }) => (
  <div className="flex justify-between items-center w-full md:w-auto relative">
    {/* Botón de carrito de compras (mobile) */}
    <button
      type="button"
      className="md:hidden text-custom-red hover:text-custom-red bg-white text-custom-red hover:bg-white  rounded-full p-2 absolute left-0"
    >
      <i className="fas fa-shopping-cart text-lg"></i>
    </button>

    {/* Logo (centrado en móvil) */}
    <div className="flex-1 flex justify-center">
      <img
        src="/logo_n.svg"
        alt="Logo de la empresa"
        className="h-auto max-h-16 w-full"
      />
    </div>

    {/* Menú hamburguesa */}
    <div className="md:hidden flex items-center absolute right-0">
      <button
        type="button"
        className="inline-flex items-center p-2 text-custom-red rounded-full bg-white text-2xl"
        aria-controls="mobile-menu"
        aria-expanded={toggleNav}
        onClick={cartButton}
      >
        <span className="sr-only">Abrir menú</span>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  </div>
);
export default LogoAndCart;
