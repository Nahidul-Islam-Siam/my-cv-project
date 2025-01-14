
import AboutUs from "../components/ContactPage/AboutUs";
import ContactInfo from "../components/ContactPage/ContactInfo";
import ContactUsForm from "../components/ContactPage/ContactUsForm";
import Features from "../components/HomePage/Features";
import AboutUsSection from "../components/screen/AboutText";


const ContactUs = () => {
    return (
        <div> 
         
            
            <div className=" px-[50PX]">
                <AboutUsSection/>
            <AboutUs/>
            <ContactInfo/>
            <ContactUsForm/>
            </div>
            <Features/>
        </div>
    );
};

export default ContactUs;