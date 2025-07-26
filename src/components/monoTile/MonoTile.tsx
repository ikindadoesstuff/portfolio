import { motion } from "motion/react";
import "./monoTile.css";

export function MonoTile(props) {
  const combinedClassNames = `mono-tile ${props.className || ""}`.trim();

  const rotationDegree = 5;
  return (
    <motion.span {...props} className={combinedClassNames}>
      {props.children}
    </motion.span>
  );
}
