const SocialLinks = ({ links }) => (
  <div className="flex space-x-4">
    {links.map((social, index) => (
      <a
        key={index}
        href={social.href}
        className={`text-white hover:text-gray-400 text-2xl ${social.style}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={social.icon}></i>
      </a>
    ))}
  </div>
);
export default SocialLinks;
