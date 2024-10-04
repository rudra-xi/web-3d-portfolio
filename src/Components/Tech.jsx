// Importing the BallCanvas component from the canvas directory
import { BallCanvas } from "./Canvas";

// Importing the SectionWrapper higher-order component (HOC) from the HOC directory
import { SectionWrapper } from "../HOC";

// Importing the technologies array from the Constants directory
import { technologies } from "../Constants";

// Defining the Tech functional component
const Tech = () => {
	return (
		// Creating a flex container that wraps its children and centers them with a gap of 10 units
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{/* Mapping over the technologies array to render each technology */}
			{technologies.map((technology) => (
				// Each technology is wrapped in a div with specific width and height
				<div className="w-28 h-28" key={technology.name}>
					{/* Rendering the BallCanvas component with the technology's icon */}
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

// Exporting the Tech component wrapped with the SectionWrapper HOC
export default SectionWrapper(Tech, "");
