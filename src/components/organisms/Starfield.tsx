"use client";

import { useEffect, useState } from "react";

// Generate random box-shadow strings for CSS stars
function generateStars(count: number) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    // Distribute stars randomly across a 2000x2000 grid
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    // Add slightly varying opacities for realism
    const opacity = Math.random() * 0.8 + 0.2;
    stars += `${x}px ${y}px rgba(255, 255, 255, ${opacity})`;
    if (i < count - 1) stars += ", ";
  }
  return stars;
}

export function Starfield() {
  const [starsBase, setStarsBase] = useState("");
  const [starsMid, setStarsMid] = useState("");
  const [starsFar, setStarsFar] = useState("");

  useEffect(() => {
    // Generated ONLY on client-mount to prevent Next.js SSR hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStarsBase(generateStars(800)); // Far, tiny stars (slow)
    setStarsMid(generateStars(300));  // Mid stars
    setStarsFar(generateStars(100));  // Close, bright stars (fast)
  }, []);

  // Prevent flash of empty background during hydration
  if (!starsBase) {
    return (
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#05050A]" />
    );
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#05050A]">
      <style>{`
        /* Base star layer class */
        .star-layer {
          background: transparent;
        }
        
        /* The ::after element creates an exact copy of the stars 2000px below.
           When we translate the entire block up 2000px, the copy smoothly replaces the original
           resulting in a perfect infinite seamless loop. */
        .star-layer::after {
          content: " ";
          position: absolute;
          top: 2000px;
          left: 0;
          background: transparent;
        }

        .stars-1 {
          width: 1px;
          height: 1px;
          box-shadow: ${starsBase};
          animation: animStar 150s linear infinite;
          will-change: transform;
        }
        .stars-1::after {
          width: 1px;
          height: 1px;
          box-shadow: ${starsBase};
        }

        .stars-2 {
          width: 2px;
          height: 2px;
          border-radius: 50%;
          box-shadow: ${starsMid};
          animation: animStar 100s linear infinite;
          will-change: transform;
        }
        .stars-2::after { 
          width: 2px;
          height: 2px;
          border-radius: 50%;
          box-shadow: ${starsMid}; 
        }

        .stars-3 {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          box-shadow: ${starsFar};
          animation: animStar 50s linear infinite;
          will-change: transform;
        }
        .stars-3::after { 
          width: 3px;
          height: 3px;
          border-radius: 50%;
          box-shadow: ${starsFar}; 
        }

        @keyframes animStar {
          from { transform: translateY(0px) translateZ(0); }
          to { transform: translateY(-2000px) translateZ(0); }
        }

        /* Nebula glow overlays */
        .nebula {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 80% 10%, rgba(29, 78, 216, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 50%);
        }
      `}</style>

      <div className="nebula" />
      <div className="star-layer stars-1" />
      <div className="star-layer stars-2" />
      <div className="star-layer stars-3" />
    </div>
  );
}
