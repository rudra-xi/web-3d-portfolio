import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Ball component to render a 3D ball with a decal texture
const Ball = (props) => {
	// Load the decal texture from the provided image URL
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={2} rotationIntensity={1} floatIntensity={2}>
			{/* Ambient light to illuminate the scene */}
			<ambientLight intensity={0.8} />
			{/* Directional light to cast shadows */}
			<directionalLight position={[0, 0, 0.9]} />
			{/* Mesh to create the 3D ball */}
			<mesh castShadow receiveShadow scale={2.7}>
				{/* Icosahedron geometry for the ball shape */}
				<icosahedronGeometry args={[1, 3]} />
				{/* Standard material with flat shading and polygon offset */}
				<meshStandardMaterial
					color="#3b1565"
					polygonOffset
					polygonOffsetFactor={5}
					flatShading
				/>
				{/* Decal to apply the texture on the ball */}
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={[0.8, 0.8, 0.8]}
					flatShading
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

// BallCanvas component to render the Ball component within a Canvas
const BallCanvas = ({ icon }) => {
	return (
		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: false }}>
			{/* Suspense to show a loader while the Ball component is loading */}
			<Suspense fallback={<CanvasLoader />}>
				{/* OrbitControls to enable user interaction with the 3D scene */}
				<OrbitControls enableZoom={false} />
				{/* Render the Ball component with the provided icon */}
				<Ball imgUrl={icon} />
			</Suspense>
			{/* Preload all assets for better performance */}
			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
