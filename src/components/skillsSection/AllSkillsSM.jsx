import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiDjango, SiSqlite, SiBootstrap, SiExpress } from "react-icons/si"; 
import { RiTailwindCssFill } from "react-icons/ri"; // Correct import for TailwindCSS

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "Bootstrap", icon: SiBootstrap },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "TailwindCSS", icon: RiTailwindCssFill }, // Correct import for TailwindCSS
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Node.js", icon: FaNode },
  { skill: "Express.js", icon: SiExpress }, // Correct import for Express.js
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: FaPython },
  { skill: "Django", icon: SiDjango },
  { skill: "SQL", icon: SiSqlite },
  { skill: "Git", icon: FaGithub },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 bg-gray-900 py-12">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.3, rotate: 10 }}
        >
          <item.icon className="text-7xl text-orange animate-bounce" />
          <p className="text-center mt-4 text-white">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
