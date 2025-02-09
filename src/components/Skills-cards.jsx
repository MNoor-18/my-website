import PropTypes from 'prop-types';

const SkillsCards = ({ skillName="no name yet" , theAlt="Skill Image", direction="assets/web-development.jpg"}) => {
    return(
        <div className={'h-36 w-32 bg-white pb-3 rounded-lg shadow-md shadow-slate-400 sm:h-48 sm:w-44 xl:h-64 xl:w-60'}>
            <div className="h-5/6 p-5 flex justify-center">
                <img className="h-full object-cover " src={direction} alt={theAlt} />
            </div>
            <h2 className='text-lg font-semibold text-black text-center sm:text-2xl md:text-3xl'>{skillName}</h2>
        </div>
    )
}

SkillsCards.propTypes = {
    skillName: PropTypes.string,
    theAlt: PropTypes.string,
    direction: PropTypes.string
}
export default SkillsCards;