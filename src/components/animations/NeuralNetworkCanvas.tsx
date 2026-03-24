"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Nodes({ count = 80 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 12,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.003,
        vy: (Math.random() - 0.5) * 0.003,
        vz: (Math.random() - 0.5) * 0.002,
      });
    }
    return pos;
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const connectionThreshold = 2.5;

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < count; i++) {
      const p = positions[i];
      p.x += p.vx + mouseRef.current.x * 0.001;
      p.y += p.vy + mouseRef.current.y * 0.001;
      p.z += p.vz;

      // Boundary bounce
      if (Math.abs(p.x) > 6) p.vx *= -1;
      if (Math.abs(p.y) > 4) p.vy *= -1;
      if (Math.abs(p.z) > 3) p.vz *= -1;

      dummy.position.set(p.x, p.y, p.z);
      const scale = 0.03 + Math.random() * 0.01;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Connections
      for (let j = i + 1; j < count; j++) {
        const q = positions[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dz = p.z - q.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionThreshold) {
          const alpha = 1 - dist / connectionThreshold;
          linePositions.push(p.x, p.y, p.z, q.x, q.y, q.z);
          lineColors.push(0.23, 0.51, 0.96, alpha * 0.4, 0.02, 0.71, 0.83, alpha * 0.3);
        }
      }
    }

    meshRef.current.instanceMatrix.needsUpdate = true;

    const geom = linesRef.current.geometry;
    geom.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    geom.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 4));
    geom.attributes.position.needsUpdate = true;
    geom.attributes.color.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.8} />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent blending={THREE.AdditiveBlending} />
      </lineSegments>
    </>
  );
}

function FloatingOrbs() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0} floatIntensity={1.5}>
        <mesh position={[3, -1.5, -1]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0} floatIntensity={3}>
        <mesh position={[5, 2.5, -3]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
        </mesh>
      </Float>
    </>
  );
}

export default function NeuralNetworkCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Nodes count={80} />
        <FloatingOrbs />
      </Canvas>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-neo-black/40 via-transparent to-neo-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-neo-black/60 via-transparent to-neo-black/60 pointer-events-none" />
    </div>
  );
}
