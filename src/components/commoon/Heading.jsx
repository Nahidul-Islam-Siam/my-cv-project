import PropTypes from 'prop-types';

const Heading = ({ title }) => {
  return (
    <div className="flex items-center justify-between pb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium whitespace-nowrap leading-none">
        {title}
      </h2>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
