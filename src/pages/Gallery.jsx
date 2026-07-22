import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import Figure from "../components/ui/Figure";
import { Stagger, StaggerItem } from "../components/ui/Reveal";
import { GALLERY, GALLERY_INTRO, IMAGES } from "../data/content";
import styles from "./Gallery.module.css";

const EASE = [0.22, 1, 0.36, 1];

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const open = index !== null;
  const current = open ? GALLERY[index] : null;

  const step = (delta) =>
    setIndex((i) => (i === null ? null : (i + delta + GALLERY.length) % GALLERY.length));

  return (
    <>
      <Seo
        title="Gallery | Kayo International Preschool, Perungudi Chennai"
        description="A glimpse into joyful learning at Kayo International — classroom activities, creative play, celebrations and everyday milestones in Perungudi, Chennai."
        path="/gallery"
        image={IMAGES.classroomGroup.src}
      />

      <PageHero
        eyebrow="Gallery"
        title="Life at Kayo International"
        lead={GALLERY_INTRO}
        image={IMAGES.classroomGroup}
        breadcrumb={["Gallery"]}
      />

      <section className={styles.section}>
        <Container size="wide">
          <Stagger className={styles.grid} gap={0.05} amount={0.05}>
            {GALLERY.map((image, i) => (
              <StaggerItem key={image.src} variant="zoom">
                <button
                  type="button"
                  className={styles.tile}
                  onClick={() => setIndex(i)}
                  aria-label={`View larger: ${image.alt}`}
                >
                  <Figure
                    src={image.src}
                    alt={image.alt}
                    ratio="4 / 3"
                    rounded="lg"
                    imgClassName={styles.img}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <span className={styles.sheen} aria-hidden="true" />
                </button>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Lightbox --------------------------------------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              className={styles.lbClose}
              onClick={() => setIndex(null)}
              aria-label="Close viewer"
              autoFocus
            >
              <X aria-hidden="true" />
            </button>

            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              <ArrowLeft aria-hidden="true" />
            </button>

            <motion.figure
              key={current.src}
              className={styles.lbFigure}
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={current.src} alt={current.alt} className={styles.lbImg} />
              <figcaption className={styles.lbCaption}>{current.alt}</figcaption>
            </motion.figure>

            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbNext}`}
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBanner
        title="Come and see it in person"
        body="Photographs only tell half the story. Book a campus tour and experience the warmth, the noise and the joy of a day at Kayo International."
        image={IMAGES.celebration}
      />
    </>
  );
}
