import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-4 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      {/* Image on Left */}
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeImage />
      </motion.div>

      {/* Text & Button on Right - Moved further to the right */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="ml-24" // Moved the text more to the right (double of ml-12)
      >
        <AboutMeText />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
