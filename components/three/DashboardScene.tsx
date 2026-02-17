"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function Torus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#00F5FF"
        emissive="#00F5FF"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.1}
        wireframe={false}
      />
    </mesh>
  );
}

function Ring({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
      ref.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.015, 8, 64]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
    </mesh>
  );
}

export function DashboardScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#00F5FF" />
      <pointLight position={[-3, -3, 3]} intensity={1.5} color="#8B5CF6" />

      <Stars radius={20} depth={8} count={200} factor={1} fade />

      <Torus />
      <Ring radius={2.2} speed={0.3} color="#00F5FF" />
      <Ring radius={2.8} speed={-0.2} color="#8B5CF6" />
      <Ring radius={3.5} speed={0.15} color="#F59E0B" />
    </Canvas>
  );
}
