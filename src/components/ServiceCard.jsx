const ServiceCard = ({ service }) => {
	return (
		<div className="service-card">
			<div className="mb-6 flex justify-center">
				<img className="size-10 sm:size-16 lg:size-20" src={service.icon_path} alt="icon" />
			</div>
			<h3 className="card-title">{service.title}</h3>
			<p className="card-intro">{service.intro}</p>
			<button className="card-button">
				<span>See More</span>
			</button>
		</div>
	);
};

export default ServiceCard;
