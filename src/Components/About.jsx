// Importing necessary modules and components
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

// Importing utility functions and constants
import { fadeIn, textVariant } from "../Utils/motion";
import { about, services } from "../Constants/";
import { styles } from "../style";
import { SectionWrapper } from "../HOC/index";

// CoreCard component to display individual service cards
const CoreCard = ({ idx, title, icon }) => {
	return (
		<Tilt
			options={{ max: 45, scale: 1, Speed: 450 }} // Tilt effect options
			className="xs:w-[250px] w-full"
		>
			<motion.div
				variants={fadeIn("right", "spring", 1 * idx, 0.75)} // Animation variants
				className="w-full intro-card-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img
						src={icon} // Icon for the service
						alt={title}
						className="w-[80px] h-[80px] object-contain"
					/>
					<h3 className="text-white text-[18px] font-bold text-center tracking-wider">
						{title} {/* // Title of the service */}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

// About component to display the introduction and services
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={`${styles.sectionHeadText}`}>
					Overview<span className="text-white-100">.</span>
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)} // Animation for the paragraph
				className="mt-4 text-white-100 text-[17px] max-w-3xl leading-[25px] tracking-wide"
			>
				 {about} {/*// About text content */}
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((services, idx) => (
					<CoreCard
						key={services.title} // Unique key for each service
						index={idx} // Index of the service
						{...services} // Spread operator to pass all service properties
					/>
				))}
			</div>
		</>
	);
};

// Exporting the About component wrapped with SectionWrapper HOC
export default SectionWrapper(About, "about");
