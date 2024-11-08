import gsap from "gsap";
import { useEffect } from "react";

const ServicePopUp = ({ selectedService, onClick }) => {
	useEffect(() => {
		gsap.fromTo(
			".service-detail",
			{ scale: 0, rotateZ: 180 },
			{ scale: 1, rotateZ: 0, duration: 0.3 }
		);
	}, []);
	const handleClose = () => {
		gsap.to(".service-detail", {
			scale: 0,
			skewY: (90, 90),
			duration: 0.3,
			onComplete: onClick,
		});
	};
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-slate-700/80 flex items-center justify-center z-50">
			<div className="service-detail w-[90%] sm:max-w-[500px] lg:max-w-[700px] max-h-[80vh] mx-auto bg-white shadow p-8 lg:p-6 rounded relative">
				<button
					className="absolute -right-4 -top-4 inline-block px-4 py-2 border bg-slate-600 text-white rounded-full z-10"
					onClick={handleClose}
				>
					x
				</button>
				<h3 className="text-soft_blue text-2xl font-semibold mb-6">
					{selectedService.title}
				</h3>

				<article className="w-full h-full overflow-y-auto">
					<p className="text-base leading-8 tracking-wide mb-4 text-justify text-slate-800 indent-8 font-poppins">
						{selectedService.content}
					</p>
				</article>
			</div>
		</div>
	);
};

export default ServicePopUp;
