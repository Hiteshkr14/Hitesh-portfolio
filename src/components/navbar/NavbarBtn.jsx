import { FaWhatsapp } from "react-icons/fa";

const NavbarBtn = () => {
  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/8920371827", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppRedirect}
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange hover:shadow-lg hover:shadow-orange"
    >
      Hire Me
      <FaWhatsapp className="text-green-500" size={26} />
    </button>
  );
};

export default NavbarBtn;
