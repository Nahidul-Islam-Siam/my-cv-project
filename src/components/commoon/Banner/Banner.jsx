

import PropTypes from 'prop-types';

const Banner = ({ backgroundImage, title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Banner Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        {/* Breadcrumbs */}
        <div className="mb-3 gap-2 text-[#605F5F] inter-font text-sm font-medium">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {crumb.url ? (
                <a href={crumb.url} className="hover:underline pr-1">
                  {crumb.label}
                </a>
              ) : (
                <span>{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && ' > '}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-[54px] poppins-font font-medium text-black mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-[#121212] inter-font">{subtitle}</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Banner;
