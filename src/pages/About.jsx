import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillsCards from "../components/Skills-cards";
import { mySkills } from "../constants/index";
import useLanguage from "../hooks/useLanguage";

const About = () => {
    const currentLanguage = useLanguage(); 

    return (
        <section id='about' className='sections gap-14 px-5 md:px-14'>
            <div className='min-h-screen w-full flex flex-col items-center relative xl:flex-row'>
                <div className="w-2/3 h-fit relative md:w-2/6 md:overflow-hidden">
                    <img className='h-full w-full object-cover' src="assets/images/picture-2.png" alt="My Picture" />
                    <div className="hidden h-2/6 w-full absolute bottom-0 bg-gradient-to-t from-[#f8fafc] md:block dark:from-gray-800" />
                </div>
                <div className="w-full h-5/6 md:w-4/6">
                    <div className='w-full h-full rounded-xl px-5 py-8 shadow-gray-400 shadow-md cards-bg relative md:px-8 md:py-10 dark:shadow-gray-950'>
                        <div className='h-full w-full pb-8 px-3 rounded-xl border-2 border-gray-200 relative md:px-4 dark:border-gray-400'>
                            <h1 className='w-fit px-2 ml-10 text-lg font-bold -top-4 text-teal-900 cards-bg relative uppercase md:text-2xl md:-top-5'>{currentLanguage.pages.aboutMe}</h1>
                            <p className='text-gray-500 text-sm p-1 mb-8 dark:text-black'>{currentLanguage.aboutMe.intro}</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-3 xl:flex-row xl:gap-16 dark:*:text-teal-900 ">
                                    <div className='flex flex-col gap-3 text-teal-950 *px-2 *:text-sm capitalize  md:*:text-lg *:flex *:flex-wrap dark:*:text-teal-900 '>
                                        <p>{currentLanguage.aboutMe.contactInfo.name}<span className='font-semibold capitalize mx-2 text-nowrap'>{currentLanguage.aboutMe.contactValues.name}</span></p>
                                        <p>{currentLanguage.aboutMe.contactInfo.mySpecialty}<span className='font-semibold capitalize mx-2 text-nowrap'>{currentLanguage.aboutMe.contactValues.mySpecialty}</span></p>
                                        <p>{currentLanguage.aboutMe.contactInfo.jobType}<span className='font-semibold capitalize mx-2'>{currentLanguage.aboutMe.contactValues.jobType}</span></p>
                                    </div>
                                    <div className='flex flex-col gap-3 text-teal-950 *px-2 *:text-sm capitalize md:*:text-lg dark:*:text-teal-900'>
                                        <p>{currentLanguage.aboutMe.contactInfo.address}<span className='font-semibold capitalize mx-2'>{currentLanguage.aboutMe.contactValues.address}</span></p>
                                        <p>{currentLanguage.aboutMe.contactInfo.email}<span className='font-semibold lowercase mx-2'>{currentLanguage.aboutMe.contactValues.email}</span></p>
                                        <p>{currentLanguage.aboutMe.contactInfo.phone}<span className='font-semibold capitalize mx-2 text-current'>{currentLanguage.aboutMe.contactValues.phone}</span></p>
                                    </div>
                                </div>
                                <div className='text-sm capitalize text-teal-950 flex text-nowrap md:text-lg '>
                                    <p>{currentLanguage.aboutMe.contactInfo.hobbies}</p>
                                    <span className='mx-2 font-semibold capitalize flex flex-wrap gap-2 dark:text-teal-900'>
                                        {currentLanguage.aboutMe.contactValues.hobbies.map(item => (<span key={item.title}>
                                            {item.title}
                                            <FontAwesomeIcon icon={item.theIcon} className="mx-1" />
                                        </span>))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='h-fit sections'>
                <h1 className='sections-titles'>{currentLanguage.pages.skills}</h1>
                <div className='h-fit pb-16 w-full flex flex-wrap gap-5 justify-center '>
                    {mySkills.map(item => (<SkillsCards skillName={item.skillName} direction={item.skillImage} theAlt={item.skillAlt}  key={item.skillName}/>))}
                </div>
            </section>
        </section>
    )}

    export default About;
