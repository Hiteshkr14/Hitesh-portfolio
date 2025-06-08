const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-3 items-center">
      <Image className="text-3xl text-cyan" />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default SingleInfo;
