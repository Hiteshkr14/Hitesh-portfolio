import Left from "./Left";
import Right from "./Right";

const Main = () => {
  return (
    <div id="contact" className="max-w-[1200px] mx-auto mt-24 px-4">
      <h2 className="text-5xl font-bold text-cyan mb-10 text-center">
      Let&apos;s Connect
      </h2>
      <div className="flex gap-10 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col-reverse">
        <Right /> {/* Now Image is on the right */}
        <Left />  {/* Now Form is on the left */}
      </div>
    </div>
  );
};

export default Main;
