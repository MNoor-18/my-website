import ContactCards from "../components/Contact-cards";
import useLanguage from "../hooks/useLanguage";

const Contact = () => {
    const currentLanguage = useLanguage();

    return (
        <section id='contact' className='sections' >
            <h1 className='sections-titles'>{currentLanguage.pages.contact}</h1>
            <div className='h-96 w-full flex flex-col justify-center items-center gap-10 md:flex-row'>
                <ContactCards contactBy={currentLanguage.contact.whatsapp.theName} content={currentLanguage.contact.whatsapp.theAccount} />
                <ContactCards contactBy={currentLanguage.contact.email.theName} content={currentLanguage.contact.email.theAccount} />
            </div>
        </section>
    )}
export default Contact;