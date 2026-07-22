import Container from "../ui/Container";
import Counter from "../ui/Counter";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { STATS } from "../../data/content";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.section} aria-labelledby="stats-title">
      <span className={styles.pattern} aria-hidden="true" />

      <Container size="wide">
        <Reveal variant="up" className={styles.head}>
          <h2 id="stats-title" className={styles.title}>
            A decade of trust, measured in{" "}
            <span className={styles.script}>little milestones</span>
          </h2>
        </Reveal>

        <Stagger className={styles.grid} gap={0.12}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} variant="up" className={styles.item}>
              <span className={styles.value}>
                <Counter value={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
              </span>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.desc}>{stat.desc}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
