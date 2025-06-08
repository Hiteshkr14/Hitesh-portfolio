import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleEducation = ({ education }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[280px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl p-6 shadow-lg bg-gradient-to-b from-[#222] to-[#111] hover:scale-105 transition-transform duration-300"
    >
      <h3 className="font-bold text-cyan text-xl">{education.degree}</h3>
      <h4 className="text-orange text-lg">{education.institution}</h4>
      <p className="text-lightGrey text-sm">{education.date}</p>
      <p className="mt-4 text-white">{education.details}</p>
    </motion.div>
  );
};

export default SingleEducation;
