import { motion } from "framer-motion";

const SkillsText = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-[150px] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} // Ensures it animates every time it's in view
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
      }}
    >
      <motion.h2
        className="text-6xl text-cyan mb-12"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-5xl"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
        }}
      >
        I not only work with these technologies but excel in using them with best practices to deliver high-quality results. <br />I have been working with all these skills to build 
        my portfolio projects.
      </motion.p>
    </motion.div>
  );
};

export default SkillsText;
