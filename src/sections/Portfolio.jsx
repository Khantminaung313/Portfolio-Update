import { useEffect, useState } from "react";
import CommingSoon from "../components/CommingSoon";
import ProjectCard from "../components/ProjectCard";
import ProjectPopUp from "../components/ProjectPopUp";
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
				Explore some of the projects I&apos;ve developed, showcasing my skills in web development, design, and functionality.
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
				<ProjectPopUp selectedProject={selectedProject} onClick={() => closeProjectDetail()} />
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
