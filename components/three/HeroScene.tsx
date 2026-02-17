"use client";
import React, { useMemo } from 'react';
import * as THREE from 'three';

const HeroScene = () => {
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 8; i++) {
      temp.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      ));
    }
    return temp;
  }, []);

  const lines = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 12) {
          pairs.push([nodes[i], nodes[j]]);
        }
      }
    }
    return pairs;
  }, [nodes]);

  return (
    <>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial color="#00F5FF" wireframe transparent opacity={0.3} />
        </mesh>
      ))}
      {lines.map((pair, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(pair);
        return (
          /* @ts-ignore */
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#00F5FF" transparent opacity={0.1} />
          </line>
        );
      })}
    </>
  );
};

export default HeroScene;
