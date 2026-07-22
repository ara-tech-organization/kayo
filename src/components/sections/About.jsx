import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Figure from "../ui/Figure";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import Counter from "../ui/Counter";
import Mark from "../ui/Mark";
import { IMAGES, INTRO, STATS } from "../../data/content";
import styles from "./About.module.css";

export default function About() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={ref} className={styles.section} aria-labelledby="about-title">
      <Container size="wide">
        <div className={styles.grid}>
          {/* ---- Imagery ------------------------------------------------ */}
          <div className={styles.media}>
            <Reveal variant="right" duration={0.9}>
              <motion.div style={reduce ? undefined : { y: imgY }}>
                <Figure
                  src={IMAGES.classroom.src}
                  alt={IMAGES.classroom.alt}
                  ratio="4 / 5"
                  rounded="xl"
                  sizes="(max-width: 980px) 100vw, 42vw"
                />
              </motion.div>
            </Reveal>

            <Reveal variant="up" delay={0.25} duration={0.9} className={styles.floatImg}>
              <Figure
                src={IMAGES.outdoor.src}
                alt={IMAGES.outdoor.alt}
                ratio="4 / 3"
                rounded="lg"
                sizes="(max-width: 980px) 45vw, 22vw"
              />
            </Reveal>

            <Reveal variant="zoom" delay={0.4} className={styles.badge}>
              <span className={styles.badgeLabel}>Nurturing since</span>
              <span className={styles.badgeValue}>
                <Counter value={2013} separator="" duration={1.8} />
              </span>
            </Reveal>

            <span className={styles.blob} aria-hidden="true" />
          </div>

          {/* ---- Copy --------------------------------------------------- */}
          <div className={styles.copy}>
            <Reveal variant="fade">
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                About Kayo International
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.06}>
              <h2 id="about-title" className={styles.title}>
                A second home where little minds are{" "}
                <Mark>safe, nurtured and inspired</Mark>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={0.12}>
              <p className={styles.lead}>{INTRO.welcome}</p>
            </Reveal>

            <Reveal variant="up" delay={0.16}>
              <blockquote className={styles.quote}>
                <Quote className={styles.quoteMark} aria-hidden="true" />
                <p>{INTRO.founderNote}</p>
                <footer className={styles.quoteFoot}>
                  <span className={styles.quoteName}>Veena Sundaramurthy</span>
                  <span className={styles.quoteRole}>Founder &amp; Director</span>
                </footer>
              </blockquote>
            </Reveal>

            {/* ---- Stats ------------------------------------------------ */}
            <Stagger className={styles.stats}>
              {STATS.map((stat) => (
                <StaggerItem key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>
                    <Counter
                      value={stat.value}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal variant="up" delay={0.1} className={styles.actions}>
              <Button to="/about" icon={ArrowRight}>
                Our Story
              </Button>
              <Button to="/curriculum" variant="ghost">
                Explore the NURTURE Lab
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
