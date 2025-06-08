import Text from "./Text";
import Pic from "./Pic";

const UpperMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <Text />
        <Pic />
      </div>
    </div>
  );
};

export default UpperMain;
