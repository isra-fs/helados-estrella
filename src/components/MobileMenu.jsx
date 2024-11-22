const MobileMenu = ({ nav, linksBeforeLogo, linksAfterLogo, socialLinks }) => (
  <div
    className={`md:hidden absolute top-[96px] left-0 right-0 bg-custom-red text-white p-4 z-20 ${
      !nav && "hidden"
    }`}
    id="mobile-menu"
  >
    <div className="flex flex-col space-y-4">
      {linksBeforeLogo.concat(linksAfterLogo).map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="font-sans text-white hover:text-custom-beige font-bold text-lg"
        >
          {link.text}
        </a>
      ))}

      <div className="flex justify-end space-x-4 mt-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="text-white hover:text-gray-400 text-2xl font-mulish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  </div>
);
export default MobileMenu;
