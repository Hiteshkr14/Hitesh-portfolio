import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const SingleSkill = ({ imgSvg, text }) => {
  const controls = useAnimation();
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center transition-all duration-500 cursor-pointer"
      animate={controls}
      whileHover={() => {
        setHovering(true);
        controls.start({
          rotate: 360000,
          transition: { duration: 10, repeat: Infinity, ease: "linear" },
        });
      }}
      onHoverEnd={() => {
        setHovering(false);
        controls.start({
          rotate: 0,
          transition: { duration: 2, ease: "easeOut" },
        });
      }}
    >
      <div className="bg-gray-800 text-cyan h-[90px] w-[90px] flex items-center justify-center rounded-full border-4 border-orange shadow-lg text-5xl">
        {imgSvg}
      </div>
      <p className="text-white font-bold mt-4">{text}</p>
    </motion.div>
  );
};

export default SingleSkill;
