const ContactUs = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add form submission logic here
    };
  
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
        {/* Contact Form Section */}
        <div className="flex items-center justify-start w-full">
          <div className="w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block uppercase text-xs font-bold text-[#6C7275]" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="mt-1 block w-full p-2 border inter-font text-[#6C7275] text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#6C7275]" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="mt-1 block inter-font text-[#6C7275] text-sm w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#6C7275]" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows="4"
                  className="mt-1 block inter-font text-[#6C7275] text-sm w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-3/12 bg-[#141718] text-white inter-font font-medium py-3 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
  
        {/* Google Map Section */}
        <div className="w-full h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531531737!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e83b165b710!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1611271436529!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  