import useLanguage from "../hooks/useLanguage";

const Footer = () => {
    const currentLanguage = useLanguage();
    return(
        <footer className="h-16 flex items-center bg-[#eee] justify-center text-teal-900 md:h-20 dark:bg-gray-950 dark:text-white">
            <p>{currentLanguage.footer}</p>
        </footer>
    )
}
export default Footer;