import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Component to load and render the 3D model
const Mech = () => {
	// Load the GLTF model
	const mech = useGLTF("./contact-model/scene.gltf");

	return (
		<mesh>
			{/* Add a hemisphere light to illuminate the scene */}
			<hemisphereLight intensity={0.5} groundColor="black" />
			{/* Add a point light to cast shadows */}
			<pointLight castShadow intensity={0.6} />

			{/* Add a spotlight with specific properties */}
			<spotLight
				position={[-25, 10, 10]}
				angle={-1}
				penumbra={2}
				intensity={3}
				scale={10}
				castShadow
				shadow-mapSize={10}
			/>
			{/* Add another spotlight */}
			<spotLight position={[20, 15, -10]} scale={10} />
			{/* Render the loaded GLTF model */}
			<primitive object={mech.scene} scale={2} position-y={-1.65} />
		</mesh>
	);
};

// Main component to set up the canvas and render the Mech component
const MechCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 0, 5],
				scale: 50,
			}}
		>
			{/* Use Suspense to show a loader while the model is being loaded */}
			<Suspense fallback={<CanvasLoader />}>
				{/* Add orbit controls to allow rotating the model */}
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				{/* Render the Mech component */}
				<Mech />
			</Suspense>
			{/* Preload all assets */}
			<Preload all />
		</Canvas>
	);
};

export default MechCanvas;
