import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00ff88" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#00aaff" />
        
        {/* Floating geometric elements */}
        <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
          <FloatingCube position={[3, 2, -2]} scale={0.5} speed={0.8} />
        </Float>
        
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.7}>
          <FloatingCube position={[-3, -1, -3]} scale={0.3} speed={1.2} />
        </Float>
        
        <Float speed={0.8} rotationIntensity={0.8} floatIntensity={0.3}>
          <FloatingCube position={[2, -2, -1]} scale={0.4} speed={0.6} />
        </Float>

        <Float speed={1.2} rotationIntensity={1.2} floatIntensity={0.6}>
          <FloatingCube position={[-2, 3, -4]} scale={0.6} speed={1.0} />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
};