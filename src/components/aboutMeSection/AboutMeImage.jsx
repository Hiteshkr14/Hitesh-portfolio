import { motion } from "framer-motion";

const AboutMeImage = () => {
  return (
    <motion.div 
      className="relative w-[250px] h-[350px] flex justify-center items-center overflow-hidden"
      initial={{ rotate: -15 }}
      animate={{ rotate: [15, -15, 15] }} // Swings like a pendulum
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth, continuous motion
    >
      {/* Image */}
      <img 
        src="/images/3.jpg" 
        alt="Hitesh Kumar" 
        className="w-full h-full object-cover rounded-[20px]"
      />
    </motion.div>
  );
};

export default AboutMeImage;
