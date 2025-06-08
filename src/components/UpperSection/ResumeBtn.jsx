import { FaDownload } from "react-icons/fa";

const ResumeBtn = () => {
  const handleResumeDownload = () => {
    const resumePath = "/Hitesh_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Hitesh_Kr_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleResumeDownload}
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      My Resume
      <FaDownload className="text-white" size={22} />
    </button>
  );
};

export default ResumeBtn;
