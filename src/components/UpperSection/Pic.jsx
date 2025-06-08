import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Pic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      className="relative h-full flex flex-col items-center justify-center my-[40px]"
    >
      <div className="absolute w-[370px] h-[370px] rounded-xl border-4 border-cyan-500 animate-[spin_10s_linear_infinite] -z-10"></div>

      <img
        src="/images/1.jpg"
        alt="Hitesh Kumar"
        className="w-[350px] h-[350px] object-cover rounded-xl"
      />
    </motion.div>
  );
};

export default Pic;
