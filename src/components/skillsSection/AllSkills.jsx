import { motion } from "framer-motion";
import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiDjango, SiSqlite, SiBootstrap, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri"; // TailwindCSS
import { fadeIn } from "../../framerMotion/variants"; // Ensure fadeIn is imported correctly

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "Bootstrap", icon: SiBootstrap },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Node.js", icon: FaNode },
  { skill: "Express.js", icon: SiExpress },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: FaPython },
  { skill: "Django", icon: SiDjango },
  { skill: "SQL", icon: SiSqlite },
  { skill: "Git", icon: FaGithub },
];

const AllSkills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10 bg-gray-900 py-10">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", `0.${index}`)} // Ensure fadeIn is defined correctly
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          key={index}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
