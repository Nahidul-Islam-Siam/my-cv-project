const AboutUsSection = () => {
    return (
      <div className="py-10  max-w-4xl "> {/* Added padding for responsiveness and centered content */}
        {/* Breadcrumb Section */}
        <div className="flex items-center inter-font font-medium mb-5 text-[#605F5F] text-sm">
          <span>Home</span>
          <span className="mx-1">&gt;</span>
          <span className="text-[#121212]">Contact Us</span>
        </div>
  
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl lg:text-[54px] text-[#141718] font-medium poppins-font mb-5 leading-normal  text-center md:text-left">
          {/* Responsive font sizes and text alignment */}
          We believe in sustainable<br />
          decor. We&apos;re passionate about<br />
          life at home.
        </h2>
  
        {/* Paragraph Section */}
        <p className="leading-relaxed text-gray-700 text-base md:text-lg text-center md:text-left">
          {/* Responsive font size and text alignment */}
          Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.
        </p>
      </div>
    );
  };
  
  export default AboutUsSection;
  