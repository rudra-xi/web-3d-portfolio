// Importing various assets from the Assets directory
import {
	logo,
	reactDev,
	creator,
	graphic,
	webDev,
	css,
	git,
	html,
	javascript,
	nodejs,
	reactjs,
	tailwind,
	threejs,
	illustrator,
	photoshop,
	framermotion,
	gsap,
	vitejs,
	smoke,
	aurora,
	luminaLuxe,
	fiverr,
	ananya,
	arjun,
	neha,
	FaGithub,
	FaInstagram,
	FaYoutube,
} from "../Assets";

// Navigation links for the website
export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
	{
		id: "social",
		title: "Social",
	},
];

// About section content
const about = [
	"Welcome to my realm of dynamic web design, where modern art seamlessly integrates with cutting-edge technology. Combining web development expertise, graphic design finesse, and content creation prowess, I bring ideas to life as visually stunning and highly functional websites. My passion is in blending contemporary art styles with flawless user experiences, ensuring each project is not just a website, but a digital masterpiece. And yes, I assure you, my code is cleaner than my desk!",
];

// Services offered with corresponding icons
const services = [
	{
		title: "Web Developer",
		icon: webDev,
	},
	{
		title: "React Developer",
		icon: reactDev,
	},
	{
		title: "Graphic Artist",
		icon: graphic,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

// Technologies used with corresponding icons
const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Vite JS",
		icon: vitejs,
	},
	{
		name: "GSAP",
		icon: gsap,
	},
	{
		name: "Framer Motion",
		icon: framermotion,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Adobe Photoshop",
		icon: photoshop,
	},
	{
		name: "Adobe Illustrator",
		icon: illustrator,
	},
];

// Experiences details
const experiences = [
	{
		title: "Junior Designer",
		company_name: "Fiverr: Urban Threads Boutique",
		icon: fiverr,
		iconBg: "#383e56",
		date: "August 2021 - January 2022",
		points: [
			"Created a refreshed brand identity with an innovative logo, trendy color palette, and typography guidelines. Designed promotional materials for festive campaigns, contributing to successful holiday sales.",
			"Developed innovative packaging designs, yielding a 17% sales boost. Designed in-store promotions and events collateral, boosting client engagement by 22%.",
			"Developed engaging graphics for various social media platforms, boosting follower interaction and online footprint by 27%.",
		],
	},
	{
		title: "Self-Taught Enthusiast",
		company_name: "",
		icon: logo,
		iconBg: "#383e56",
		date: "November 2023 - Ongoing",
		points: [
			"Dedicated to mastering front-end technologies through independent study and hands-on practice. Proficient in HTML, CSS, JavaScript, React JS, Tailwind CSS, GSAP, Framer Motion, Node JS, Git, and Three JS.",
			"Showcases a range of projects demonstrating the ability to design and develop engaging webpages. 8 years of experience with Adobe Photoshop and Illustrator, providing a strong foundation in visual design and user interface creation.",
			"Eager to contribute to a collaborative team and continuously expand front-end development knowledge.",
		],
	},
];

// Description for the work section
const work = [
	"The projects highlighted here demonstrate my expertise and experience through practical examples of my work. Each project includes a concise description along with links to the code repositories and live demos. These examples showcase my proficiency in tackling complex challenges, utilizing various technologies, and efficiently managing projects. Additionally, they reflect my commitment to continuous learning and innovation in front-end development.",
];

// Projects with their description and links
const projects = [
	{
		name: "Countdown Reveal Animation",
		description:
			"A minimalist and artistic landing page for a photography agency, featuring a bold purple title in modern typography and a captivating smoke-themed hero image.",
		tags: [
			{
				name: "JavaScript",
				color: "blue-text-gradient",
			},
			{
				name: "GSAP",
				color: "green-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient",
			},
		],
		image: smoke,
		source_code_link:
			"https://github.com/goutam-prasad-27/countdown-reveal-animation.git",
	},
	{
		name: "Aurora Crystal Shop",
		description:
			"The landing page for 'Aurora Crystals Shop' features a airy background with elegant fonts. The title uses a stylish, larger font, while the navigation and description text are clean and readable, ensuring a minimalistic look.",
		tags: [
			{
				name: "React JS",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "green-text-gradient",
			},
			{
				name: "GSAP",
				color: "pink-text-gradient",
			},
		],
		image: aurora,
		source_code_link:
			"https://github.com/goutam-prasad-27/aurora-crystals-shop.git",
	},
	{
		name: "Lumina Luxe Fashion",
		description:
			"A sleek, modern fashion agency web page built with Vite, React, and Tailwind CSS, showcasing 'Lumina Luxe' with a sophisticated, minimalist design.",
		tags: [
			{
				name: "React JS",
				color: "blue-text-gradient",
			},
			{
				name: "Vite JS",
				color: "pink-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "green-text-gradient",
			},
		],
		image: luminaLuxe,
		source_code_link:
			"https://github.com/goutam-prasad-27/Lumina-luxe-fashion.git",
	},
];

// Testimonials of clients and their images
const testimonials = [
	{
		testimonial:
			"I thought it was impossible to find a Designer who truly cares about their clients’ success, but Goutam proved me wrong.",
		name: "Neha Singh",
		designation: "Customer Relations Specialist",
		company: "Sweet Symphony Confectionery",
		image: neha,
	},
	{
		testimonial:
			"We thought a dramatic improvement in our brand’s visual identity was impossible, but after Goutam redesigned our graphics, our engagement increased by 40%. We can’t thank them enough!",
		name: "Arjun Verma",
		designation: "Fashion Designer",
		company: "Urban Threads Boutique.",
		image: arjun,
	},
	{
		testimonial:
			"I thought it was impossible to create graphics as beautiful as our pastry, but Goutam proved me wrong.",
		name: "Ananya Sharma",
		designation: "Pastry Chef",
		company: "Sweet Symphony Confectionery",
		image: ananya,
	},
];

// Social icons with their links
const social = [
	{
		href: "https://github.com/goutam-prasad-27",
		icon: <FaGithub fontSize={30} className="hover:text-primary transition delay-100 ease-in" />,
	},
	{
		href: "https://www.instagram.com/bit.alchemist?igsh=b2J0ZDEwYmNxam1w",
		icon: <FaInstagram fontSize={30} className="hover:text-primary transition delay-100 ease-in" />,
	},
	{
		href: "https://youtube.com/@bitalchemist?si=gHuX-OmcnO8wgyx9",
		icon: <FaYoutube fontSize={30} className="hover:text-primary transition delay-100 ease-in" />,
	},
];

// Exporting everything
export {
	about,
	services,
	technologies,
	experiences,
	work,
	projects,
	testimonials,
	social,
};
