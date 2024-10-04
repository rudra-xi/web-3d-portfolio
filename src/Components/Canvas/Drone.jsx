import { useEffect, useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Drone component to render the 3D model
const Drone = ({ isMobile }) => {
	// Load the 3D model using useGLTF hook
	const drone = useGLTF("./hero-model/scene.gltf");

	// Reference to the mesh for animation
	const ref = useRef();
	const hoverHeight = 0.3;

	// Animate the drone to hover up and down
	useFrame((state, delta) => {
		ref.current.position.y =
			hoverHeight * Math.sin(state.clock.elapsedTime * 0.5);
	});

	return (
		<mesh ref={ref}>
			{/* Lighting setup */}
			<hemisphereLight intensity={1.5} groundColor="black" />
			<pointLight intensity={5} position={[-5, -1, 0]} castShadow />
			<spotLight
				position={[1, 3, 5]}
				angle={15}
				penumbra={1}
				intensity={50}
				scale={5}
				castShadow
				shadow-mapSize={1024}
			/>
			{/* Render the 3D model */}
			<primitive
				object={drone.scene}
				scale={isMobile ? 1.15 : 1.55}
				position={isMobile ? [0, -1, 0] : [4, -0.5, 0]}
				rotation={isMobile ? [0, -1, 0] : [0, -0, 0]}
				castShadow
			/>
		</mesh>
	);
};

// Main component to render the canvas
const DroneCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if the screen width is less than 500px
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		// Set the initial state based on the media query
		setIsMobile(mediaQuery.matches);

		// Update the state when the media query changes
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Cleanup the event listener on component unmount
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				{/* Controls for orbiting the camera */}
				<OrbitControls
					enableZoom={false}
					autoRotate
					autoRotateSpeed={isMobile ? 0.5 : -0.5}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				{/* Render the Drone component */}
				<Drone isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default DroneCanvas;
