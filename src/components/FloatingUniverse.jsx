import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const PILLS = [
  { label: "PolyVoice",     left: "72%", top: "11%" },
  { label: "PhishGuard",    left: "81%", top: "48%" },
  { label: "Node.js",       left: "64%", top: "26%" },
  { label: "Arduino",       left: "87%", top: "70%" },
  { label: "Figma",         left: "69%", top: "64%" },
  { label: "AI/ML",         left: "57%", top: "16%" },
  { label: "Express",       left: "76%", top: "82%" },
  { label: "Product Owner", left: "62%", top: "90%" },
];

const SHAPES = [
  { type: "exclaim",         left: "4%",  top: "8%"  },
  { type: "exclaim",         left: "84%", top: "36%" },
  { type: "exclaim",         left: "44%", top: "80%" },
  { type: "circle-fill",    left: "8%",  top: "55%", size: 80  },
  { type: "circle-fill",    left: "91%", top: "18%", size: 120 },
  { type: "circle-outline", left: "32%", top: "14%", size: 70  },
  { type: "circle-outline", left: "56%", top: "72%", size: 90  },
  { type: "triangle",       left: "76%", top: "42%", size: 20  },
  { type: "triangle",       left: "16%", top: "78%", size: 20  },
];

const DECORATORS = [
  { symbol: "+", left: "52%", top: "6%"  },
  { symbol: "×", left: "22%", top: "44%" },
  { symbol: "·", left: "93%", top: "62%" },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const FLOAT_NAMES = ["float-1","float-2","float-3","float-4","float-5","float-6","float-7","float-8"];
const DURATIONS   = [10, 14, 8, 18, 12, 20, 16, 9, 15, 11];
const DELAYS      = [0, -4, -8, -12, -3, -7, -11, -15, -6, -2];

const floatStyle = (i) => ({
  animation: `${FLOAT_NAMES[i % 8]} ${DURATIONS[i % 10]}s ease-in-out infinite`,
  animationDelay: `${DELAYS[i % 10]}s`,
  willChange: "transform",
});

const entrance = (i, targetScale = 1) => ({
  initial: { opacity: 0, scale: 0.6 * targetScale },
  animate: { opacity: 1, scale: targetScale },
  transition: {
    delay: 0.6 + i * 0.08,
    duration: 1.2,
    ease: [0.34, 1.56, 0.64, 1],
  },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

const PillBadge = ({ label }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: 999,
      padding: "6px 16px",
      fontSize: 13,
      fontWeight: 500,
      color: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(4px)",
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </span>
);

const renderShape = (shape) => {
  switch (shape.type) {
    case "exclaim":
      return (
        <span style={{ color: "white", fontWeight: 700, fontSize: 60, lineHeight: 1, opacity: 0.85 }}>
          !
        </span>
      );
    case "circle-fill":
      return (
        <div
          style={{
            width: shape.size,
            height: shape.size,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
          }}
        />
      );
    case "circle-outline":
      return (
        <div
          style={{
            width: shape.size,
            height: shape.size,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.35)",
          }}
        />
      );
    case "triangle":
      return (
        <svg
          width={shape.size * 1.2}
          height={shape.size}
          viewBox="0 0 24 20"
          aria-hidden="true"
        >
          <path d="M12 0 L24 20 H0 Z" fill="rgba(255,255,255,0.7)" />
        </svg>
      );
    default:
      return null;
  }
};

// ─── Main component ───────────────────────────────────────────────────────────

export const FloatingUniverse = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const largeX = useTransform(mouseX, (v) => v * 0.015);
  const largeY = useTransform(mouseY, (v) => v * 0.015);
  const pillsX = useTransform(mouseX, (v) => v * 0.025);
  const pillsY = useTransform(mouseY, (v) => v * 0.025);
  const decoX  = useTransform(mouseX, (v) => v * 0.04);
  const decoY  = useTransform(mouseY, (v) => v * 0.04);

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );
  const [isPaused, setIsPaused] = useState(false);

  // Mousemove parallax — desktop only
  useEffect(() => {
    if (isMobile) return;
    const onMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile, mouseX, mouseY]);

  // Pause animations when tab is hidden
  useEffect(() => {
    const onVis = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Re-check mobile on resize
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const mobileScale  = isMobile ? 0.6 : 1;
  const visibleShapes = isMobile ? SHAPES.slice(0, 6)  : SHAPES;
  const visiblePills  = isMobile ? PILLS.slice(0, 5)   : PILLS;
  const visibleDecos  = isMobile ? []                  : DECORATORS;

  const posStyle = (left, top) => ({
    left,
    top,
    transform: "translate(-50%, -50%)",
  });

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 z-[2] pointer-events-none select-none overflow-hidden${isPaused ? " float-paused" : ""}`}
    >
      {/* Layer 1 — large shapes (slowest parallax 0.015×) */}
      <motion.div className="absolute inset-0" style={{ x: largeX, y: largeY }}>
        {visibleShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={posStyle(shape.left, shape.top)}
            {...entrance(i, mobileScale)}
          >
            <div style={floatStyle(i)}>{renderShape(shape)}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 2 — pills (medium parallax 0.025×) */}
      <motion.div className="absolute inset-0" style={{ x: pillsX, y: pillsY }}>
        {visiblePills.map((pill, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={posStyle(pill.left, pill.top)}
            {...entrance(SHAPES.length + i, mobileScale)}
          >
            <div style={floatStyle(SHAPES.length + i)}>
              <PillBadge label={pill.label} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 3 — decorators (fastest parallax 0.04×) */}
      <motion.div className="absolute inset-0" style={{ x: decoX, y: decoY }}>
        {visibleDecos.map((deco, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={posStyle(deco.left, deco.top)}
            {...entrance(SHAPES.length + PILLS.length + i, mobileScale)}
          >
            <div style={{ ...floatStyle(SHAPES.length + PILLS.length + i) }}>
              <span
                style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, fontWeight: 300 }}
              >
                {deco.symbol}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
