import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import ServicePopUp from "../components/ServicePopUp";
import services from "../db/services.json";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
	const [showPopUp, setShowPopUp] = useState(false);
	const [selectedService, setSelectedService] = useState(null);

	useEffect(() => {
		gsap.to(".service-card", {
			scrollTrigger: {
				trigger: "#services",
				toggleActions: "play none none none",
				start: "top center",
			},
			duration: 0.5,
			y: 0,
			stagger: 0.2,
			opacity: 1,
		});
	}, []);

	const handleClick = ({service}) => {
		setSelectedService(service);
		setShowPopUp(true);
	};

	const closePopup = () => {
		setShowPopUp(false);
	};

	return (
		<section
			id="services"
			className="panel w-screen min-h-screen relative bg-white py-8"
		>
			<h1 className="section-title">
				<span>My</span> Services
			</h1>
			<p className="intro">
			I provide comprehensive web development services, from frontend and backend development to web design, API integration, CMS customization, and reliable hosting solutions.
			</p>
			{selectedService !== null && showPopUp === true && (
				<ServicePopUp selectedService={selectedService} onClick={() => closePopup()} />
			)}

			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 pb-6">
				{services.map((service) => (
					<ServiceCard key={service.id} service={service} onClick={() => handleClick({service})}/>
				))}
			</div>
		</section>
	);
};

export default Service;
