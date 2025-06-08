import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCheckCircle } from "react-icons/fa";
import ResumeBtn from "./ResumeBtn";

const Text = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl sm:text-sm uppercase text-lightGrey flex flex-col gap-2"
      >
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-orange text-xl" /> Software Engineer
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-orange text-xl" /> MERN Stack Developer
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-orange text-xl" /> Problem Solver
        </div>
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase mt-4"
      >
        Hitesh <br className="sm:hidden md:block" />
        {"\u00A0"}{"\u00A0"}{"\u00A0"}Kumar
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        className="text-lg mt-4"
      >
        I am a passionate Software Engineer with a strong foundation in <br />
        MERN Stack (MongoDB, Express.js, React.js, and Node.js) development.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        className="mt-6 md:self-start sm:self-center"
      >
        <ResumeBtn />
      </motion.div>
    </div>
  );
};

export default Text;
