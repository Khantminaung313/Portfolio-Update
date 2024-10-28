import dean from "../assets/Dean.jfif";
import wave3 from "../assets/wave3.png";

const Hero = () => {
	return (
		<>
			<div id="hero" className="min-h-screen relative overflow-hidden bg-soft_blue flex justify-center items-center">
                <div className="absolute bottom-0 left-0 w-full">
                    <img className="w-full h-[300px]" src={wave3} alt="wave" />
                </div>
                <div className="w-[500px]">
                    <div className="rounded-full size-[200px] overflow-hidden border-4 border-purple mx-auto">
                        <img className="w-full h-full" src={dean} alt="" />
                    </div>
                    <h1 className="text-white py-4 text-center text-2xl xl:text-3xl font-bebas-neue">I&apos;m Dean <br /> A fullstack developer</h1>
                </div>
			</div>
		</>
	);
};

export default Hero;
