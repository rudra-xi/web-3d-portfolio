import React from "react";
import { styles } from "../style"; // Importing custom styles
import { motion } from "framer-motion"; // Importing motion for animations
import { DroneCanvas } from "./Canvas"; // Importing DroneCanvas component

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			{/* Container for the main content with padding and positioning */}
			<div
				className={`${styles.paddingX} absolute inset-0 top-[95px] max-w-7xl mx-auto flex flex-row items-start gap-6`}
			>
				{/* Decorative element with a gradient line */}
				<div className="flex flex-col justify-center items-center mt-2">
					<div className="w-4 h-4 rounded-full bg-primary" />{" "}
					{/* Small circle */}
					<div className="w-1 sm:h-80 h-40 hero-gradient" />{" "}
					{/* Gradient line */}
				</div>

				{/* Text content */}
				<div>
					<h1 className={styles.heroHeadText}>
						Hi, I'm {""}
						<span className="text-primary font-bold">
							Goutam
						</span>
						<span className="text-white-100">.</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2`}>
						A Web Developer with a flair for innovation.
						<span className="sm:block hidden">
							I design dynamic, responsive websites with{" "}
							<br /> cutting-edge tech and excellent user
							experience.
						</span>
					</p>
				</div>
			</div>

			{/* Canvas component for the 3d drone model */}
			<DroneCanvas />

			{/* Scroll indicator */}
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[30px] h-[60px] rounded-2xl border-2 border-white-100 flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 25, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "loop",
								ease: "backInOut",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1 opacity-50"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
