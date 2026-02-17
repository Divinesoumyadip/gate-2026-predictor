"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

// ── Floating Tech Node (sphere + glow) ──────────────
function TechNode({
  position,
  color,
  size = 0.15,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
    if (glowRef.current) {
      glowRef.current.rotation.z = -state.clock.elapsedTime * speed * 0.2;
      const s = 1 + Math.sin(state.clock.elapsedTime * speed) * 0.08;
      glowRef.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position}>
        {/* Core sphere */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[size, 1]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>
        {/* Outer glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[size * 1.8, 8, 8]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.06}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ── Gear Mesh (Mechanical theme) ──────────────────────
function GearMesh({
  position,
  radius = 0.5,
  color = "#F59E0B",
  speed = 1,
}: {
  position: [number, number, number];
  radius?: number;
  color?: string;
  speed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Build gear shape
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const teeth = 12;
    const innerR = radius * 0.6;
    const outerR = radius;
    const toothH = radius * 0.25;

    for (let i = 0; i < teeth * 2; i++) {
      const angle = (i / (teeth * 2)) * Math.PI * 2;
      const r = i % 2 === 0 ? outerR + toothH : outerR;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) s.moveTo(x, y);
      else s.lineTo(x, y);
    }
    s.closePath();
    return s;
  }, [radius]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * speed * 0.4;
    }
  });

  return (
    <Float speed={0.5} floatIntensity={0.4}>
      <group ref={groupRef} position={position}>
        <mesh>
          <extrudeGeometry
            args={[shape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 }]}
          />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Hub */}
        <mesh>
          <cylinderGeometry args={[radius * 0.25, radius * 0.25, 0.15, 16]} />
          <meshStandardMaterial color="#1A1A2E" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

// ── Connection Lines between nodes ───────────────────
function ConnectionLines() {
  const nodes = useMemo(
    () => [
      new THREE.Vector3(-3, 1.5, -1),
      new THREE.Vector3(-1.5, -1, -2),
      new THREE.Vector3(2, 2, -1.5),
      new THREE.Vector3(3, -1, -1),
      new THREE.Vector3(0, -2, -2),
      new THREE.Vector3(1.5, 0.5, -3),
    ],
    []
  );

  const lines = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 4) pairs.push([nodes[i], nodes[j]]);
      }
    }
    return pairs;
  }, [nodes]);

  return (
    <>
      {lines.map((pair, i) => {
        const points = [pair[0], pair[1]];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#00F5FF"
              transparent
              opacity={0.15}
            />
          </line>
        );
      })}
    </>
  );
}

// ── Floating Data Particles ──────────────────────────
function DataParticles({ count = 80 }) {
  const points = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#00F5FF"),
      new THREE.Color("#8B5CF6"),
      new THREE.Color("#F59E0B"),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// ── Main 3D Scene Component ──────────────────────────
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.1} />
      <pointLight position={[-4, 4, 2]} intensity={2} color="#00F5FF" />
      <pointLight position={[4, -2, 2]} intensity={1.5} color="#8B5CF6" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#F59E0B" />

      {/* Background stars */}
      <Stars radius={30} depth={10} count={400} factor={1.5} saturation={0.3} fade />

      {/* Tech nodes (CSE/DA theme) */}
      <TechNode position={[-3, 1.5, -1]} color="#00F5FF" size={0.18} speed={1.2} />
      <TechNode position={[-1.5, -1, -2]} color="#8B5CF6" size={0.14} speed={0.9} />
      <TechNode position={[2, 2, -1.5]} color="#00F5FF" size={0.12} speed={1.5} />
      <TechNode position={[3, -1, -1]} color="#8B5CF6" size={0.2} speed={0.8} />
      <TechNode position={[0, -2, -2]} color="#00F5FF" size={0.1} speed={1.1} />
      <TechNode position={[1.5, 0.5, -3]} color="#8B5CF6" size={0.16} speed={1.3} />

      {/* Mechanical gears */}
      <GearMesh position={[-4, -2, -3]} radius={0.6} color="#F59E0B" speed={0.5} />
      <GearMesh position={[4.5, 2.5, -4]} radius={0.4} color="#F59E0B" speed={-0.7} />
      <GearMesh position={[-1, 3, -4]} radius={0.3} color="#F59E0B" speed={1.2} />

      {/* Connections */}
      <ConnectionLines />

      {/* Particle field */}
      <DataParticles count={100} />
    </>
  );
}

// ── Exported Canvas Wrapper ──────────────────────────
export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
