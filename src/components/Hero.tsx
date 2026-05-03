"use client";

import { Canvas } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingTorus() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 4, 0.05);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 4, 0.05);
      group.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={group}>
      <Torus args={[2, 0.5, 32, 100]} rotation={[0, 0, 0]}>
        <meshPhysicalMaterial color="#FF5722" transmission={0.9} opacity={1} transparent roughness={0.1} thickness={2} />
      </Torus>
      <Torus args={[1.5, 0.3, 32, 100]} rotation={[Math.PI/2, 0, 0]}>
        <meshPhysicalMaterial color="#0F0F0F" transmission={0.9} opacity={1} transparent roughness={0.1} thickness={2} />
      </Torus>
      <Torus args={[2.5, 0.1, 32, 100]} rotation={[0, Math.PI/2, 0]}>
        <meshPhysicalMaterial color="#D4D0C5" transmission={0.9} opacity={1} transparent roughness={0.1} thickness={2} />
      </Torus>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--color-background)] flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <RotatingTorus />
        </Canvas>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-[90vw]">
        <h1 className="font-display text-[10vw] font-bold leading-[0.9] tracking-tighter text-[var(--color-surface)] mix-blend-difference">
          WE BUILD <br />
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px var(--color-primary)",
            } as React.CSSProperties}
          >
            DYNAMIC
          </span>{" "}
          SYSTEMS.
        </h1>
        
        <button className="mt-12 bg-[var(--color-primary)] text-[var(--color-surface)] border-2 border-[var(--color-surface)] px-8 py-4 font-mono font-bold text-lg tracking-widest uppercase hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition-colors duration-300 shadow-[8px_8px_0px_var(--color-surface)]">
          [INITIALIZE_PROJECT]
        </button>
      </div>
    </section>
  );
}
