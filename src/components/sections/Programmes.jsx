import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Plus, X } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Figure from "../ui/Figure";
import Icon from "../../lib/icons";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { PROGRAMMES } from "../../data/content";
import styles from "./Programmes.module.css";

const EASE = [0.22, 1, 0.36, 1];

export default function Programmes() {
  const [active, setActive] = useState(null);
  const programme = PROGRAMMES.items.find((p) => p.id === active);

  /* Trap the page behind the detail dialog. */
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="programmes" className={styles.section} aria-labelledby="programmes-title">
      <Container size="wide">
        <SectionTitle
          eyebrow="Our programmes"
          title={PROGRAMMES.title}
          lead={PROGRAMMES.intro}
          id="programmes-title"
        />

        <Stagger className={styles.grid} amount={0.1}>
          {PROGRAMMES.items.map((item, i) => (
            <StaggerItem key={item.id} variant="up">
              <article className={styles.card}>
                <div className={`${styles.cardMedia} ${styles[`tint${i % 3}`]}`}>
                  <img
                    src={item.cutout.src}
                    alt={item.cutout.alt}
                    className={styles.cardCutout}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.cardIcon} aria-hidden="true">
                    <Icon name={item.icon} strokeWidth={1.6} />
                  </span>
                  <span className={styles.cardAge}>{item.age}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardText}>{item.short}</p>

                  <ul className={styles.chips}>
                    {item.highlights.map((h) => (
                      <li key={h} className={styles.chip}>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={styles.more}
                    onClick={() => setActive(item.id)}
                    aria-haspopup="dialog"
                  >
                    <span className={styles.moreIcon} aria-hidden="true">
                      <Plus />
                    </span>
                    View programme
                  </button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      {/* ---- Detail dialog ---------------------------------------------- */}
      <AnimatePresence>
        {programme && (
          <div className={styles.dialogRoot}>
            <motion.div
              className={styles.scrim}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.26 }}
              onClick={() => setActive(null)}
            />

            <motion.div
              className={styles.dialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="programme-dialog-title"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.42, ease: EASE }}
            >
              <button
                type="button"
                className={styles.dialogClose}
                onClick={() => setActive(null)}
                aria-label="Close programme details"
                autoFocus
              >
                <X aria-hidden="true" />
              </button>

              <Figure
                src={programme.image.src}
                alt={programme.image.alt}
                ratio="16 / 10"
                rounded="none"
                className={styles.dialogMedia}
                imgClassName={styles.dialogImg}
                sizes="(max-width: 760px) 100vw, 720px"
              />

              <div className={styles.dialogBody}>
                <p className={styles.dialogAge}>{programme.age}</p>
                <h3 id="programme-dialog-title" className={styles.dialogTitle}>
                  {programme.name}
                </h3>
                <p className={styles.dialogText}>{programme.desc}</p>

                <ul className={styles.dialogList}>
                  {programme.highlights.map((h) => (
                    <li key={h}>
                      <Check aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={styles.dialogActions}>
                  <Button to="/contact" icon={ArrowRight}>
                    Enquire about {programme.name}
                  </Button>
                  <Button variant="ghost" onClick={() => setActive(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
