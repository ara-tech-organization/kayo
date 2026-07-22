import { ArrowRight, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Figure from "../ui/Figure";
import Reveal from "../ui/Reveal";
import { CLOSING_CTA, IMAGES } from "../../data/content";
import { CONTACT } from "../../data/site";
import styles from "./CtaBanner.module.css";

export default function CtaBanner({
  title = CLOSING_CTA.title,
  body = CLOSING_CTA.body,
  note = CLOSING_CTA.note,
  primary = { label: "Start Today", to: "/contact" },
  image = IMAGES.tour,
}) {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <Container size="wide">
        <Reveal variant="up" className={styles.panel}>
          <div className={styles.copy}>
            <h2 id="cta-title" className={styles.title}>
              {title}
            </h2>
            <p className={styles.body}>{body}</p>

            <div className={styles.actions}>
              <Button to={primary.to} variant="light" size="lg" icon={ArrowRight}>
                {primary.label}
              </Button>
              <Button
                href={CONTACT.phoneHref}
                variant="outline-light"
                size="lg"
                icon={Phone}
                iconRight={false}
              >
                {CONTACT.phone}
              </Button>
            </div>

            {note && <p className={styles.note}>{note}</p>}
          </div>

          <div className={styles.media}>
            <Figure
              src={image.src}
              alt={image.alt}
              ratio="4 / 3"
              rounded="lg"
              className={styles.figure}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>

          <span className={styles.glow} aria-hidden="true" />
        </Reveal>
      </Container>
    </section>
  );
}
