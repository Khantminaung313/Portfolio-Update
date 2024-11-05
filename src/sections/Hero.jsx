import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import dean from "../assets/images/Dean.jfif";
import ButtonDefault from "../components/ButtonDefault";

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
					<h1 className="title text-white py-4 text-center text-2xl xl:text-3xl font-bebas-neue">
						I&apos;m Dean
					</h1>
					<ReactTyped
						strings={[
							"A Fullstack Developer",
							"A Frontend Developer",
							"A Backend Developer",
							"A Web Developer"
						]}
						typeSpeed={50}
						backSpeed={30}
						startDelay={1}
						loop
						className="title text-white text-center text-2xl xl:text-3xl font-bebas-neue mb-4"
					/>
					<ButtonDefault
						link={"#about"}
						text={"About Me"}
						attr={""}
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
