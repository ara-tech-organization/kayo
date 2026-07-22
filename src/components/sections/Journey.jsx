import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { JOURNEY } from "../../data/content";
import styles from "./Journey.module.css";

/** Connector segment; inherits the hidden/show state from the parent Stagger,
 *  so the rail draws itself left-to-right one stage at a time. */
const DRAW = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1 },
};

/**
 * Age-progression rail. Stages run left-to-right along a connector that draws
 * itself as the section enters view. Each stage carries its own segment of that
 * connector, so the rail stays intact when the grid reflows to fewer columns.
 */
export default function Journey({
  title = JOURNEY.title,
  intro = JOURNEY.intro,
  eyebrow = "The learning journey",
  steps = JOURNEY.steps,
  id = "journey",
}) {
  return (
    <section className={styles.section} aria-labelledby={`${id}-title`}>
      <Container size="wide">
        <SectionTitle eyebrow={eyebrow} title={title} lead={intro} id={`${id}-title`} />

        <Stagger as="ol" className={styles.list} amount={0.25} gap={0.1}>
          {steps.map((step) => (
            <StaggerItem as="li" key={step.step} className={styles.item}>
              {step.age && <p className={styles.age}>{step.age}</p>}

              <motion.span
                className={styles.connector}
                variants={DRAW}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />

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
      </Container>
    </section>
  );
}
