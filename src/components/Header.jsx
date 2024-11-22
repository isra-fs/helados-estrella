import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LogoAndCart from "./LogoAndCart";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const socialLinks = [
    { href: "https://www.facebook.com", icon: "fab fa-facebook-f" },
    { href: "https://www.instagram.com", icon: "fab fa-instagram" },
  ];

  const linksBeforeLogo = [
    { href: "#home", text: "Productos" },
    { href: "#about", text: "Nosotros" },
    { href: "#services", text: "Alianza" },
  ];

  const linksAfterLogo = [
    { href: "#blog", text: "Encuéntranos" },
    { href: "#contact", text: "Eventos" },
    { href: "#faq", text: "Contacto" },
  ];

  return (
    <header className="bg-custom-red p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        {/* Enlaces sociales */}
        <div className="hidden md:flex mb-4 sm:mb-0">
          <SocialLinks links={socialLinks} />
        </div>

        {/* Enlaces de navegación antes del logo */}
        <div className="hidden md:flex space-x-6 mb-4 sm:mb-0">
          <NavLinks links={linksBeforeLogo} />
        </div>

        {/* Logo y botón de carrito */}
        <LogoAndCart toggleNav={nav} cartButton={() => setNav(!nav)} />

        {/* Enlaces de navegación después del logo */}
        <div className="hidden md:flex space-x-6 mb-4 sm:mb-0 items-center">
          <NavLinks links={linksAfterLogo} />

          {/* Botón de carrito de compras (desktop) */}
          <button
            type="button"
            className="flex items-center space-x-2 px-4 py-2 bg-custom-beige text-custom-red rounded-full hover:bg-gray-200"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Ordenar</span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <MobileMenu
        nav={nav}
        linksBeforeLogo={linksBeforeLogo}
        linksAfterLogo={linksAfterLogo}
        socialLinks={socialLinks}
      />
    </header>
  );
};
