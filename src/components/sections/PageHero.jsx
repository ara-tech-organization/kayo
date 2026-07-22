import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import styles from "./PageHero.module.css";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Compact hero used by every inner page: breadcrumb, eyebrow, title, lead.
 */
export default function PageHero({ eyebrow, title, lead, image, breadcrumb = [], children }) {
  const reduce = useReducedMotion();

  return (
    <section className={styles.hero} aria-labelledby="page-title">
      {image && (
        <div className={styles.bg}>
          <img src={image.src} alt="" className={styles.bgImg} aria-hidden="true" />
          <span className={styles.veil} aria-hidden="true" />
        </div>
      )}

      {!reduce && (
        <div className={styles.shapes} aria-hidden="true">
          <motion.span
            className={styles.shapeA}
            animate={{ y: [0, 22, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className={styles.shapeB}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      <Container size="wide" className={styles.inner}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {breadcrumb.map((crumb) => (
              <li key={crumb}>
                <ChevronRight aria-hidden="true" />
                <span aria-current="page">{crumb}</span>
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          id="page-title"
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
        >
          {title}
        </motion.h1>

        {lead && (
          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
          >
            {lead}
          </motion.p>
        )}

        {children && (
          <motion.div
            className={styles.extra}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.28 }}
          >
            {children}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
