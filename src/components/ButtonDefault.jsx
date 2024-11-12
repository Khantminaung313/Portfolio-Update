import PropTypes from "prop-types";

const ButtonDefault = ({text, link, attr}) => {
  return (
    <>
        <a href={link} className="default-btn relative z-20 px-8 py-2 bg-slate-500 text-white text-xs lg:text-sm cursor-pointer rounded-full border hover:bg-soft_blue transition-all duration-150" {...attr}>{text}</a>
    </>
  )
}

ButtonDefault.propTypes = {
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	attr: PropTypes.object.isRequired
};

export default ButtonDefault