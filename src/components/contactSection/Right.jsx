import Info from "./Info";
import Social from "./Social";

const Right = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 lg:w-1/2">
      <img
        src="../../public/images/email-image.png"
        alt="Contact"
        className="max-w-[350px] rounded-lg shadow-lg"
      />
      <Info />
      <Social />
    </div>
  );
};

export default Right;
