import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, useMemo } from "react";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, Activity, Fingerprint } from "lucide-react";

// Rising data stream particles mimicking organic digital growth
const DataStream = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 1200;

  const [positions, colors, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;

      const theme = Math.random();
      if (theme > 0.6) {
        // Bright Green (#22c55e)
        col[i * 3] = 0.13;
        col[i * 3 + 1] = 0.77;
        col[i * 3 + 2] = 0.36;
      } else if (theme > 0.3) {
        // Emerald (#10b981)
        col[i * 3] = 0.06;
        col[i * 3 + 1] = 0.72;
        col[i * 3 + 2] = 0.50;
      } else {
        // Cyan accent (#0ea5e9)
        col[i * 3] = 0.05;
        col[i * 3 + 1] = 0.64;
        col[i * 3 + 2] = 0.91;
      }

      spd[i] = Math.random() * 0.04 + 0.01;
    }
    return [pos, col, spd];
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += speeds[i];
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -10;
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} sizeAttenuation />
    </points>
  );
};

// Organic, DNA-like complex torus knot with an inner cyber-crystal
const BiosphereKnot = () => {
  const knot1Ref = useRef<THREE.Mesh>(null);
  const knot2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (knot1Ref.current) {
      knot1Ref.current.rotation.x = t * 0.2;
      knot1Ref.current.rotation.y = t * 0.3;
    }
    if (knot2Ref.current) {
      knot2Ref.current.rotation.x = -t * 0.1;
      knot2Ref.current.rotation.y = -t * 0.4;
      knot2Ref.current.rotation.z = t * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.rotation.z = t * 0.2;
      const scale = 1 + Math.sin(t * 3) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.2}>
      <group>
        {/* Core Crystal - Icosahedron */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshPhysicalMaterial
            color="#22c55e"
            emissive="#15803d"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.8}
            wireframe={false}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Outer Torus Knot Wireframe (Bio-Network) */}
        <mesh ref={knot1Ref}>
          <torusKnotGeometry args={[2.5, 0.4, 128, 16]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={1.2}
            wireframe
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Inner Torus Knot Wireframe - Contours */}
        <mesh ref={knot2Ref}>
          <torusKnotGeometry args={[1.6, 0.2, 100, 12]} />
          <meshBasicMaterial
            color="#0ea5e9"
            wireframe
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </Float>
  );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setExiting(true);
          setTimeout(onComplete, 1000); // 1s exit animation
          return 100;
        }
        return p + Math.random() * 2 + 0.8;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#05070A] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Subtle Organic Radial Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* 3D Scene */}
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
              <fog attach="fog" args={["#05070A", 4, 16]} />
              <ambientLight intensity={0.2} />
              <pointLight position={[0, 0, 0]} intensity={1.5} color="#22c55e" />
              <directionalLight position={[5, 5, 5]} intensity={1.5} color="#10b981" />
              <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#0ea5e9" />
              <BiosphereKnot />
              <DataStream />
            </Canvas>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-10 mt-64">
            <motion.div
              className="flex items-center gap-5 bg-black/50 p-5 rounded-3xl backdrop-blur-xl border border-green-500/20 shadow-[0_0_50px_rgba(34,197,94,0.1)] relative overflow-hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              {/* Scanline effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent h-1/2"
                animate={{ top: ['-50%', '150%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              <div className="relative bg-green-950/40 p-3.5 rounded-2xl border border-green-500/20">
                <Hexagon className="w-9 h-9 text-green-400 rotate-90" />
                <Fingerprint className="w-5 h-5 text-emerald-400 absolute inset-0 m-auto" />
              </div>

              <div className="flex flex-col pr-6">
                <h1 className="font-display text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-white via-green-100 to-green-500 tracking-tight">
                  AgriVision AI
                </h1>
                <div className="flex items-center gap-2 mt-1.5 border-t border-green-500/20 pt-1.5 w-max">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <p className="text-emerald-400/90 text-[11px] tracking-[0.35em] uppercase font-mono">
                    Bio-Neural Processing
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-72 flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-between items-end px-1">
                <span className="text-[10px] font-mono text-green-500/70 tracking-[0.2em] uppercase">
                  Data Assembly
                </span>
                <span className="text-sm font-mono text-green-400 font-bold tracking-wider">
                  {Math.floor(progress)}%
                </span>
              </div>

              <div className="h-2 w-full bg-[#030507] rounded-full overflow-hidden border border-green-900/40 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 via-emerald-400 to-cyan-400 relative"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                >
                  {/* Glare effect on loading bar */}
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white/30 to-transparent" />
                </motion.div>
              </div>

              <div className="flex justify-between w-full text-[9px] font-mono text-emerald-700/80 mt-1 uppercase tracking-widest px-1">
                <span>Init_</span>
                <span>Seq_Gen</span>
                <span>Rdy_</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
