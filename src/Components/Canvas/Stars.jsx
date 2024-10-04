import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Component to create and animate stars
const Stars = (props) => {
	// Reference to the Points component
	const ref = useRef();
	// Generate random positions for stars within a sphere
	const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

	// Rotate the stars on each frame
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / -20;
	});

	return (
		// Group to apply initial rotation to the stars
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled
				{...props}
			>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

// Main component to render the canvas with stars
const StarsCanvas = () => {
	return (
		// Full-screen div to hold the canvas
		<div className="w-full h-auto absolute inset-0 -z-10">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
