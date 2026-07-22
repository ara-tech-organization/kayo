import { ArrowRight } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Figure from "../components/ui/Figure";
import AnimatedCard from "../components/ui/AnimatedCard";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import Icon from "../lib/icons";
import { FAMILY_CONNECT, IMAGES } from "../data/content";
import styles from "./FamilyConnect.module.css";

export default function FamilyConnect() {
  const { events, communication, benefits, resources } = FAMILY_CONNECT;

  return (
    <>
      <Seo
        title={FAMILY_CONNECT.seoTitle}
        description={FAMILY_CONNECT.metaDescription}
        path="/family-connect"
        image={IMAGES.familyConnect.src}
      />

      <PageHero
        eyebrow="Family Connect"
        title={FAMILY_CONNECT.h1}
        lead={FAMILY_CONNECT.lead}
        image={IMAGES.familyConnect}
        breadcrumb={["Family Connect"]}
      />

      {/* ---- Research ---------------------------------------------------- */}
      <section className={styles.research}>
        <Container size="wide">
          <div className={styles.researchGrid}>
            <Reveal variant="right" duration={0.9} className={styles.researchMedia}>
              <Figure
                src={IMAGES.tour.src}
                alt={IMAGES.tour.alt}
                ratio="4 / 3"
                rounded="xl"
                sizes="(max-width: 980px) 100vw, 48vw"
              />
            </Reveal>

            <div>
              <SectionTitle
                eyebrow="Why it matters"
                title="Involved families raise more confident children"
                align="left"
                className={styles.head}
              />
              <Reveal variant="up">
                <p className={styles.para}>{FAMILY_CONNECT.research}</p>
              </Reveal>
              <Reveal variant="up" delay={0.1} className={styles.researchAction}>
                <Button to="/contact" icon={ArrowRight}>
                  Talk to our team
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Daily communication ------------------------------------------ */}
      <section className={styles.comms}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Daily communication"
            title={communication.title}
            lead={communication.intro}
          />

          <Stagger className={styles.commsGrid} gap={0.07} amount={0.1}>
            {communication.items.map((item, i) => (
              <StaggerItem key={item.name} variant="up">
                <AnimatedCard
                  icon={item.icon}
                  title={item.name}
                  accent={i % 2 === 1 ? "lime" : "brand"}
                  tone="glass"
                  className={styles.commCard}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Events -------------------------------------------------------- */}
      <section className={styles.events}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Family events calendar"
            title={events.title}
            lead={events.intro}
            tone="light"
          />

          <Stagger className={styles.eventsRow} gap={0.08}>
            {events.items.map((item, i) => (
              <StaggerItem key={item.name} variant="up" className={styles.event}>
                <span className={styles.eventIcon} aria-hidden="true">
                  <Icon name={item.icon} strokeWidth={1.6} />
                </span>
                <span className={styles.eventName}>{item.name}</span>
                <span className={styles.eventIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Benefits ------------------------------------------------------ */}
      <section className={styles.benefits}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Facilities"
            title={benefits.title}
            lead="Everything a growing child needs across the school day — thoughtfully designed, carefully maintained."
          />

          <Stagger className={styles.benefitsGrid} gap={0.05} amount={0.08}>
            {benefits.items.map((item) => (
              <StaggerItem key={item.name} variant="zoom">
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon} aria-hidden="true">
                    <Icon name={item.icon} strokeWidth={1.6} />
                  </span>
                  <span className={styles.benefitName}>{item.name}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Parent resources ---------------------------------------------- */}
      <section className={styles.resources}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Parent resources"
            title={resources.title}
            lead={resources.policies.intro}
          />

          <div className={styles.resourceGrid}>
            <Stagger className={styles.policyList} gap={0.07}>
              {resources.policies.items.map((item) => (
                <StaggerItem key={item.name} variant="up" className={styles.policy}>
                  <h3 className={styles.policyName}>{item.name}</h3>
                  <p className={styles.policyDesc}>{item.desc}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <div className={styles.resourceAside}>
              <Reveal variant="up" className={styles.resourceCard}>
                <h3 className={styles.resourceTitle}>{resources.handbook.title}</h3>
                <p className={styles.resourceText}>{resources.handbook.desc}</p>
              </Reveal>

              <Reveal variant="up" delay={0.08} className={styles.resourceCard}>
                <h3 className={styles.resourceTitle}>{resources.updates.title}</h3>
                <p className={styles.resourceText}>{resources.updates.desc}</p>
              </Reveal>

              <Reveal variant="up" delay={0.16}>
                <Button to="/policies" variant="ghost" icon={ArrowRight} full>
                  Read all Kayo policies
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Become part of the Kayo family"
        body="Visit our Perungudi campus, meet the educators who will know your child by name, and see how closely we work with every family."
        image={IMAGES.kayoFamily}
      />
    </>
  );
}
