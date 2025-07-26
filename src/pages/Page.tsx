import { motion } from "motion/react";

import "./page.css";
import { useEffect } from "react";

export function Page({ children, pageSectionRefs, ...props }) {
  return (
    <main className="page-container">
      <motion.div className="page-container__content">{children}</motion.div>
    </main>
  );
}
