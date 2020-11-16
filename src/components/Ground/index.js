import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const GROUND_HEIGHT = -50;
const SPEED = 0.2;

export const Ground = () => {
  const terrain = useRef();

  useFrame(() => {
    terrain.current.position.z += SPEED;
  });

  return (
    <mesh
      visible
      position={[0, GROUND_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={terrain}
    >
      <planeBufferGeometry attach='geometry' args={[5000, 5000, 128, 128]} />
      <meshStandardMaterial
        attach='material'
        color='white'
        emissive='white'
        roughness={1}
        metalness={0}
        wireframe
      />
    </mesh>
  );
};
