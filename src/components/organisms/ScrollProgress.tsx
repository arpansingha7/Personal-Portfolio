"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, #3b82f6 0%, #34d399 60%, #a78bfa 100%)",
        transformOrigin: "0%",
        zIndex: 9999,
        boxShadow: "0 0 12px rgba(59,130,246,0.7), 0 0 24px rgba(52,211,153,0.3)",
      }}
    />
  );
}
