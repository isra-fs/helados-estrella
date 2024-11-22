const FooterLinks = ({ links }) => {
  return (
    <ul className="space-y-2 text-center font-mulish max-w-[100%] text-xl">
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
