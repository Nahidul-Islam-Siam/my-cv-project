
import AboutUs from "../components/AboutUs";
import ContactInfo from "../components/ContactInfo";
import Features from "../components/Features";
import AboutUsSection from "../components/screen/AboutText";


const ContactUs = () => {
    return (
        <div> 
         
            
            <div className=" px-[50PX]">
                <AboutUsSection/>
            <AboutUs/>
            <ContactInfo/>
            </div>
            <Features/>
        </div>
    );
};

export default ContactUs;