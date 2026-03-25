"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: -999, y: -999 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Only on pointer-fine devices (mouse)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, rgba(59,130,246,0.07) 0%, rgba(52,211,153,0.04) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
        willChange: "transform",
      }}
    />
  );
}
