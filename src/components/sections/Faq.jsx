import { ArrowRight, Phone } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { FAQ } from "../../data/content";
import { CONTACT } from "../../data/site";
import styles from "./Faq.module.css";

export default function Faq({ items = FAQ.items, title = FAQ.title, intro = FAQ.intro }) {
  /* FAQPage structured data, generated from the same source as the UI. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container size="wide">
        <div className={styles.grid}>
          <div className={styles.aside}>
            <SectionTitle
              eyebrow="Questions & answers"
              title={title}
              lead={intro}
              align="left"
              id="faq-title"
              className={styles.head}
            />

            <Reveal variant="up" delay={0.1} className={styles.helpCard}>
              <h3 className={styles.helpTitle}>Still have a question?</h3>
              <p className={styles.helpText}>
                Sometimes you simply want to speak with a real person. Our friendly team is
                here to help — and every family is welcome to visit and see our campus in
                action.
              </p>
              <div className={styles.helpActions}>
                <Button href={CONTACT.phoneHref} size="sm" icon={Phone} iconRight={false}>
                  {CONTACT.phone}
                </Button>
                <Button to="/contact" variant="ghost" size="sm" icon={ArrowRight}>
                  Send an enquiry
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={0.08}>
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
