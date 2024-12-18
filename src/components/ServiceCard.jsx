import PropTypes from "prop-types";

const ServiceCard = ({ service, onClick }) => {
	return (
		<div className="service-card">
			<div className="mb-6 flex justify-center">
				<img className="size-10 sm:size-16 lg:size-20" src={service.icon_path} alt="icon" />
			</div>
			<h3 className="card-title cursor-pointer" onClick={onClick}>{service.title}</h3>
			<p className="card-intro">{service.intro}</p>
			<button className="card-button" onClick={onClick}>
				<span>See More</span>
			</button>
		</div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.shape({
		icon_path: PropTypes.string,
		title: PropTypes.string,
		intro: PropTypes.string
	}).isRequired,
	onClick: PropTypes.func.isRequired
}

export default ServiceCard;
