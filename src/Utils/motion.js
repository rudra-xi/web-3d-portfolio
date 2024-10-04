// Function to create a text animation variant with a delay
export const textVariant = (delay) => {
	return {
		hidden: {
			y: -50, // Initial position (50 units above)
			opacity: 0, // Initial opacity (invisible)
		},
		show: {
			y: 0, // Final position (original position)
			opacity: 1, // Final opacity (fully visible)
			transition: {
				type: "spring", // Type of transition (spring effect)
				duration: 1.25, // Duration of the transition
				delay: delay, // Delay before the transition starts
			},
		},
	};
};

// Function to create a fade-in animation variant
export const fadeIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Initial horizontal position based on direction
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // Initial vertical position based on direction
			opacity: 0, // Initial opacity (invisible)
		},
		show: {
			x: 0, // Final horizontal position (original position)
			y: 0, // Final vertical position (original position)
			opacity: 1, // Final opacity (fully visible)
			transition: {
				type: type, // Type of transition (e.g., spring, tween)
				delay: delay, // Delay before the transition starts
				duration: duration, // Duration of the transition
				ease: "easeOut", // Easing function for the transition
			},
		},
	};
};

// Function to create a slide-in animation variant
export const slideIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Initial horizontal position based on direction
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0, // Initial vertical position based on direction
		},
		show: {
			x: 0, // Final horizontal position (original position)
			y: 0, // Final vertical position (original position)
			transition: {
				type: type, // Type of transition (e.g., spring, tween)
				delay: delay, // Delay before the transition starts
				duration: duration, // Duration of the transition
				ease: "easeOut", // Easing function for the transition
			},
		},
	};
};

// Function to create a staggered animation effect
export const staggerEffect = (staggerChildren = 0.1, delayChildren = 0, duration = 0.5, ease = "easeInOut") => {
	return {
		hidden: { opacity: 0 }, // Initial opacity (invisible)
		show: {
			opacity: 1, // Final opacity (fully visible)
			transition: {
				staggerChildren: staggerChildren, // Time between the start of each child's animation
				delayChildren: delayChildren, // Delay before the children's animations start
				duration: duration, // Duration of the transition
				ease: ease, // Easing function for the transition
			},
		},
	};
};
