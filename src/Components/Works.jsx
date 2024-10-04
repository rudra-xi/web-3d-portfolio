// Importing necessary modules and components
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../Assets";
import { SectionWrapper } from "../HOC";
import { work, projects } from "../Constants";
import { fadeIn, textVariant } from "../Utils/motion";

// ProjectCard component to display individual project details
const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		// Motion div for animation effects
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			{/* Tilt effect for the project card */}
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="bg-black-200 p-3 rounded-2xl sm:w-[360px] w-full"
			>
				{/* Project image section */}
				<div className="relative w-full h-[200px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					{/* GitHub link icon */}
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() =>
								window.open(source_code_link, "_blank")
							}
							className="bg-black-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="github"
								className="w-8 h-8 object-cover"
							/>
						</div>
					</div>
				</div>
				{/* Project name and description */}
				<div className="mt-5">
					<h3 className="text-secondary font-semibold text-[20px] tracking-widest uppercase">
						{name}
					</h3>
					<p className="mt-2 text-white-100 text-[14px]">
						{description}
					</p>
				</div>
				{/* Project tags */}
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={tag.name}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

// Works component to display all projects
const Works = () => {
	return (
		<>
			{/* Section header */}
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My Works</p>
				<h2 className={styles.sectionHeadText}>Projects<span className="text-white-100">.</span></h2>
			</motion.div>
			{/* Description of works */}
			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-white-100 text-[17px] max-w-3xl leading-[25px]"
				>
					{work}
				</motion.p>
			</div>
			{/* Displaying all project cards */}
			<div className="mt-20 flex flex-wrap gap-5">
				{projects.map((project, idx) => (
					<ProjectCard
						key={`project-${idx}`}
						index={idx}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

// Exporting the Works component wrapped with SectionWrapper HOC
export default SectionWrapper(Works, "projects");
