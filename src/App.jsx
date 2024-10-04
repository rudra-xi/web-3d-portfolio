// Importing BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";

// Importing all the components used in the app
import {
	Navbar,
	Hero,
	About,
	Experience,
	Tech,
	Works,
	Feedbacks,
	Contact,
	StarsCanvas,
	Footer,
} from "./Components";

function App() {
	return (
		<BrowserRouter>
			{/* Main container with a relative position and tertiary background color */}
			<div className="relative z-0 bg-tertiary">
				{/* Hero section with background pattern */}
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				{/* Contact section with stars canvas and footer */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />{" "}
					{/* Background stars animation component */}
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App; // Exporting the App component as default
