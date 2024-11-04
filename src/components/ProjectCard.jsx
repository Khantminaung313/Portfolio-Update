const ProjectCard = ({ project }) => {
	return (
		<div>
			<a href={project.url} target="_blank">
				<div className="p-1 border rounded shadow-lg hover:shadow-soft_blue overflow-hidden group relative">
					<div className="absolute w-[50%] lg:w-[0] h-full bg-gradient-to-r top-0 left-0 from-soft_blue via-tint_blue transition-all duration-300 ease-linear group-hover:w-[50%]"></div>
					<div className="relative">
						<figure className="aspect-[5/3]">
							<img
								className="w-full h-full object-cover object-center"
								src={project.thumbnail}
								alt={project.title}
							/>
						</figure>
						<div className="absolute w-full h-full left-0 top-0 opacity-0 bg-gradient-to-t from-15% from-black/80 transition-all duration-500 ease-linear group-hover:opacity-100 place-content-end p-4">
							<p className="line-clamp-3 text-xs text-white">
								{project.intro}
							</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ProjectCard;
