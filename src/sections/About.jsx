import wave3 from "../assets/wave3.png";

const About = () => {
	return (
		<section
			id="about"
			className="panel w-screen h-screen relative bg-white"
		>
			<div className="absolute bottom-0 left-0 w-full">
				<img className="w-full h-[300px]" src={wave3} alt="wave" />
			</div>
			<h1 className="text-center text-4xl font-anton tracking-wide py-8">
				<span className="text-purple">About</span> Me
			</h1>

			<div className="w-full grid grid-cols-2 gap-4">
				<div className="size-[3:5]">
					<img src="" alt="" />
				</div>
			</div>
		</section>
	);
};

export default About;
