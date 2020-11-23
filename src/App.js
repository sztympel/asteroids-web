import './App.css';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Ground } from './components/Ground';
import { Ship } from './components/Ship';
import { Stars } from '@react-three/drei';

const App = () => {
  return (
    <Canvas style={{ background: 'black' }}>
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <Suspense fallback={null}>
        <Ship />
      </Suspense>
      <Ground />
      <Stars />
    </Canvas>
  );
};

export default App;
