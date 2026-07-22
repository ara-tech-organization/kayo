import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { JOURNEY } from "../../data/content";
import styles from "./Journey.module.css";

/**
 * Age-progression rail. The stages run left-to-right along a connector that
 * draws itself once the section enters view; below 900px the rail turns into a
 * swipeable, snap-scrolling row.
 */
export default function Journey({
  title = JOURNEY.title,
  intro = JOURNEY.intro,
  eyebrow = "The learning journey",
  steps = JOURNEY.steps,
  id = "journey",
}) {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby={`${id}-title`}>
      <Container size="default">
        <SectionTitle eyebrow={eyebrow} title={title} lead={intro} id={`${id}-title`} />

        <div className={styles.scroller}>
          <div className={styles.rail} style={{ "--cols": steps.length }}>
            <span className={styles.track} aria-hidden="true">
              <motion.span
                className={styles.trackFill}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>

            <Stagger as="ol" className={styles.list} amount={0.3} gap={0.11}>
              {steps.map((step) => (
                <StaggerItem as="li" key={step.step} className={styles.item}>
                  {step.age && <p className={styles.age}>{step.age}</p>}

                  <span className={styles.node} aria-hidden="true">
                    {step.step}
                  </span>

                  <div className={styles.card}>
                    <h3 className={styles.name}>{step.name}</h3>
                    <p className={styles.desc}>{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
