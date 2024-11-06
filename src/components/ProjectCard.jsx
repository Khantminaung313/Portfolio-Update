import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin('ScrollTrigger');

const ProjectCard = ({ project, onClick }) => {

	useEffect(() => {
		gsap.to('.project-card',{
			scrollTrigger: {
				trigger: "#portfolio",
				toggleActions: "play none none none",
				start: "top center",
			},
			y: 1, 
			opacity: 1,
			duration: 0.5,
			stagger: 0.2
		})
	}, []);

	return (
		<div onClick={onClick}>
			<button className="project-card translate-y-[100px] opacity-0 inline-block">
				<div className="p-1 border rounded shadow-lg hover:shadow-soft_blue overflow-hidden group relative">
					<div className="hidden lg:block absolute w-[50%] lg:w-[0] h-full bg-gradient-to-r top-0 left-0 from-soft_blue via-tint_blue transition-all duration-300 ease-linear group-hover:w-[50%]"></div>
					<div className="relative">
						<figure className="aspect-[5/3]">
							<img
								className="w-full h-full object-cover object-center"
								src={project.thumbnail}
								alt={project.title}
							/>
						</figure>
						<div className="absolute w-full h-full left-0 top-0 lg:opacity-0 bg-gradient-to-t from-15% from-black/80 transition-all duration-500 ease-linear group-hover:opacity-100 place-content-end">
							<p className="line-clamp-3 text-[8px] lg:text-sm py-1 lg:py-3 text-white text-center flex items-center justify-center gap-1 bg-gradient-to-r from-soft_blue  lg:scale-x-0 origin-left transition-transform duration-300 ease-linear group-hover:scale-x-100 hover:underline">
								<span>See More</span>
							</p>
						</div>
					</div>
				</div>
			</button>
		</div>
	);
};

export default ProjectCard;
