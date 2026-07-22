import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MousePointer2, Star } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { WhatsappIcon } from "../../lib/icons";
import { HERO, IMAGES } from "../../data/content";
import styles from "./Hero.module.css";

const EASE = [0.22, 1, 0.36, 1];

/* Word-by-word reveal for the headline. */
const wordVariants = {
  hidden: { opacity: 0, y: "0.6em", rotate: 2 },
  show: { opacity: 1, y: "0em", rotate: 0 },
};

function RevealWords({ text, delay = 0, className }) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
    >
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className={styles.wordMask}>
          <motion.span
            className={styles.word}
            variants={wordVariants}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* Background drifts slower than the content — classic depth parallax.
     The content drift stays inside the hero's bottom padding, and the fade
     completes first, so nothing is ever visibly cut off or spills out. */
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className={styles.hero} aria-labelledby="hero-title">
      {/* ---- Background -------------------------------------------------
          Clipping lives here, not on the section: the bleed and scale on
          .bg need clipping, but the section clipping content would cut the
          parallaxed copy off at the hero's bottom edge. */}
      <div className={styles.backdrop}>
        <motion.div
          className={styles.bg}
          style={reduce ? undefined : { y: bgY, scale: bgScale }}
        >
          <img
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            className={styles.bgImg}
            fetchPriority="high"
            decoding="async"
          />
          <span className={styles.veil} aria-hidden="true" />
          <span className={styles.grain} aria-hidden="true" />
        </motion.div>

        {/* ---- Floating shapes ---------------------------------------- */}
        {!reduce && (
          <div className={styles.shapes} aria-hidden="true">
            {[
              { cls: styles.shape1, dur: 13, dist: 26 },
              { cls: styles.shape2, dur: 17, dist: -32 },
              { cls: styles.shape3, dur: 11, dist: 20 },
              { cls: styles.shape4, dur: 19, dist: -24 },
            ].map((s, i) => (
              <motion.span
                key={i}
                className={`${styles.shape} ${s.cls}`}
                animate={{ y: [0, s.dist, 0], rotate: [0, i % 2 ? -8 : 8, 0] }}
                transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ---- Content ---------------------------------------------------- */}
      <Container size="wide" className={styles.container}>
        <motion.div
          className={styles.content}
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <Star className={styles.eyebrowStar} aria-hidden="true" />
            {HERO.eyebrow}
          </motion.p>

          <h1 id="hero-title" className={styles.title}>
            <RevealWords text={HERO.titleLines[0]} delay={0.3} className={styles.line} />
            <RevealWords text={HERO.titleLines[1]} delay={0.5} className={styles.line} />
            <motion.span
              className={styles.script}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
            >
              {HERO.titleAccent}
            </motion.span>
          </h1>

          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
          >
            {HERO.lead}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}
          >
            <Button to={HERO.primaryCta.to} size="lg" icon={ArrowRight}>
              {HERO.primaryCta.label}
            </Button>
            <Button
              href={HERO.secondaryCta.href}
              variant="outline-light"
              size="lg"
              icon={WhatsappIcon}
              iconRight={false}
            >
              {HERO.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul
            className={styles.badges}
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12, delayChildren: 1.35 }}
          >
            {HERO.badges.map((badge) => (
              <motion.li
                key={badge.label}
                className={styles.badge}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <span className={styles.badgeValue}>{badge.value}</span>
                <span className={styles.badgeLabel}>{badge.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>

      {/* ---- Scroll indicator ------------------------------------------- */}
      <motion.a
        href="#about"
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        aria-label="Scroll to content"
      >
        <span className={styles.scrollTrack} aria-hidden="true">
          <motion.span
            className={styles.scrollDot}
            animate={reduce ? undefined : { y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <span className={styles.scrollLabel}>
          <MousePointer2 className={styles.scrollIcon} aria-hidden="true" />
          Scroll
        </span>
      </motion.a>
    </section>
  );
}
