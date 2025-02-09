import useLanguage from "../hooks/useLanguage";

const Services = () => {
    const currentLanguage = useLanguage(); 

    return(
        <section id='service' className='sections h-fit'>
            <div className='w-full h-full flex items-center'>
                <div className='px-5 *:text-secondary-color md:w-1/2 md:px-14'>
                    <div>
                        <p className="text-xl bg-teal-900 p-2 text-center text-white rounded-lg shadow-slate-500 shadow-md capitalize font-semibold mb-3 dark:shadow-gray-800">{currentLanguage.myService}</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-3 md:font-bold text-teal-900 dark:text-white'>{currentLanguage.featuresTitle}</h2>
                        <ul className=' *:font-semibold'>
                            {currentLanguage.Features.map(item =>(<li key={item.id} className="text-md mb-3 shadow-slate-500 shadow-sm cards-bg rounded-lg py-2 px-3 text-gray-600 dark:text-gray-800">{` ${item.feature}`}</li>))}
                        </ul>
                    </div>
                </div>
                <div className='hidden w-1/2 h-full justify-center md:flex '>
                    <img className='h-full' src="/assets/images/Website Creator-bro.svg" alt="" />
                </div>
            </div>
        </section>
    )
}
export default Services;