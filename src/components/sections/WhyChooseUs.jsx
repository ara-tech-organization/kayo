import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimatedCard from "../ui/AnimatedCard";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { WHY_CHOOSE } from "../../data/content";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <span className={styles.glow} aria-hidden="true" />

      <Container size="wide">
        <SectionTitle
          eyebrow="Why families choose us"
          title={WHY_CHOOSE.title}
          lead={WHY_CHOOSE.intro}
          id="why-title"
        />

        <Stagger className={styles.grid} amount={0.12}>
          {WHY_CHOOSE.items.map((item, i) => (
            <StaggerItem key={item.title} variant="up">
              <AnimatedCard
                icon={item.icon}
                title={item.title}
                accent={i % 2 === 1 ? "lime" : "brand"}
                tone={i % 3 === 0 ? "tint" : "light"}
              >
                <p>{item.desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
