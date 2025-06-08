import SingleEducation from "./SingleEducation";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const educations = [
  {
    degree: "Aircraft Maintenance Engineering",
    institution: "School for Aircraft Maintenance Engineering",
    date: "2017 - 2020",
    details: "Comprehensive training in aircraft systems, maintenance procedures, safety regulations, and hands-on practical experience in troubleshooting and repairing aircraft components.",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "IGNOU",
    date: "2020 - 2023",
    details: "Focused on core computer science subjects including programming, database management, software development, and networking, with projects emphasizing real-world applications.",
  },
  {
    degree: "Master of Computer Application",
    institution: "GGSIPU (USICT)",
    date: "2023 - 2025",
    details: "Advanced studies in software engineering, data structures, algorithms, and emerging technologies, complemented by research work and industry internships to enhance practical skills.",
  },
];


const AllEducation = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between gap-6">
      {educations.map((education, index) => (
        <>
          <SingleEducation key={index} education={education} />
          {index < educations.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </>
      ))}
    </div>
  );
};

export default AllEducation;
