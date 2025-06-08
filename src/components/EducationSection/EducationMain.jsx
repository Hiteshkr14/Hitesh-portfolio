import AllEducation from "./AllEducation";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const EducationMain = () => {
  return (
    <div id="education" className="max-w-[1200px] mx-auto px-4 mt-32">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className="text-center text-cyan font-bold text-4xl mb-4 mt-20">
          My Education
        </h2>
        <p className="text-center text-white text-xl font-medium mb-6">
          Knowledge is the key to unlocking endless possibilities.
        </p>
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllEducation />
    </div>
  );
};

export default EducationMain;
