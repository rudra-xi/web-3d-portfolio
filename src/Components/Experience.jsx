import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Importing necessary components from the vertical timeline library
import { motion } from "framer-motion"; // Importing motion for animations
import "react-vertical-timeline-component/style.min.css"; // Importing the CSS for the vertical timeline

import { styles } from "../style"; // Importing custom styles
import { experiences } from "../Constants"; // Importing experiences data
import { SectionWrapper } from "../HOC"; // Importing higher-order component for section wrapping
import { textVariant } from "../Utils/motion"; // Importing text animation variants

// Component to render each experience card
const ExperienceCard = ({ experiences }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#26113C", color: "#fff" }} // Styling the content of the timeline element
			contentArrowStyle={{ borderRight: "8px solid #ff008a" }} // Styling the arrow of the content
			date={experiences.date} // Displaying the date of the experience
			iconStyle={{ background: experiences.iconBg }} // Styling the icon background
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experiences.icon} // Displaying the company icon
						alt={experiences.company_name} // Alt text for the icon
						className="w-[70%] h-[70%] object-contain" // Styling the icon
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-secondary text-[24px] font-semibold">
					{experiences.title}{" "}
					{/* // Displaying the title of the experience */}
				</h3>
				<p
					className="text-secondary text-[16px]"
					style={{ margin: 0 }}
				>
					{experiences.company_name}
				</p>{" "}
				{/* // Displaying the company name */}
				<ul style={{listStyleType: 'square'}} className="mt-5 ml-5 space-y-2">
					{experiences.points.map((point, idx) => (
						<li
							key={`experience-point-${idx}`} // Unique key for each point
							className="text-white-100 text-[15px] pl-1 tracking-tight"
						>
							{point} {/* // Displaying each point of the experience */}
						</li>
					))}
				</ul>
			</div>
		</VerticalTimelineElement>
	);
};

// Main Experience component to render the timeline
const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					What I have done so far{" "}
					{/*// Subheading for the section*/}
				</p>
				<h2 className={styles.sectionHeadText}>
					Work Showcase<span className="text-white-100">.</span>{" "}
				</h2>{" "}
				{/* // Main heading for the section */}
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, idx) => (
						<ExperienceCard
							key={idx} // Unique key for each experience card
							experiences={experience} // Passing experience data to the card
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work"); // Wrapping the Experience component with the SectionWrapper HOC
