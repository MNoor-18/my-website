import PropTypes from 'prop-types';

const ProjectsCards = ({ name = "not yet", image = "/assets/images/web-development.jpg", info = "not yet"}) => {
    return(
        <div className='group h-44 w-40 shadow-lg overflow-hidden rounded-md bg-white sm:h-64 sm:w-60 xl:h-80 xl:w-80'>
            <div className='projects-images h-5/6 w-full relative'>
                <img src={image} alt={name} className='w-full h-full object-cover' />
                <div className='w-full h-full absolute flex items-center justify-center bottom-full transition-[1s] bg-black bg-opacity-55 text-white p-4 text-sm group-hover:bottom-0 sm:text-xl md:text-2xl'>
                    {info}
                </div>
            </div>
            <div className='h-full w-full px-2 text-center text-teal-900 font-semibold text-lg sm:text-xl  sm:p-2'>{name}</div>
        </div>
    );
};

ProjectsCards.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string
};

export default ProjectsCards;