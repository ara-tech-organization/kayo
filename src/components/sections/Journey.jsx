import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { JOURNEY } from "../../data/content";
import styles from "./Journey.module.css";

/**
 * Age-progression timeline. The connector line draws itself as the section
 * scrolls, and each step reveals from alternating sides on desktop.
 */
export default function Journey({
  title = JOURNEY.title,
  intro = JOURNEY.intro,
  eyebrow = "The learning journey",
  steps = JOURNEY.steps,
  id = "journey",
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section className={styles.section} aria-labelledby={`${id}-title`}>
      <Container size="default">
        <SectionTitle eyebrow={eyebrow} title={title} lead={intro} id={`${id}-title`} />

        <div ref={ref} className={styles.timeline}>
          <span className={styles.track} aria-hidden="true">
            <motion.span
              className={styles.trackFill}
              style={reduce ? { scaleY: 1 } : { scaleY }}
            />
          </span>

          <ol className={styles.list}>
            {steps.map((step, i) => (
              <li key={step.step} className={styles.item}>
                <Reveal
                  variant={i % 2 === 0 ? "left" : "right"}
                  amount={0.4}
                  className={styles.card}
                >
                  <div className={styles.cardInner}>
                    <p className={styles.step}>Step {step.step}</p>
                    <h3 className={styles.name}>{step.name}</h3>
                    {step.age && <p className={styles.age}>{step.age}</p>}
                    <p className={styles.desc}>{step.desc}</p>
                  </div>
                </Reveal>

                <Reveal variant="zoom" amount={0.6} className={styles.node}>
                  <span className={styles.nodeDot} aria-hidden="true" />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
