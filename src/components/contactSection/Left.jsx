import Text from "./Text";
import Form from "./Form";

const Left = () => {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-1/2">
      <Text />
      <Form />
    </div>
  );
};

export default Left;
