import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Education", section: "education" },  // Education Section
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-4 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group relative">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white px-3 py-2 transition-all duration-500 relative z-10 
                         group-hover:scale-110 group-hover:text-black"
            >
              {link.link}
            </Link>
            {/* Background Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 
                            group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] rounded-md transition-all duration-500 
                            z-0"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
