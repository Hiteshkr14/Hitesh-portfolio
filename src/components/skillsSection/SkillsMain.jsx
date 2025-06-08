import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills" className="relative overflow-hidden">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative">
        {/* Animated Skills Text */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Ensure only one instance of the image appears */}
        <div className="mt-20 sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="mt-20 sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
