/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit", // Enable Just-In-Time mode for faster builds
	theme: {
		extend: {
			colors: {
				// Custom colors for the theme
				"primary": "#ff008a",
				"secondary": "#ff6f61ff",
				"tertiary": "#190e25",
				"black-200": "#26113C", 
				"white-100": "#f3f3f3", 
			},
			boxShadow: {
				card: "0px 35px 120px -15px #1C1315", // Custom box shadow for cards
			},
			screens: {
				xs: "450px", // Custom screen size for extra small devices
			},
			backgroundImage: {
				"hero-pattern": "url('/src/Assets/portfolio-bg.jpg')", // Custom background image for hero section
			},
		},
	},
	plugins: [],
};
