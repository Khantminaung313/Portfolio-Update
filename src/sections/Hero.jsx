import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import dean from "../assets/images/Dean.jfif";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			ScrollTrigger: {
				trigger: ".profile",
				toggleActions: "restart none restart noen",
				pin: true,
				start: "bottom bottom",
				end: "+=500",
				scrub: 1,
			},
		});
		tl.fromTo(".profile", { scale: 0 }, { duration: 1, scale: 1 });
		tl.fromTo(
			".title",
			{ scale: 0 },
			{ duration: 1, scale: 1, stagger: 0.1 }
		);
	}, []);

	return (
		<>
			<div
				id="hero"
				className="min-h-screen relative overflow-hidden flex justify-center items-center"
			>
				<div className="w-[500px] flex flex-col items-center justify-center">
					<div
						id="profile"
						className="profile rounded-full size-[200px] overflow-hidden border-4 border-purple mx-auto"
					>
						<img className="w-full h-full" src={dean} alt="" />
					</div>
					<h1 className="title text-white py-4 text-center text-2xl xl:text-3xl font-bebas-neue mb-4">
						I&apos;m Dean <br /> A fullstack developer
					</h1>
					<a className="px-6 py-2 text-white font-bold bg-slate-500 border hover:bg-soft_blue rounded-full animate-bounce" href="#about">About Me</a>
				</div>
			</div>
		</>
	);
};

export default Hero;
