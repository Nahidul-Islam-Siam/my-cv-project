


const Heading = ({ title }) => {
  return (
    <div className="flex items-center justify-between pb-10">
      <h2 className="text-4xl sm:text-5xl font-medium whitespace-nowrap leading-none">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
