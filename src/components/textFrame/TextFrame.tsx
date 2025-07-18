import { motion } from "motion/react";
import "./textFrame.css";

export function TextFrame(props) {
    return (
        <motion.div {...props} className="text-frame">
            {props.children}
        </motion.div>
    );
}
