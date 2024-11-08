import gsap from "gsap";
import { useEffect } from "react";

const ProjectPopUp = ({ selectedProject, onClick }) => {
	useEffect(() => {
		gsap.fromTo(
			".project-detail",
			{ scale: 0, rotateZ: 180 },
			{ scale: 1, rotateZ: 0, duration: 0.3 }
		);
	}, []);
	const handleClose = () => {
		gsap.to(".project-detail", {
			scale: 0,
			skewY: (90, 90),
			duration: 0.3,
			onComplete: onClick,
		});
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-slate-700/50 flex items-center justify-center z-40">
			<div className="project-detail relative w-[90%] sm:max-w-[500px] lg:max-w-[700px] z-40 mx-auto bg-white shadow rounded">
				<button
					className="absolute -right-4 -top-4 inline-block px-4 py-2 border bg-slate-600 text-white rounded-full z-50"
					onClick={handleClose}
				>
					x
				</button>
				<div className="max-h-[80vh] overflow-y-auto p-8 lg:p-6">
					<h3 className="text-soft_blue text-center text-2xl font-semibold mb-6">
						{selectedProject.title}
					</h3>

					<article>
						<p className="text-sm leading-6 tracking-wide mb-4 text-justify text-slate-600 indent-8">
							{selectedProject.first_desc}
						</p>
						<p className="text-sm leading-6 tracking-wide mb-4 text-justify text-slate-600 indent-8">
							{selectedProject.second_desc}
						</p>
					</article>
					<p className="text-sm mt-8">
						Visit to -{" "}
						<a
							className="text-soft_blue underline"
							href={selectedProject.url}
							target="_blank"
						>
							{selectedProject.title}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectPopUp;
