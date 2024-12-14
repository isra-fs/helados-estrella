import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com",
      icon: "fab fa-facebook-f",
      style: "text-4xl",
    },
    {
      href: "https://www.instagram.com",
      icon: "fab fa-instagram",
      style: "text-4xl",
    },
  ];

  const footerLinks = [
    { href: "#productos", text: "Productos" },
    { href: "#nosotros", text: "Nosotros" },
    { href: "#alianza", text: "Alianza" },
    { href: "#eventos", text: "Eventos" },
    { href: "#encuentranos", text: "Encuéntranos" },
    { href: "#contacto", text: "Contacto" },
  ];

  return (
    <footer className="mt-32">
      {/* Fondo rojo completo */}
      <div className="bg-custom-red-title w-full">
        <div className="flex flex-col md:flex-row items-center justify-center px-4 text-white py-8 space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src="/helados-estrella/logo_n.svg"
              alt="Logo"
              className="w-full h-auto max-w-[70%]"
            />
          </div>

          {/* Footer Links */}
          <div className="flex-1 flex justify-center">
            <FooterLinks links={footerLinks} />
          </div>

          {/* Social Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-4">
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="bg-custom-turquesa text-white py-4">
        <p className="text-center font-mulish text-lg">
          Copyright 2024. Helados Estrella Todos los derechos reservados
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
