// Importing necessary components from @react-three/drei
import { Html, useProgress } from "@react-three/drei";

// Defining the Loader component
const Loader = () => {
	// Using the useProgress hook to get the current loading progress
	const { progress } = useProgress();

	return (
		// Html component to render HTML elements in the 3D scene
		<Html>
			{/* Span element for the loader animation */}
			<span className="canvas-loader"></span>
			{/* Paragraph element to display the loading progress percentage */}
			<p className="text-[16px] text-white-100 font-medium mt-40 tracking-[0.5rem]">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

// Exporting the Loader component as the default export
export default Loader;
