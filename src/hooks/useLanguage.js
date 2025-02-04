import { useEffect, useState } from "react";
import { translations } from "../translation/translation";

const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState(translations.en);

    useEffect(() => {
        let savedLanguage = localStorage.getItem("currentLanguage");
        if (savedLanguage) {
            if(savedLanguage === 'ar'){
                setCurrentLanguage(translations.ar);
                document.documentElement.setAttribute("dir", "rtl");
                document.querySelector('.nav-side').setAttribute('dir', 'rtl');
                document.documentElement.setAttribute("lang", "ar");
                document.querySelector('#hero-welcome').classList.remove('sm:*:text-left')
                document.querySelector('#hero-welcome').classList.add('sm:*:text-right')
            }else{
                setCurrentLanguage(translations.en);
                document.documentElement.setAttribute("dir", "ltr");
                document.querySelector('.nav-side').setAttribute('dir', 'ltr');
                document.documentElement.setAttribute("lang", "en");
                document.querySelector('#hero-welcome').classList.remove('sm:*:text-right')
                document.querySelector('#hero-welcome').classList.add('sm:*:text-left')
            }
        } else {
            setCurrentLanguage(translations.en);
        }
    }, [currentLanguage]);
    return currentLanguage;
};

export default useLanguage;