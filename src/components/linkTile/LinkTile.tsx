import { motion } from "motion/react";
import "./linkTile.css";

export function LinkTile({ text, iconSrc, href, ...props }) {
  return (
    <div className="link-tile" {...props}>
      <motion.a
        initial={{}}
        whileHover={{
          rotate: "5deg",
        }}
        href={href}
        className="link-tile__card">
        <img src={`/social_icons/${iconSrc}.svg`} alt="" />
      </motion.a>
      <h4>{text}</h4>
    </div>
  );
}
