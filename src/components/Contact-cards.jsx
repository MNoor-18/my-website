import PropTypes from "prop-types";

const ContactCards = ({ contactBy = "no concat" , content = "no content"}) => {
    return(
        <div className="w-64 h-32 rounded-md shadow-md shadow-slate-500 cards-bg text-lg font-bold flex flex-col items-center justify-center md:*:text-2xl dark:shadow-bl md:w-80 md:h-52 lg:w-96 lg:h-60 ">
            <h2 className="text-teal-900 mb-3">{contactBy}</h2>
            <p>{content}</p>
        </div>
    )
}

ContactCards.propTypes = {
    contactBy: PropTypes.string,
    content: PropTypes.string
}

export default ContactCards;