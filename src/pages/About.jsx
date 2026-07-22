import { ArrowRight, BadgeCheck } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Figure from "../components/ui/Figure";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import { ABOUT, IMAGES } from "../data/content";
import styles from "./About.module.css";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: "Kayo International Preschool and DayCare",
    founder: {
      "@type": "Person",
      name: "Veena Sundaramurthy",
      jobTitle: "Founder & Early Childhood Educator",
    },
    foundingDate: "2013",
    description:
      "Trusted preschool in Chennai with 10+ years experience, qualified teachers, and 4.9 ★ Google rating.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perungudi",
      addressRegion: "Chennai",
      addressCountry: "IN",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "63" },
    areaServed: ["Perungudi, Chennai", "Saravanampatti, Coimbatore"],
  };

  return (
    <>
      <Seo
        title={ABOUT.seoTitle}
        description={ABOUT.metaDescription}
        path="/about"
        image={IMAGES.teachers.src}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="About us"
        title={ABOUT.h1}
        lead={ABOUT.lead}
        image={IMAGES.campus}
        breadcrumb={["About"]}
      />

      {/* ---- Introduction ---------------------------------------------- */}
      <section className={styles.intro}>
        <Container size="narrow">
          <Reveal variant="up">
            <p className={styles.introText}>{ABOUT.intro}</p>
          </Reveal>
        </Container>
      </section>

      {/* ---- Story ------------------------------------------------------ */}
      <section className={styles.story}>
        <Container size="wide">
          <div className={styles.storyGrid}>
            <Reveal variant="right" duration={0.9} className={styles.storyMedia}>
              <Figure
                src={IMAGES.learning.src}
                alt={IMAGES.learning.alt}
                ratio="4 / 5"
                rounded="xl"
                sizes="(max-width: 980px) 100vw, 45vw"
              />
              <span className={styles.storyBadge}>
                <span className={styles.storyBadgeValue}>2013</span>
                <span className={styles.storyBadgeLabel}>Founded in Perungudi</span>
              </span>
            </Reveal>

            <div>
              <SectionTitle
                eyebrow="Our story"
                title={ABOUT.story.title}
                align="left"
                className={styles.storyHead}
              />
              {ABOUT.story.paragraphs.map((para, i) => (
                <Reveal key={i} variant="up" delay={0.06 * i}>
                  <p className={styles.para}>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Founders ---------------------------------------------------- */}
      <section className={styles.founders}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Leadership"
            title="Meet our founders"
            lead="Two complementary backgrounds — early childhood education and business technology — behind one child-first vision."
          />

          <div className={styles.founderList}>
            {ABOUT.founders.map((founder, i) => (
              <article
                key={founder.name}
                className={`${styles.founder} ${i % 2 === 1 ? styles.founderFlip : ""}`}
              >
                <Reveal
                  variant={i % 2 === 1 ? "left" : "right"}
                  duration={0.85}
                  className={styles.founderMedia}
                >
                  <Figure
                    src={founder.image.src}
                    alt={founder.image.alt}
                    ratio="3 / 4"
                    rounded="xl"
                    sizes="(max-width: 900px) 100vw, 36vw"
                  />
                </Reveal>

                <div className={styles.founderCopy}>
                  <Reveal variant="up">
                    <p className={styles.founderRole}>{founder.role}</p>
                    <h3 className={styles.founderName}>{founder.name}</h3>
                  </Reveal>

                  {founder.paragraphs.map((para, j) => (
                    <Reveal key={j} variant="up" delay={0.05 * (j + 1)}>
                      <p className={styles.para}>{para}</p>
                    </Reveal>
                  ))}

                  <Stagger className={styles.credentials} gap={0.07}>
                    {founder.credentials.map((c) => (
                      <StaggerItem key={c} variant="up" as="li" className={styles.credential}>
                        <BadgeCheck aria-hidden="true" />
                        {c}
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Stats />

      {/* ---- Team -------------------------------------------------------- */}
      <section className={styles.team}>
        <Container size="wide">
          <div className={styles.teamGrid}>
            <div>
              <SectionTitle
                eyebrow="Our team"
                title={ABOUT.team.title}
                align="left"
                className={styles.storyHead}
              />
              {ABOUT.team.paragraphs.map((para, i) => (
                <Reveal key={i} variant="up" delay={0.06 * i}>
                  <p className={styles.para}>{para}</p>
                </Reveal>
              ))}

              <Reveal variant="up" delay={0.2} className={styles.teamActions}>
                <Button to="/careers" icon={ArrowRight}>
                  Join Team Kayo
                </Button>
                <Button to="/curriculum" variant="ghost">
                  How we teach
                </Button>
              </Reveal>
            </div>

            <Reveal variant="left" duration={0.9} className={styles.teamMedia}>
              <Figure
                src={ABOUT.team.image.src}
                alt={ABOUT.team.image.alt}
                ratio="4 / 3"
                rounded="xl"
                sizes="(max-width: 980px) 100vw, 48vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
