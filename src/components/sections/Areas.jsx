import { MapPin, Navigation } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { AREAS } from "../../data/content";
import { CONTACT } from "../../data/site";
import styles from "./Areas.module.css";

export default function Areas() {
  return (
    <section className={styles.section} aria-labelledby="areas-title">
      <Container size="wide">
        <SectionTitle
          eyebrow="Areas we serve"
          title={AREAS.title}
          lead={AREAS.intro}
          id="areas-title"
        />

        <Stagger className={styles.grid} gap={0.05} amount={0.1}>
          {AREAS.primary.map((area) => (
            <StaggerItem key={area} variant="zoom">
              <div className={styles.tile}>
                <MapPin className={styles.pin} aria-hidden="true" />
                <span className={styles.name}>{area}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {AREAS.wider && (
          <Reveal variant="up" className={styles.wider}>
            <span className={styles.widerLabel}>{AREAS.wider.label}</span>
            <span className={styles.widerItems}>{AREAS.wider.items.join(" · ")}</span>
          </Reveal>
        )}

        <Reveal variant="up" className={styles.branches}>
          <div className={styles.branchList}>
            {AREAS.branches.map((branch) => (
              <div key={branch.name} className={styles.branch}>
                <span className={styles.branchNote}>{branch.note}</span>
                <span className={styles.branchName}>{branch.name}</span>
              </div>
            ))}
          </div>

          <Button href={CONTACT.mapLink} variant="ghost" icon={Navigation} iconRight={false}>
            Get directions
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
