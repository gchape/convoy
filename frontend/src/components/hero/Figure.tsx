import { motion } from "motion/react";

const Shapes = {
  rect: ({ w, h, sw }: { w: number; h: number; sw: number }) => (
    <rect x={sw} y={sw} width={w - sw * 2} height={h - sw * 2} />
  ),
  circle: ({
    w,
    h,
    sw,
    strokeDasharray,
  }: {
    w: number;
    h: number;
    sw: number;
    strokeDasharray?: string;
  }) => (
    <circle
      cx={w / 2}
      cy={h / 2}
      r={w / 2 - sw}
      strokeDasharray={strokeDasharray}
    />
  ),
  plus: ({ w, h }: { w: number; h: number }) => (
    <g strokeLinecap="round">
      <line x1={w / 2} y1="0" x2={w / 2} y2={h} />
      <line x1="0" y1={h / 2} x2={w} y2={h / 2} />
    </g>
  ),
};

const Figure = ({ shape }: { shape: Shape }) => {
  const {
    fill,
    type,
    style,
    stroke,
    animate,
    transition,
    strokeWidth,
    strokeDasharray,
  } = shape;
  const w = style.width as number;
  const h = style.height as number;
  const ShapeEl = Shapes[type];

  return (
    <motion.svg
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill={fill ?? "none"}
      stroke={stroke}
      animate={animate}
      strokeWidth={strokeWidth}
      transition={transition}
    >
      <ShapeEl w={w} h={h} sw={strokeWidth} strokeDasharray={strokeDasharray} />
    </motion.svg>
  );
};

export default Figure;
