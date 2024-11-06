import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import services from "../db/services.json";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
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

	return (
		<section
			id="services"
			className="panel w-screen min-h-screen relative bg-white py-8"
		>
			<h1 className="section-title">
				<span>My</span> Services
			</h1>
			<p className="intro">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
				voluptas incidunt error accusantium sit quae recusandae
				voluptatibus quas placeat maxime!
			</p>

			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 pb-6">
				{services.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</section>
	);
};

export default Service;
