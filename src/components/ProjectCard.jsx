import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin('ScrollTrigger');

const ProjectCard = ({ project }) => {

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
		<div>
			<a href={project.url} target="_blank" className="project-card translate-y-[100px] opacity-0 inline-block">
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
							<svg className="size-3 lg:size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11085)"> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 12C3.60014 7.90264 7.33603 5 12 5C16.664 5 20.3999 7.90264 22 12C20.3999 16.0974 16.664 19 12 19C7.33603 19 3.60014 16.0974 2 12Z" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11085"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
								<span>See More</span>
							</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ProjectCard;
