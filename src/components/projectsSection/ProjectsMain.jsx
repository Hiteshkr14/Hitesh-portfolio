import { motion } from "framer-motion";

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 text-center text-white mt-28">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-6xl text-cyan mb-10"
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        className="text-xl mb-10"
      >
        Yet To Be Upload
      </motion.p>
    </div>
  );
};

export default ProjectsMain;
