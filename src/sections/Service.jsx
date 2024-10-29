import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import apiInterface from "../assets/svg/api-interface.svg";
import frontend from "../assets/svg/frontend.svg";
import hostingServer from "../assets/svg/hosting-server-web.svg";
import responsiveDesign from "../assets/svg/responsive-design.svg";
import server from "../assets/svg/server.svg";
import wordpress from "../assets/svg/wordpress.svg";

gsap.registerPlugin(ScrollTrigger) 

const Service = () => {
	useEffect(() => {
		gsap.to(
			".service-card",
			{
				scrollTrigger: {
					trigger: "#services",
					toggleActions: "play none none none",
					start: "top center",
				},
				duration: 0.3,
				y: 0,
				stagger: 0.1,
				opacity: 1,
			},
		);
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
				<div className="service-card">
					<div className="mb-6 flex justify-center">
						<img className="size-20" src={frontend} alt="" />
					</div>
					<h3 className="card-title">Frontend Development</h3>
					<p className="card-intro">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolore facere eligendi atque assumenda ipsa cum
						consequuntur ipsam veniam aperiam eaque.
					</p>
					<button className="card-button">See More</button>
				</div>
				<div className="service-card">
					<div className="mb-6 flex justify-center">
						<img className="size-20" src={server} alt="" />
					</div>
					<h3 className="card-title">Backend Development</h3>
					<p className="card-intro">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolore facere eligendi atque assumenda ipsa cum
						consequuntur ipsam veniam aperiam eaque.
					</p>
					<button className="card-button">See More</button>
				</div>
				<div className="service-card">
					<div className="mb-6 flex justify-center">
						<img
							className="size-20"
							src={responsiveDesign}
							alt=""
						/>
					</div>
					<h3 className="card-title">Responsive Web Design</h3>
					<p className="card-intro">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolore facere eligendi atque assumenda ipsa cum
						consequuntur ipsam veniam aperiam eaque.
					</p>
					<button className="card-button">See More</button>
				</div>
				<div className="service-card">
					<div className="mb-6 flex justify-center">
						<img className="size-20" src={apiInterface} alt="" />
					</div>
					<h3 className="card-title">API Development</h3>
					<p className="card-intro">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolore facere eligendi atque assumenda ipsa cum
						consequuntur ipsam veniam aperiam eaque.
					</p>
					<button className="card-button">See More</button>
				</div>
				<div className="service-card">
					<div className="mb-6 flex justify-center">
						<img className="size-20" src={hostingServer} alt="" />
					</div>
					<h3 className="card-title">Website Hosting</h3>
					<p className="card-intro">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolore facere eligendi atque assumenda ipsa cum
						consequuntur ipsam veniam aperiam eaque.
					</p>
					<button className="card-button">See More</button>
				</div>
				<div className="service-card">
					<div className="mb-6 flex justify-center">
						<img className="size-20" src={wordpress} alt="" />
					</div>
					<h3 className="card-title">
						Content Managment System (CMS)
					</h3>
					<p className="card-intro">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolore facere eligendi atque assumenda ipsa cum
						consequuntur ipsam veniam aperiam eaque.
					</p>
					<button className="card-button">See More</button>
				</div>
			</div>
		</section>
	);
};

export default Service;
