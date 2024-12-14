const FooterLinks = ({ links, className }) => {
  return (
    <ul className={`flex flex-col space-y-2 ${className}`}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:underline">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
