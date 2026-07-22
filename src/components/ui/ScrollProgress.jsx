import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./ScrollProgress.module.css";

/** Thin gradient bar pinned under the navbar showing reading progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />;
}
