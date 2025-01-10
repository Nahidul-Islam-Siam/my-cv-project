
import addressIcon from '../assets/store 01.png'// Replace with your actual image path
import phoneIcon from '../assets/call.png'
import emailIcon from '../assets/Messeage.png'; // Replace with your actual image path

const contactData = [
  {
    icon: addressIcon,
    title: 'ADDRESS',
    content: (
      <>
        234 Hai Trieu, Ho Chi Minh City,<br />
        Viet Nam
      </>
    ),
  },
  {
    icon: phoneIcon,
    title: 'CONTACT US',
    content: '+84 234 567 890',
  },
  {
    icon: emailIcon,
    title: 'EMAIL',
    content: 'hello@3legant.com',
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
      {contactData.map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 mx-auto mb-2">
            <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
          </div>
          <p className="text-sm md:text-base font-medium text-gray-800">
            {item.title}
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
