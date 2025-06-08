import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const EducationText = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="text-center my-8"
    >
      <motion.h2
        variants={textVariants}
        className="text-4xl font-bold text-orange tracking-wide"
      >
        My Education Journey 🎓
      </motion.h2>
      <motion.p
        variants={textVariants}
        className="text-lightGrey mt-2 text-lg"
      >
        A glimpse into my academic background and achievements.
      </motion.p>
    </motion.div>
  );
};

export default EducationText;
