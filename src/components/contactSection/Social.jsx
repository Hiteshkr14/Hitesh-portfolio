import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Social = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/hitesh-kumar-09581a153"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Hiteshkr14"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/hiteshkr_14"
        Icon={FaInstagram}
      />
      <SingleContactSocial
        link="https://www.facebook.com/share/1A7waJqxh1/"
        Icon={FaFacebookF}
      />
    </div>
  );
};

export default Social;
