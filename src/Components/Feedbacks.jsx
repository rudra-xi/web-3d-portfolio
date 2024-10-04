import { motion } from "framer-motion"; // Importing motion component from framer-motion for animations
import { styles } from "../style"; // Importing styles from a styles module
import { SectionWrapper } from "../HOC"; // Importing a higher-order component for section wrapping
import { fadeIn, textVariant } from "../Utils/motion"; // Importing animation variants
import { testimonials } from "../Constants"; // Importing testimonials data

// FeedbackCard component to display individual testimonial cards
const FeedbackCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
}) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)} // Applying fadeIn animation with delay based on index
		className="purple-card-gradient p-10 rounded-3xl xs:w-[320px] w-full" // Styling the card
	>
		<p className="text-secondary font-bold text-[48px]">"</p> {/* Quotation mark for testimonial */}

		<div className="mt-1">
			<p className="text-white tracking-wider text-[18px]">
				{testimonial} {/* Displaying the testimonial text */}
			</p>

			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-gray-400 text-[16px]">
						<span className="blue-text-gradient">@</span>{" "}
						{name} {/* Displaying the name with a gradient */}
					</p>
					<p className="mt-1 orange-text-gradient text-[12px]">
						{designation} of <br />
						<span>
						{company} {/* Displaying the designation and company */}
						</span>
					</p>
				</div>

				<img
					src={image}
					alt={`feedback by ${name}`} // Alt text for the image
					className="w-10 h-10 rounded-full object-cover" // Styling the image
				/>
			</div>
		</div>
	</motion.div>
);

// Feedbacks component to display all testimonials
const Feedbacks = () => {
	return (
		<div className="mt-12 bg-black-200 rounded-[20px]"> {/* Container for the testimonials section */}
			<div
				className={`${styles.padding} bg-[#20003b] rounded-2xl h-[230px]`} // Styling the header section
			>
				<motion.div variants={textVariant()}> {/* Applying text animation */}
					<p className={styles.sectionSubText}>
						What others say {/* Subheading */}
					</p>
					<h2 className={styles.sectionHeadText}>
						Testimonials<span className="text-white-100">.</span> {/* Main heading */}
					</h2>
				</motion.div>
			</div>

			<div className={`${styles.padding} -mt-[6rem] flex flex-wrap gap-5`}> {/* Container for the testimonial cards */}
				{testimonials.map((testimonial, idx) => (
					<FeedbackCard
						key={testimonial.name} // Unique key for each testimonial
						index={idx} // Index for animation delay
						{...testimonial} // Spreading the testimonial data as props
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, ""); // Wrapping the Feedbacks component with SectionWrapper HOC
