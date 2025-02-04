import useLanguage from "../hooks/useLanguage";

const Home = () => {
    const currentLanguage = useLanguage(); 

    return (
        <section id="home" className="h-screen w-screen relative overflow-hidden md:bg-right">
            <div className="hero-liner h-full px-5 flex items-center overflow-hidden bg-ebsite-bg to-wbsite-bg sm:px-14">
                <div id="hero-welcome" className="home-welcome w-full text-center sm:*:text-left md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4 text-teal-800 text-nowrap md:text-4xl lg:text-[58px] dark:text-secondary-color ">
                        {currentLanguage.hero.myName}
                    </h1>
                    <h2 className="text-xl font-black mb-3 text-teal-800 md:text-2xl lg:text-[px48] dark:text-secondary-color">
                        {currentLanguage.hero.mySpecialty}
                    </h2>
                    <h3 className="text-lg font-normal my-3 text-black sm:text-nowrap md:text-2xl lg:text-[px38] dark:text-gray-200">
                        {currentLanguage.hero.myIntro1}
                    </h3>
                    <h3 className="text-lg font-normal text-black sm:text-nowrap md:text-2xl lg:text-[px38] dark:text-gray-200">
                        {currentLanguage.hero.myIntro2}
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Home;
