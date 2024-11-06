import { useEffect, useState } from "react";
import CommingSoon from "../components/CommingSoon";
import ProjectCard from "../components/ProjectCard";
import categories from "../db/categories.json";
import projects from "../db/projects.json";

const Portfolio = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [projectList, setProjectList] = useState(projects);
	const projectsPerPage = 6;
	const [activeCategoryId, setActiveCategoryId] = useState(0);
	const [showProjectDetail, setShowProjectDetail] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	// Show project detail
	const handleClick = ({ project }) => {
		setSelectedProject(project);
		setShowProjectDetail(true);
	};

	const closeProjectDetail = () => {
		setShowProjectDetail(false);
	};

	const updateCategory = (id) => {
		setActiveCategoryId(id);
	};

	useEffect(() => {
		if (activeCategoryId === 0) {
			setProjectList(projects);
		} else if (activeCategoryId !== null) {
			let filteredProjects = [];
			filteredProjects = projects.filter((project) => {
				return project.category.includes(activeCategoryId);
			});

			setProjectList(filteredProjects);
		}
	}, [activeCategoryId]);

	// Calculate the total pages needed
	const totalPages = Math.ceil(projectList.length / projectsPerPage);

	// Slice the projects for the current page
	const paginatedProjects = projectList.slice(
		(currentPage - 1) * projectsPerPage,
		currentPage * projectsPerPage
	);

	// Handle pagination
	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};

	return (
		<section
			id="portfolio"
			className="panel w-screen lg:min-h-screen relative bg-white py-8"
		>
			<h1 className="section-title">
				<span>My </span> Portfolio
			</h1>
			<p className="intro">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
				minus architecto facere ea aut. Labore doloremque architecto
				veniam maxime repellat.
			</p>

			<div className="mb-8">
				<div className="flex flex-wrap gap-4 items-center justify-center categories-wrapper w-full lg:max-w-[70%] mx-auto">
					<button
						className={`px-3 py-1 sm:px-5 sm:py-1.5 lg:px-6 lg:py-2 border border-soft_blue rounded capitalize text-xs sm:text-sm lg:text-base ${
							activeCategoryId === 0
								? "bg-soft_blue text-white"
								: "bg-transparent text-soft_blue"
						}`}
						onClick={() => updateCategory(0)}
					>
						All
					</button>
					{categories.map((category) => (
						<button
							className={`px-3 py-1 sm:px-5 sm:py-1.5 lg:px-6 lg:py-2 border border-soft_blue rounded capitalize text-xs sm:text-sm lg:text-base ${
								activeCategoryId === category.id
									? "bg-soft_blue text-white"
									: "bg-transparent text-soft_blue"
							}`}
							key={category.id}
							onClick={() => updateCategory(category.id)}
						>
							{category.name}
						</button>
					))}
				</div>
			</div>

			{selectedProject !== null && showProjectDetail === true && (
				<div className="fixed top-0 left-0 w-full h-full bg-slate-700/50 flex items-center justify-center z-50">
					<div className="w-[90%] sm:max-w-[500px] lg:max-w-[700px] max-h-[80vh] mx-auto bg-white shadow p-8 lg:p-6 rounded relative">
						<button
							className="absolute -right-4 -top-4 inline-block px-4 py-2 border bg-slate-600 text-white rounded-full z-10"
							onClick={() => closeProjectDetail()}
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
			)}

			{paginatedProjects.length > 0 ? (
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
					{paginatedProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							onClick={() => handleClick({ project })}
						/>
					))}
				</div>
			) : (
				<CommingSoon />
			)}

			{/* Pagination Controls */}
			{totalPages > 1 && (
				<div className="flex justify-center mt-8">
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-4 py-2 mx-1 border rounded disabled:opacity-50 text-soft_blue"
					>
						Previous
					</button>
					<span className="px-4 py-2 mx-1 text-soft_blue">{`Page ${currentPage} of ${totalPages}`}</span>
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-4 py-2 mx-1 border rounded disabled:opacity-50 text-soft_blue"
					>
						Next
					</button>
				</div>
			)}
		</section>
	);
};

export default Portfolio;
