import { Phone } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import Icon from "../lib/icons";
import { IMAGES, POLICIES } from "../data/content";
import { CONTACT } from "../data/site";
import Mark from "../components/ui/Mark";
import styles from "./Policies.module.css";

export default function Policies() {
  return (
    <>
      <Seo
        title={POLICIES.seoTitle}
        description={POLICIES.metaDescription}
        path="/policies"
        image={IMAGES.safety.src}
      />

      <PageHero
        eyebrow="Our policies"
        title={POLICIES.h1}
        lead={POLICIES.lead}
        image={IMAGES.safety}
        breadcrumb={["Policies"]}
      />

      <section className={styles.section}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Twelve commitments"
            title={<>How we keep every child <Mark>safe, healthy and heard</Mark></>}
            lead="Each policy below is applied every day, by every member of our team, across both campuses."
          />

          <Stagger className={styles.grid} gap={0.06} amount={0.06}>
            {POLICIES.items.map((item, i) => (
              <StaggerItem key={item.title} variant="up">
                <article className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon name={item.icon} strokeWidth={1.6} />
                    </span>
                    <span className={styles.number} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Help ------------------------------------------------------- */}
      <section className={styles.help}>
        <Container size="narrow">
          <Reveal variant="up" className={styles.helpCard}>
            <h2 className={styles.helpTitle}>{POLICIES.help.title}</h2>
            <p className={styles.helpText}>{POLICIES.help.body}</p>
            <p className={styles.helpText}>{POLICIES.help.body2}</p>
            <div className={styles.helpActions}>
              <Button href={CONTACT.phoneHref} size="lg" icon={Phone} iconRight={false}>
                Call now — {CONTACT.phone}
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Book a campus visit
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        title="See our policies in action"
        body="There is no substitute for experiencing firsthand the warm, secure environment we have created for our children. Every family is welcome to visit."
        image={IMAGES.classroom}
      />
    </>
  );
}
