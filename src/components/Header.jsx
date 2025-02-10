import { faGlobe, faListAlt, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo } from "../constants";
import { useState, useEffect } from "react";
import { translations } from "../translation/translation";

const TheHeader = () => {

    // ############################# HEADER BACKGROUND ######################
    document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.getElementById("navbar");
        if (navbar){
            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    navbar.classList.remove("transparent");
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                    navbar.classList.add("transparent");
                }
            });
            };
        });

      // ############################# HANDLE LANGUAGE ######################
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("currentLanguage") || "ar"
  );

  const [language, setLanguage] = useState(
    translations[currentLanguage] || translations.en
  );

  useEffect(() => {
    setLanguage(translations[currentLanguage] || translations.en);
    localStorage.setItem("currentLanguage", currentLanguage);
  }, [currentLanguage]);

//############################# HANDLE MODE #################################

    const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", mode);
    }, [mode]);

//############################# HANDLE MENU #################################

const [isMenuOpen, setMenuOpen] = useState(false);
useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.getElementById("menu");
            if (menu && !menu.contains(event.target)) {
                setMenuOpen(false);
            }};
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);
    //############################# COMPONENT #################################

    return (
        <header id="navbar" className="navbar w-screen h-10 px-5 fixed transparent z-50 top-0 sm:h-16 sm:px-14" >
            <div  dir="ltr" className="h-full w-full flex items-center justify-between">
                <div className="logo-side w-fit">
                    <a href="#home">
                        <h1 className="text-2xl text-teal-900 cursor-pointer font-bold sm:text-4xl sm:font-black dark:text-secondary-color">
                            {logo}
                        </h1>
                    </a>
                </div>
                <nav className="nav-side w-fit hidden md:flex">
                    <ul className="w-full h-full flex gap-4 font-semibold text-teal-900 text-lg dark:text-secondary-color">
                        {language.NavLinks.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="setting-side w-fit hidden text-teal-900 gap-8 md:flex text-2xl dark:text-secondary-color *:cursor-pointer">
                    <FontAwesomeIcon icon={faGlobe} title="Language" onClick={() => {
                        if(currentLanguage === "en"){
                            // انسخ القيم التالية وجعلها في خانة التحقق من اللغة في useLanguage
                            setCurrentLanguage("ar");
                        } else{
                            setCurrentLanguage("en");
                        }
                        location.reload();
                    }} />
                    <FontAwesomeIcon
                        id="mode-btn"
                        onClick={() =>
                            setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
                        }
                        icon={faMoon}
                        title="Mode"
                    />
                </div>
                <div
                    className="block cursor-pointer md:hidden"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon icon={faListAlt} className="text-2xl text-teal-900 sm:text-3xl dark:text-white" />
                </div>
            </div>
            {isMenuOpen && (
                <div
                    id="menu"
                    className="fixed z-10 w-screen h-screen top-10 left-0 bg-white text-teal-900 flex justify-center items-center bg-opacity-95 dark:bg-gray-800 sm:top-16 md:hidden"
                    onClick={() => {
                        const menu = document.getElementById('menu')
                        menu.classList.remove('flex');
                        menu.classList.add('hidden');
                    }}
                >
                    <div id="menu-list" className="w-1/2 text-center grid gap-5">
                        <ul className="w-full flex flex-col gap-4 font-semibold text-lg dark:text-secondary-color">
                            {language.NavLinks.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex justify-center gap-5 dark:*:text-white text-2xl">
                        <FontAwesomeIcon icon={faGlobe} title="Language" onClick={() => {
                        if(currentLanguage === "en"){
                            setCurrentLanguage("ar");
                        } else{
                            setCurrentLanguage("en");
                        }
                        location.reload();
                        }} />
                            <FontAwesomeIcon id="mode-btn" onClick={() =>{
                                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))}
                                } icon={faMoon}title="Mode"/>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default TheHeader;