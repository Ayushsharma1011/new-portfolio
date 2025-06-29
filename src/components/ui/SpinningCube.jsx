import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4B9CD3" />
    </mesh>
  );
}

const SpinningCube = () => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        {/* Ambient light for basic visibility */}
        <ambientLight intensity={0.5} />

        {/* Directional light for shadows and depth */}
        <directionalLight position={[3, 2, 1]} intensity={1} />

        {/* Stage for better presentation */}
        <Stage environment="city" intensity={0.6}>
          <Cube />
        </Stage>

        {/* OrbitControls for slight interaction */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};

export default SpinningCube;
