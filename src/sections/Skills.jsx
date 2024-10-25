import wave3 from "../assets/wave3.png";

const Skills = () => {
	return (
		<section
			id="skills"
			className="panel w-screen h-screen relative bg-white"
		>
			<div className="absolute bottom-0 left-0 w-full -scale-x-100">
				<img className="w-full h-[300px]" src={wave3} alt="wave" />
			</div>
			<h1 className="text-center text-4xl font-anton tracking-wide py-8">
				My <span className="text-purple">Skills</span>
			</h1>
		</section>
	);
};

export default Skills;
