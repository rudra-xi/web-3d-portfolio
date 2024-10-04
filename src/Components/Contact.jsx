import { useState, useRef } from "react"; // Importing necessary hooks from React
import { motion } from "framer-motion"; // Importing motion for animations
import emailjs from "@emailjs/browser"; // Importing emailjs for email functionality

import { styles } from "../style"; // Importing styles
import { MechCanvas } from "./Canvas"; // Importing MechCanvas component
import { SectionWrapper } from "../HOC"; // Importing SectionWrapper HOC
import { slideIn } from "../Utils/motion"; // Importing slideIn animation variant

const Contact = () => {
	const formRef = useRef(); // Creating a reference for the form
	const [form, setForm] = useState({ name: "", email: "", message: "" }); // State for form inputs
	const [loading, setLoading] = useState(false); // State for loading status

	// Function to handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// Sending email using emailjs
		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Goutam Prasad",
					from_email: form.email,
					to_email: "goutam.prasad.2707@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					alert(
						"Thank you! I’ll review your message and get back to you promptly."
					);
					setForm({ name: "", email: "", message: "" }); // Resetting form inputs
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Yikes! An error occurred.");
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-5 overflow-hidden">
			{/* Contact form section */}
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-200 p-5 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h2 className={styles.sectionHeadText}>
					Contact<span className="text-white-100">.</span>
				</h2>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-3 flex flex-col gap-3"
				>
					<label className="flex flex-col">
						<span className={styles.contactLabelText}>
							Your Name
						</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Enter your name."
							className={styles.contactInputText}
						/>
					</label>

					<label className="flex flex-col">
						<span className={styles.contactLabelText}>
							Your Email
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Enter your email."
							className={styles.contactInputText}
						/>
					</label>

					<label className="flex flex-col">
						<span className={styles.contactLabelText}>
							Your Message
						</span>
						<textarea
							rows="3"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What's on Your Mind?"
							className={styles.contactInputText}
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-10 outline-none w-fit text-secondary uppercase font-semibold shadow-md shadow-tertiary rounded-2xl"
					>
						{loading ? "Sending..." : "Send Now"}
					</button>
				</form>
			</motion.div>

			{/* Canvas section */}
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-[550px] md:h-[550px] h-[350px]"
			>
				<MechCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact"); // Wrapping Contact component with SectionWrapper HOC
