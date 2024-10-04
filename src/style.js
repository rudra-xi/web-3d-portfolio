const styles = {
	// Padding for X-axis: small screens (px-10), default (px-4)
	paddingX: "sm:px-10 px-4",
	// Padding for Y-axis: small screens (py-16), default (py-6)
	paddingY: "sm:py-16 py-6",
	// Combined padding for X and Y axes: small screens (px-16, py-16), default (px-6, py-10)
	padding: "sm:px-16 px-6 sm:py-16 py-10",

	// Hero section main heading text tailwind css styles
	heroHeadText:
		"font-bold text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[70px] mt-5",
	// Hero section subheading text tailwind css styles
	heroSubText:
		"text-white-100 lg:text-[25px] sm:text-[20px] xs:text-[16px] text-[14px] lg:leading-[35px]",

	// Section heading text tailwind css styles
	sectionHeadText:
		"text-primary font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-wider",
	// Section subheading text tailwind css styles
	sectionSubText:
		"sm:text-[18px] text-[14px] text-secondary uppercase tracking-[0.5rem] font-semibold",

	// Contact form input text tailwind css styles
	contactInputText:
		"bg-tertiary py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none",
	// Contact form label text tailwind css styles
	contactLabelText:
		"text-white font-semibold tracking-widest mb-3",
};

// Exporting the styles object for use in other parts of the application
export { styles };
