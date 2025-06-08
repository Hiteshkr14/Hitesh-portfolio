import { motion } from "framer-motion";

const Advertisement = () => {
  return (
    <div className="w-full bg-white text-black uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 overflow-hidden flex items-center relative">
      {/* Top and Bottom Shadow Borders */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-black opacity-40 shadow-[0px_4px_10px_rgba(0,0,0,0.5)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-black opacity-40 shadow-[0px_-4px_10px_rgba(0,0,0,0.5)]"></div>

      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
      >
        <div className="flex gap-16">
          {/* Text with black shadow effect */}
          {[
            "Fast Learner",
            "Creative Thinking & UI/UX Awareness",
            "Team Player & Collaboration",
            "Strong Communication",
            "Critical Thinking & Problem-Solving",
            "Leadership & Mentorship",
            "Time Management & Deadline-Oriented",
            "Adaptability & Continuous Learning",
            "Attention to Detail",
          ].map((text, index) => (
            <p
              key={index}
              className="px-8 text-black font-bold drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]"
            >
              {text}
            </p>
          ))}

          {/* Duplicate for smooth looping */}
          {[
            "Fast Learner",
            "Creative Thinking & UI/UX Awareness",
            "Team Player & Collaboration",
            "Strong Communication",
            "Critical Thinking & Problem-Solving",
            "Leadership & Mentorship",
            "Time Management & Deadline-Oriented",
            "Adaptability & Continuous Learning",
            "Attention to Detail",
          ].map((text, index) => (
            <p
              key={`dup-${index}`}
              className="px-8 text-black font-bold drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]"
            >
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Advertisement;
