import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const Info = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="krhitesh8@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8920371827" Image={FiPhone} />
      <SingleInfo text="India, Delhi" Image={IoLocationOutline} />
    </div>
  );
};

export default Info;
