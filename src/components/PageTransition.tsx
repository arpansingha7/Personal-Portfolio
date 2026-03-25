"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for high-end feel
      }}
      className="w-full flex-grow"
    >
      {children}
    </motion.main>
  );
}
