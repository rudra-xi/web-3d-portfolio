// Import necessary modules and components
import { motion } from "framer-motion"; // For animation
import { social } from "../Constants"; // Social media links and icons

import { SectionWrapper } from "../HOC"; // Higher Order Component for section wrapping
import { FaCopyright } from "react-icons/fa"; // Copyright icon from react-icons
import { slideIn } from "../Utils/motion"; // Slide-in animation utility

// Footer component definition
function Footer() {
	return (
		// Animated div with slide-in effect
		<motion.div variants={slideIn("down", "bounce", 0.2, 1)}>
			{/* Container for social media links */}
			<div className="flex items-center justify-center gap-14 ">
				{/* Map through social links and render each one */}
				{social.map((link, idx) => (
					<a className="bg-black-200 p-2 rounded-xl"
						key={idx} // Unique key for each link
						href={link.href} // URL of the social media link
						target="_blank" // Open link in a new tab
						rel="noopener noreferrer" // Security measure for external links
					>
						{link.icon} {/*// Social media icon*/}
					</a>
				))}
			</div>
			{/* Footer copyright information */}
			<div className="flex items-center justify-center pt-5 text-gray-400">
				<FaCopyright /> {" "}
				<p>
					{" "}
					Goutam Prasad | Bit Alchemist ~ Copyright 2024 ~ All
					rights reserved.{" "}
				</p>
			</div>
		</motion.div>
	);
}

// Export the Footer component wrapped with SectionWrapper HOC
export default SectionWrapper(Footer, "social");
