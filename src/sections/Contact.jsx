import telephone from "../assets/telephone.jpg";

const Contact = () => {
	return (
		<section
			id="contact"
			className="min-h-screen relative -z-20"
			style={{
				backgroundImage: `url(${telephone})`,
				backgroundRepeat: false,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: 'fixed'
			}}
		>
			<div className="absolute w-full h-full bg-black/30 top-0 left-0 -z-10">

			</div>
			{/* <h1 className="text-center text-4xl font-anton tracking-wide py-8">
				Contact <span className="text-purple">Me</span>
			</h1> */}
		</section>
	);
};

export default Contact;
