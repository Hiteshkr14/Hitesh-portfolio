import { motion } from "framer-motion";

const SingleProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex w-full items-center justify-center text-xl text-white"
    >
      Yet To Be Upload
    </motion.div>
  );
};

export default SingleProject;
