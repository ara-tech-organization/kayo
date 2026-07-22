import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Figure from "../ui/Figure";
import { AWARDS } from "../../data/content";
import styles from "./Awards.module.css";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Certifications & awards. The track is duplicated so the marquee loops
 * seamlessly; hover or keyboard focus pauses it, and any certificate can be
 * opened full-size.
 */
export default function Awards({ tone = "light" }) {
  const [index, setIndex] = useState(null);
  const open = index !== null;
  const current = open ? AWARDS[index] : null;

  const step = (delta) =>
    setIndex((i) => (i === null ? null : (i + delta + AWARDS.length) % AWARDS.length));

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const loop = [...AWARDS, ...AWARDS];

  return (
    <section className={`${styles.section} ${styles[tone]}`} aria-labelledby="awards-title">
      <Container size="wide">
        <SectionTitle
          eyebrow="Awards & achievements"
          title="Recognised across India for early years excellence"
          lead="Twenty-plus awards for excellence in early childhood education — from EducationWorld, the Early Childhood Association, Brainfeed, GSLC and more."
          tone={tone === "dark" ? "light" : "dark"}
          id="awards-title"
        />
      </Container>

      <div className={styles.marquee}>
        <ul className={styles.track}>
          {loop.map((award, i) => {
            const realIndex = i % AWARDS.length;
            const isClone = i >= AWARDS.length;
            return (
              <li
                key={`${award.src}-${i}`}
                className={styles.item}
                aria-hidden={isClone ? "true" : undefined}
              >
                <button
                  type="button"
                  className={styles.card}
                  onClick={() => setIndex(realIndex)}
                  tabIndex={isClone ? -1 : 0}
                  aria-label={`View certificate: ${award.body} — ${award.title}, ${award.year}`}
                >
                  <Figure
                    src={award.src}
                    alt={award.alt}
                    ratio="4 / 3"
                    rounded="md"
                    className={styles.figure}
                    imgClassName={styles.img}
                    sizes="320px"
                  />
                  <span className={styles.meta}>
                    <span className={styles.year}>{award.year}</span>
                    <span className={styles.body}>{award.body}</span>
                    <span className={styles.title}>{award.title}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <span className={styles.fadeLeft} aria-hidden="true" />
        <span className={styles.fadeRight} aria-hidden="true" />
      </div>

      {/* ---- Lightbox ---------------------------------------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Award certificate viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              className={styles.lbClose}
              onClick={() => setIndex(null)}
              aria-label="Close viewer"
              autoFocus
            >
              <X aria-hidden="true" />
            </button>

            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous certificate"
            >
              <ArrowLeft aria-hidden="true" />
            </button>

            <motion.figure
              key={current.src}
              className={styles.lbFigure}
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={current.src} alt={current.alt} className={styles.lbImg} />
              <figcaption className={styles.lbCaption}>
                <strong>{current.body}</strong>
                <span>
                  {current.title} · {current.detail} · {current.year}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbNext}`}
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next certificate"
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
