import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Ship = () => {
  const { scene } = useLoader(GLTFLoader, '/ship.glb');

  return (
    <group position={[0, -5, -20]} rotation={[0, 1.57, 0.5]} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};
