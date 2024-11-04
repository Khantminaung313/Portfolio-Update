import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import categories from "../db/categories.json";
import projects from "../db/projects.json";

const Portfolio = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6;

	// Calculate the total pages needed
	const totalPages = Math.ceil(projects.length / projectsPerPage);

	// Slice the projects for the current page
	const paginatedProjects = projects.slice(
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
			className="panel w-screen lg:min-h-screen relative bg-white"
		>
			<h1 id="section-title" className="text-center text-4xl font-anton tracking-wide py-8">
				<span className="text-purple">My </span> Portfolio
			</h1>
			<p className="text-slate-600 max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] mx-auto text-center mb-8">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
				minus architecto facere ea aut. Labore doloremque architecto
				veniam maxime repellat.
			</p>

			<div className="mb-8">
				<div className="flex gap-4 items-center justify-center">
					<button className="text-white px-6 py-2 bg-soft_blue rounded">All</button>
					{
						categories.map(category => (
							<button className="text-white px-6 py-2 bg-soft_blue rounded capitalize" key={category.id}>{category.name}</button>
						))
					}
				</div>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
				{paginatedProjects.map((project) => (
					<ProjectCard key={project.id} project={project}/>
				))}
			</div>

			{/* Pagination Controls */}
			<div className="flex justify-center mt-8">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
				>
					Previous
				</button>
				<span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</section>
	);
};

export default Portfolio;
