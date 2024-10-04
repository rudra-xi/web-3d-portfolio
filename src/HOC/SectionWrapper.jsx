// Importing the motion component from the framer-motion library
import { motion } from "framer-motion";

// Importing custom styles
import { styles } from "../style";

// Importing a utility function for staggered animation effects
import { staggerEffect } from "../Utils/motion";

// Higher Order Component (HOC) to wrap sections with motion effects
const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			// Applying motion effects to the section element
			<motion.section
				// Setting up the stagger effect with specific parameters
				variants={staggerEffect(0.1, 0, 0.5, "easeInOut")}
				// Initial animation state
				initial="hidden"
				// Animation state when the section is in view
				whileInView="show"
				// Viewport settings to trigger the animation once and when 50% of the section is in view
				viewport={{ once: true, amount: 0.5 }}
				// Applying custom styles and setting up the section layout
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				{/* Invisible span for anchoring the section with an ID */}
				<span className="hash-span" id={idName}>
					 
				</span>

				{/* Rendering the passed component */}
				<Component />
			</motion.section>
		);
	};

// Exporting the HOC for use in other parts of the application
export default SectionWrapper;
