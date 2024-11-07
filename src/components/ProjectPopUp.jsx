import gsap from "gsap";
import { useEffect } from "react";

const ProjectPopUp = ({ selectedProject, onClick }) => {

    useEffect(() => {
        gsap.fromTo('.project-detail', {scale: 0, rotateZ: 180}, {scale: 1, rotateZ: 0, duration: 0.3})
    }, []);

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-slate-700/50 flex items-center justify-center z-50">
			<div className="project-detail w-[90%] sm:max-w-[500px] lg:max-w-[700px] max-h-[80vh] mx-auto bg-white shadow p-8 lg:p-6 rounded relative">
				<button
					className="absolute -right-4 -top-4 inline-block px-4 py-2 border bg-slate-600 text-white rounded-full z-10"
					onClick={onClick}
				>
					x
				</button>
				<h3 className="text-soft_blue text-2xl font-semibold mb-6">
					Name - {selectedProject.title}
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
	);
};

export default ProjectPopUp;
