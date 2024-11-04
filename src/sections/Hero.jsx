import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import dean from "../assets/images/Dean.jfif";
import wave3 from "../assets/images/wave3.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	useEffect(() => {
		const tl = gsap.timeline({
            ScrollTrigger: {
                trigger: '.profile',
                toggleActions: "restart none restart noen",
                pin: true,
                start: 'bottom bottom',
                end: '+=500',
                scrub: 1,
            }
        });
		tl.fromTo(".profile", { scale: 0 }, { duration: 1, scale: 1 })
		tl.fromTo(".title", { scale: 0 }, { duration: 1, scale: 1, stagger: 0.1 })
        
	}, []);

	return (
		<>
			<div
				id="hero"
				className="min-h-screen relative overflow-hidden bg-soft_blue flex justify-center items-center"
			>
				<div className="absolute bottom-0 left-0 w-full">
					<img className="w-full h-[300px]" src={wave3} alt="wave" />
				</div>
				<div className="w-[500px]">
					<div
						id="profile"
						className="profile rounded-full size-[200px] overflow-hidden border-4 border-purple mx-auto"
					>
						<img className="w-full h-full" src={dean} alt="" />
					</div>
					<h1 className="title text-white py-4 text-center text-2xl xl:text-3xl font-bebas-neue">
						I&apos;m Dean <br /> A fullstack developer
					</h1>
				</div>
			</div>
		</>
	);
};

export default Hero;
