import { motion } from "framer-motion";

const svgVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
    },
  },
};

type arrowProps = {
  side: "left" | "right" | "down";
};

const ArrowSvg = ({ side }: arrowProps) => {
  let arrow =
    side === "right"
      ? "M0 40 H380 V250 H370 l10 10 l10 -10 h-10 10"
      : side === "left"
      ? "M400 40 H20 V250 H10 l10 10 l10 -10 h-10 10"
      : "M197 0 V250 H187 l10 10 l10 -10 h-10 10";
  return (
    <motion.svg
      width="70%"
      height={side === "down" ? "50" : "260"}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.path
        d={arrow}
        stroke="#57A5A5"
        strokeWidth={side === "down" ? "20" : "5"}
        fill="transparent"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default ArrowSvg;
