// src/Globe.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Stars } from '@react-three/drei';
import Airplane from './Airplane';  // Ensure this is the correct path

const Globe = () => {
    const globeRef = useRef();
    const airplaneRef = useRef();
    const texture = useTexture('./earth-day.jpg');

    // Initial position of the airplane (starting from bottom)

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        globeRef.current.rotation.y = elapsedTime * 0.1;

        if (airplaneRef.current) {
            // Calculate position along a diagonal path from bottom right to top left
            const speed = 0.5; // Adjust speed as needed
            const x = Math.sin(elapsedTime * speed) * 2; // Adjust distance from globe
            const z = Math.cos(elapsedTime * speed) * 2; // Adjust distance from globe

            // Set the position of the airplane
            airplaneRef.current.position.set(x, 1.5, z);
            airplaneRef.current.lookAt(globeRef.current.position); // Ensure the airplane faces the globe
        }
    });

    return (
        <>
            <mesh ref={globeRef}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial map={texture} />
            </mesh>
            <group ref={airplaneRef} scale={[0.05, 0.05, 0.05]}>
                <Airplane />
            </group>
        </>
    );
};

const ResponsiveCanvas = ({ children }) => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            {children}
        </Canvas>
    );
};

const App = () => {
    return (
        <ResponsiveCanvas>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <Globe />
            <OrbitControls enableZoom={false} />
        </ResponsiveCanvas>
    );
};

export default App;
