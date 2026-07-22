import Container from "../ui/Container";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import Icon from "../../lib/icons";
import { RATINGS } from "../../data/content";
import styles from "./Ratings.module.css";

/** Independent platform scores — a compact, static trust row. */
export default function Ratings() {
  return (
    <section className={styles.section} aria-labelledby="ratings-title">
      <Container size="wide">
        <Reveal variant="fade" className={styles.head}>
          <h2 id="ratings-title" className={styles.title}>
            Our ratings across platforms
          </h2>
          <p className={styles.sub}>Independently reviewed by the families who know us best.</p>
        </Reveal>

        <Stagger className={styles.grid} gap={0.07} amount={0.15}>
          {RATINGS.map((item) => (
            <StaggerItem key={item.platform} variant="up" className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name={item.icon} strokeWidth={1.7} />
              </span>
              <span className={styles.body}>
                <span className={styles.score}>
                  {item.score}
                  {item.outOf && <em className={styles.outOf}>/ {item.outOf}</em>}
                </span>
                <span className={styles.platform}>{item.platform}</span>
                <span className={styles.detail}>{item.detail}</span>
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
