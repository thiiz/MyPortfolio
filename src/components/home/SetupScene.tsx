"use client";

import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import * as THREE from "three";
import { useRef } from "react";

interface SetupSceneProps {
  scrollProgress: MotionValue<number>;
}

export function SetupScene({ scrollProgress }: SetupSceneProps) {
  const { scene } = useGLTF("/gaming_setup_v2_low-poly.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const progress = scrollProgress.get();

    // Smooth interpolation
    // Initial state (progress 0): Zoomed in on monitor
    // We assume the monitor is roughly at (0, 1, 0) or similar.
    // We'll position camera at (0, 1.2, 0.6) looking at (0, 1.2, 0)

    // Final state (progress 1): Zoomed out showing full setup
    // Camera at (0, 2, 4) looking at (0, 1, 0)

    const startPos = new THREE.Vector3(0, 1.25, 0.6);
    const endPos = new THREE.Vector3(0, 1.5, 4);

    const currentPos = new THREE.Vector3().lerpVectors(startPos, endPos, progress);

    state.camera.position.copy(currentPos);

    // Look target also might need slight adjustment
    const startLook = new THREE.Vector3(0, 1.25, 0);
    const endLook = new THREE.Vector3(0, 1, 0);
    const currentLook = new THREE.Vector3().lerpVectors(startLook, endLook, progress);

    state.camera.lookAt(currentLook);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Environment preset="city" />
      <group ref={modelRef} position={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
      <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
    </>
  );
}
