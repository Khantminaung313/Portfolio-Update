import wave3 from "../assets/wave3.png";

const Service = () => {
  return (
    <section id="services" className="panel w-screen h-screen relative bg-white">

      <div className="absolute bottom-0 left-0 w-full">
          <img className="w-full h-[300px]" src={wave3} alt="wave" />
      </div>

			<h1 className="text-center text-4xl font-anton tracking-wide py-8">
				My <span className="text-purple">Services</span>
			</h1>
		</section>
  )
}

export default Service