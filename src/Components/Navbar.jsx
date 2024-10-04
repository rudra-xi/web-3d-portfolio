import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style"; // Import styles for consistent look and feel

import { navLinks } from "../Constants"; // Import navigation link data
import { logo, menu, close } from "../Assets"; // Import logo, menu, and close icons

const Navbar = () => {
	// State variables for active link and toggle menu visibility
	const [active, setActive] = useState(""); // Tracks currently active link
	const [toggle, setToggle] = useState(false); // Controls mobile menu display

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-tertiary`}
		>
			{/* Container for logo and navigation links */}
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive(""); // Reset active link on logo click
						window.scrollTo(0, 0); // Scroll to top on logo click
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-10 h-10 object-contain"
					/>
					<p className="text-white text-[20px] font-semibold cursor-pointer flex">
						Goutam Prasad{" "}
						<span className="sm:block hidden">
							&#160;|&#160;
						</span>
						<span className="sm:block hidden text-primary">
							Bit Alchemist
						</span>
					</p>
				</Link>

				{/* Desktop navigation links */}
				<ul className="list-none hidden sm:flex flex-row gap-6">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "text-white"
									: "text-secondary"
							} hover:text-white text-[16px] cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							{/* Use Link for internal navigation */}
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				{/* Mobile menu toggle button */}
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[20px] h-[20px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>

					{/* Mobile menu content (conditionally rendered based on toggle state) */}
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 bg-gradient-to-br purple-card-gradient absolute top-20 right-0 mx-5 my-2 min-w[140px] z-10 rounded-2xl`}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-3">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-white"
											: "text-secondary"
									} cursor-pointer text-[15px]`}
									onClick={() => {
										setToggle(!toggle); // Close menu on link click
										setActive(link.title); // Update active link
									}}
								>
									{/* Use Link for internal navigation */}
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
