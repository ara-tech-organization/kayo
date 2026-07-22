import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Figure from "../ui/Figure";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { GALLERY_INTRO, IMAGES } from "../../data/content";
import Mark from "../ui/Mark";
import styles from "./GalleryPreview.module.css";

/* A five-tile mosaic — one hero tile spanning 2×2, then four supporting shots
   that flow into the remaining cells. */
const TILES = [IMAGES.play, IMAGES.art, IMAGES.theatre, IMAGES.music, IMAGES.outdoor];

export default function GalleryPreview() {
  return (
    <section className={styles.section} aria-labelledby="gallery-title">
      <Container size="wide">
        <SectionTitle
          eyebrow="Gallery"
          title={<><Mark>Everyday moments</Mark> at Kayo</>}
          lead={GALLERY_INTRO}
          id="gallery-title"
        />

        <Stagger className={styles.mosaic} gap={0.08}>
          {TILES.map((image, i) => (
            <StaggerItem
              key={image.src}
              variant="zoom"
              className={`${styles.tile} ${i === 0 ? styles.tileLarge : ""}`}
            >
              <Figure
                src={image.src}
                alt={image.alt}
                ratio={i === 0 ? "4 / 3" : "1 / 1"}
                rounded="lg"
                className={styles.figure}
                imgClassName={styles.img}
                sizes={i === 0 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"}
              />
              <span className={styles.sheen} aria-hidden="true" />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="up" className={styles.action}>
          <Button to="/gallery" icon={ArrowRight}>
            View the full gallery
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
