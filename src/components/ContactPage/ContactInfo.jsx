
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
<div className='pt-10'><div className="flex items-center justify-center pb-10">
    <h2 className="text-4xl sm:text-5xl font-medium whitespace-nowrap leading-none">
     Contact Us
    </h2>
    <div className="custom-pagination flex items-center" />
  </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10">
        
        {contactData.map((item, index) => (
          <div
            key={index}
            className="bg-[#EBEEF1] p-6 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className=" font-bold text-[#6C7275] mb-2 text-base">{item.title}</h3>
            <p className="text-base inter-font font-semibold text-[#141718]">{item.content}</p>
          </div>
        ))}
      </div>
{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10">
        
        {contactData.map((item, index) => (
          <div
            key={index}
            className="bg-[#EBEEF1] p-6 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.content}</p>
          </div>
        ))}
      </div> */}
</div>
    );
  };
  
  export default ContactInfo;
  
