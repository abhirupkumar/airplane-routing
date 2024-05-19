// src/Airplane.js
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Airplane = (props) => {
    const group = useRef();
    const obj = useLoader(OBJLoader, '/models/airplane.obj'); // Ensure this path is correct

    useEffect(() => {
        obj.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ color: 'gray' });
            }
        });
    }, [obj]);

    return <primitive object={obj} ref={group} {...props} />;
};

export default Airplane;
