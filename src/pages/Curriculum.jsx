import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import Nurture from "../components/sections/Nurture";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import AnimatedCard from "../components/ui/AnimatedCard";
import Figure from "../components/ui/Figure";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import Icon from "../lib/icons";
import { IMAGES, INTELLIGENCES, NURTURE, SCHOOL_READINESS } from "../data/content";
import Mark from "../components/ui/Mark";
import styles from "./Curriculum.module.css";

export default function Curriculum() {
  return (
    <>
      <Seo
        title="Curriculum | Kayo International Preschool"
        description="Discover KAYO's NURTURE Lab curriculum, a unique blend of Montessori, STEM & play-based learning in Perungudi, Chennai. Enrol your child for holistic early education."
        path="/curriculum"
        image={IMAGES.stem.src}
      />

      <PageHero
        eyebrow="NURTURE Lab curriculum"
        title="Where Montessori meets STEM in Chennai"
        lead={NURTURE.serving}
        image={IMAGES.stem}
        breadcrumb={["Curriculum"]}
      />

      {/* ---- What it is --------------------------------------------------- */}
      <section className={styles.definition}>
        <Container size="wide">
          <div className={styles.defGrid}>
            <div>
              <SectionTitle
                eyebrow="What is the NURTURE Lab?"
                title={<>A proprietary, four-pillar framework <Mark>exclusive to Kayo</Mark></>}
                align="left"
                className={styles.defHead}
              />
              <Reveal variant="up">
                <p className={styles.para}>{NURTURE.intro}</p>
              </Reveal>
              <Reveal variant="up" delay={0.08}>
                <p className={styles.para}>{NURTURE.adaptive}</p>
              </Reveal>
            </div>

            <Reveal variant="left" duration={0.9} className={styles.defMedia}>
              <Figure
                src={IMAGES.classroom.src}
                alt={IMAGES.classroom.alt}
                ratio="4 / 5"
                rounded="xl"
                sizes="(max-width: 980px) 100vw, 42vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <Nurture />

      {/* ---- Multiple intelligences --------------------------------------- */}
      <section className={styles.intelligences}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Multiple Intelligence Theory"
            title={INTELLIGENCES.title}
            lead={INTELLIGENCES.intro}
          />

          <Stagger className={styles.miGrid} gap={0.06} amount={0.08}>
            {INTELLIGENCES.items.map((item, i) => (
              <StaggerItem key={item.name} variant="up">
                <article className={styles.mi}>
                  <span className={styles.miNumber} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.miIcon} aria-hidden="true">
                    <Icon name={item.icon} strokeWidth={1.6} />
                  </span>
                  <h3 className={styles.miName}>{item.name}</h3>
                  <p className={styles.miNick}>“{item.nickname}”</p>
                  <p className={styles.miDesc}>{item.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal variant="up" className={styles.miClosing}>
            <p>{INTELLIGENCES.closing}</p>
          </Reveal>
        </Container>
      </section>

      {/* ---- School readiness --------------------------------------------- */}
      <section className={styles.readiness}>
        <Container size="wide">
          <SectionTitle
            eyebrow="School readiness"
            title={SCHOOL_READINESS.title}
            lead={SCHOOL_READINESS.intro}
          />

          <Stagger className={styles.readyGrid} gap={0.07} amount={0.08}>
            {SCHOOL_READINESS.items.map((item, i) => (
              <StaggerItem key={item.title} variant="up">
                <AnimatedCard
                  icon={item.icon}
                  title={item.title}
                  accent={i % 2 === 1 ? "lime" : "brand"}
                >
                  <p>{item.desc}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal variant="up" className={styles.readyClosing}>
            <p>{SCHOOL_READINESS.closing}</p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        title="See the curriculum in action"
        body="Visit our Perungudi campus, meet our educators, and watch a NURTURE Lab session for yourself. There is no substitute for experiencing it firsthand."
        image={IMAGES.theatre}
      />
    </>
  );
}
