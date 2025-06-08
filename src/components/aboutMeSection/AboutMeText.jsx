import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Myself Hitesh Kumar, a Software Engineer and MERN Stack Developer with a passion for coding and continuous learning.
        I specialize in building scalable web applications using modern technologies, helping businesses and individuals bring their ideas to life.
        My goal is to grow in my domain, stay ahead in the ever-evolving tech industry, and contribute to innovative solutions.
        I also enjoy sharing knowledge, mentoring aspiring developers, and continuously improving my skills to achieve career growth.
      </p>

      {/* Styled Button with Zoom Effect */}
      <button className="group border-2 border-white text-white shadow-md shadow-black rounded-full py-2 px-6 text-lg flex gap-2 items-center mt-10 transition-all duration-500 cursor-pointer md:self-start sm:self-center 
        hover:bg-white hover:text-black hover:scale-110 hover:shadow-xl hover:shadow-black">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer transition-all duration-500 group-hover:text-black"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
