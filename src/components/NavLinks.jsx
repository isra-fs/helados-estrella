const NavLinks = ({ links }) => (
  <div className="flex space-x-6">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="text-white hover:text-custom-beige text-lg font-mulish"
      >
        {link.text}
      </a>
    ))}
  </div>
);

export default NavLinks;
