import { ArrowRight, Check } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Figure from "../ui/Figure";
import Reveal from "../ui/Reveal";
import { IMAGES } from "../../data/content";
import Mark from "../ui/Mark";
import styles from "./Showcase.module.css";

/**
 * Alternating feature rows — the three things parents ask about most.
 * Copy is drawn from the curriculum, policies and family-connect pages.
 */
const BLOCKS = [
  {
    eyebrow: "Curriculum",
    title: "A framework that adapts to your child — not the other way round",
    body: "Created under the expert guidance of our founder, a qualified professional in Early Childhood Education and Child Psychology, our curriculum recognises that no two children learn the same way. That is precisely why we have built an approach that adapts to your child's unique learning style rather than forcing them into a rigid framework.",
    points: [
      "Montessori methodology",
      "STEM integration",
      "Play-based learning",
      "Multiple Intelligence Theory",
    ],
    image: IMAGES.stem,
    cta: { label: "Inside the NURTURE Lab", to: "/curriculum" },
  },
  {
    eyebrow: "Safety & transparency",
    title: "Complete clarity about how we care for your child",
    body: "Over the past decade, we have earned the trust of Chennai families by placing child safety, hygiene, and open communication at the centre of everything we do. Our policies are designed to exceed parent expectations — creating a secure environment where children explore, learn, and grow with confidence.",
    points: [
      "24/7 CCTV surveillance",
      "Paediatric first-aid certified staff",
      "Daily child-safe sanitisation",
      "Authorised-adult collection only",
    ],
    image: IMAGES.safety,
    cta: { label: "Read our policies", to: "/policies" },
  },
  {
    eyebrow: "Family Connect",
    title: "Parents are never spectators here",
    body: "Research consistently shows that when families are involved in preschool education, children develop stronger social skills, higher self-confidence, and better academic outcomes. That is why we designed Family Connect to be one of the most comprehensive parent involvement programmes Chennai has to offer.",
    points: [
      "SMS daily updates",
      "Regular progress reports",
      "Parent-teacher meetings",
      "Monthly learning insights",
    ],
    image: IMAGES.celebration,
    cta: { label: "How we stay connected", to: "/family-connect" },
  },
];

export default function Showcase() {
  return (
    <section className={styles.section} aria-labelledby="showcase-title">
      <Container size="wide">
        <SectionTitle
          eyebrow="What sets us apart"
          title={<>Three <Mark>promises</Mark> we make to every family</>}
          lead="Curriculum, safety and communication — the areas parents tell us matter most, and the areas we have spent a decade getting right."
          id="showcase-title"
        />

        <div className={styles.blocks}>
          {BLOCKS.map((block, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={block.title}
                className={`${styles.block} ${flipped ? styles.flipped : ""}`}
              >
                <Reveal
                  variant={flipped ? "left" : "right"}
                  duration={0.85}
                  className={styles.media}
                >
                  <Figure
                    src={block.image.src}
                    alt={block.image.alt}
                    ratio="5 / 4"
                    rounded="xl"
                    imgClassName={styles.img}
                    sizes="(max-width: 980px) 100vw, 48vw"
                  />
                  <span className={styles.index} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Reveal>

                <div className={styles.copy}>
                  <Reveal variant="fade">
                    <p className={styles.eyebrow}>
                      <span className={styles.eyebrowDot} aria-hidden="true" />
                      {block.eyebrow}
                    </p>
                  </Reveal>

                  <Reveal variant="up" delay={0.06}>
                    <h3 className={styles.title}>{block.title}</h3>
                  </Reveal>

                  <Reveal variant="up" delay={0.12}>
                    <p className={styles.body}>{block.body}</p>
                  </Reveal>

                  <Reveal variant="up" delay={0.16}>
                    <ul className={styles.points}>
                      {block.points.map((point) => (
                        <li key={point}>
                          <Check aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal variant="up" delay={0.2}>
                    <Button to={block.cta.to} variant="ghost" icon={ArrowRight}>
                      {block.cta.label}
                    </Button>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
