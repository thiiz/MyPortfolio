"use client";

import { Canvas } from "@react-three/fiber";
import { SetupScene } from "./SetupScene";
import { useScroll } from "framer-motion";
import { useRef, Suspense } from "react";
import { Loader } from "@react-three/drei";

export function SetupView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-neutral-900">
      <div className="sticky top-0 h-screen w-full">
        <Canvas shadows camera={{ position: [0, 1.2, 0.6], fov: 45 }}>
          <Suspense fallback={null}>
            <SetupScene scrollProgress={scrollYProgress} />
          </Suspense>
        </Canvas>
        <Loader />
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce pointer-events-none z-10">
        <span className="text-sm">Scroll to explore</span>
      </div>

      {/* Content that appears after scrolling */}
      <div className="absolute top-[200vh] w-full min-h-screen bg-neutral-900 text-white p-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Workspace</h2>
          <p className="text-xl text-gray-300">
            Welcome to my digital portfolio. This is where magic happens.
            Explore my projects, skills, and more below.
          </p>
          {/* We can add more content here later */}
        </div>
      </div>
    </div>
  );
}
