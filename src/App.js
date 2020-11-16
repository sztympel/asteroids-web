import './App.css';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Ground } from './components/Ground';
import { Stars } from '@react-three/drei';

const App = () => {
  return (
    <Canvas style={{ background: 'black' }}>
      <Ground />
      <Stars />
    </Canvas>
  );
};

export default App;
