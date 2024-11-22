import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const image = {
    desktop: "/Footer-background.svg",
    mobile: "/Footer-background.svg",
  };

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
      <div className="relative">
        <picture>
          <source srcSet={image.mobile} media="(max-width: 768px)" />
          <img
            src={image.desktop}
            alt="Footer Background"
            className="w-full h-[80%]"
          />
        </picture>

        <div className="absolute inset-0 flex items-end justify-between px-4 text-white mb-4">
          <div className="flex-1 basis-[30%] flex justify-end mb-8">
            <img
              src="/logo_n.svg"
              alt="Logo"
              className="w-full h-auto max-w-[85%]"
            />
          </div>

          <div className="flex-1 basis-[50%] flex justify-left ml-64">
            <FooterLinks links={footerLinks} />
          </div>

          <div className="flex-1 basis-[20%] flex justify-center mb-8">
            <div className="flex space-x-4">
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-turquesa text-white py-4">
        <p className="text-center font-mulish text-2xl">
          Copyright 2024. Helados Estrella Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
