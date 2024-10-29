import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import services from "../db/services.json";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
	const renderServices = () => {
		return services.map((service) => (
			<div className="service-card" key={service.id}>
				<div className="mb-6 flex justify-center">
					<img
						className="size-20"
						src={service.icon_path}
						alt="icon"
					/>
				</div>
				<h3 className="card-title">{service.title}</h3>
				<p className="card-intro">{service.intro}</p>
				<button className="card-button">See More</button>
			</div>
		));
	};

	useEffect(() => {
		gsap.to(".service-card", {
			scrollTrigger: {
				trigger: "#services",
				toggleActions: "play none none none",
				start: "top center",
			},
			duration: 0.3,
			y: 0,
			stagger: 0.1,
			opacity: 1,
		});
	}, []);

	return (
		<section
			id="services"
			className="panel w-screen min-h-screen relative bg-white"
		>
			<h1 className="text-center text-4xl font-anton tracking-wide py-8">
				<span className="text-purple">My</span> Services
			</h1>

			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
				{renderServices()}
			</div>
		</section>
	);
};

export default Service;
