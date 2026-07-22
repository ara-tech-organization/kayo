import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import AnimatedCard from "../ui/AnimatedCard";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { NURTURE } from "../../data/content";
import Mark from "../ui/Mark";
import styles from "./Nurture.module.css";

export default function Nurture() {
  return (
    <section className={styles.section} aria-labelledby="nurture-title">
      <span className={styles.glowA} aria-hidden="true" />
      <span className={styles.glowB} aria-hidden="true" />

      <Container size="wide">
        <SectionTitle
          eyebrow="The NURTURE Lab curriculum"
          title={<>Where <Mark tone="light">Montessori meets STEM</Mark></>}
          lead={NURTURE.philosophy}
          tone="light"
          id="nurture-title"
        />

        {/* ---- Acronym ------------------------------------------------- */}
        <Stagger className={styles.acronym} gap={0.07}>
          {NURTURE.acronym.map((part, i) => (
            <StaggerItem key={`${part.letter}-${i}`} variant="zoom" className={styles.acronymItem}>
              <span className={styles.letter}>{part.letter}</span>
              <span className={styles.word}>{part.word}</span>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ---- Four pillars -------------------------------------------- */}
        <Stagger className={styles.pillars} amount={0.1}>
          {NURTURE.pillars.map((pillar, i) => (
            <StaggerItem key={pillar.title} variant="up">
              <AnimatedCard
                icon={pillar.icon}
                eyebrow={`Pillar ${String(i + 1).padStart(2, "0")}`}
                title={pillar.title}
                tone="dark"
                className={styles.pillar}
              >
                <p className={styles.tagline}>{pillar.tagline}</p>
                <p>{pillar.desc}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="up" className={styles.foot}>
          <p className={styles.footText}>{NURTURE.wholeChild}</p>
          <Button to="/curriculum" variant="light" icon={ArrowRight}>
            Explore the full curriculum
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
