

const AboutUsSection = () => {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4"> {/* Padding, max-width, margin, horizontal padding */}
      <div className="flex items-center mb-5 text-gray-500 text-sm"> {/* Breadcrumbs styling */}
        <span>Home</span>
        <span className="mx-1">&gt;</span> {/* Separator */}
        <span>Contact Us</span>
      </div>
      <h2 className="text-5xl font-bold mb-5 leading-tight"> {/* Heading styling, leading for line height */}
        We believe in sustainable<br />
        decor. We&apos;re passionate about<br />
        life at home.
      </h2>
      <p className="leading-relaxed text-gray-700"> {/* Paragraph styling, leading for line height */}
        Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.
      </p>
    </div>
  );
};

export default AboutUsSection;