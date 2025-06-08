import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <div className="px-4">
      {/* White horizontal line with extra space below */}
      <div className="w-full h-[1px] bg-white mt-24 mb-8"></div>

      <div className="md:flex justify-between max-w-[1200px] mx-auto sm:hidden">
        {/* Name with Cool Emoji 😎 */}
        <p className="text-3xl text-white flex items-center gap-2">
          Hitesh Kumar <span className="text-4xl">😎</span>
        </p>

        {/* Footer Links with '|' Separator (Equal Spacing) */}
        <ul className="flex items-center text-white text-xl">
          {footerLinks.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-4 text-gray-300">|</span>}
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-gray-300 transition-all duration-500 cursor-pointer px-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright Text in White */}
      <p className="max-w-[1200px] mx-auto text-right mt-8 mb-12 text-sm text-white">
        © 2025 Hitesh Kumar | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
