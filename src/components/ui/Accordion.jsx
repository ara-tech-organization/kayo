import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./Accordion.module.css";

/**
 * Accessible single-open accordion with a height-animated panel.
 * `items` = [{ q, a }]
 */
export default function Accordion({ items, defaultOpen = 0, tone = "light" }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  return (
    <div className={`${styles.list} ${styles[tone]}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${uid}-btn-${i}`;
        const panelId = `${uid}-panel-${i}`;

        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
            <h3 className={styles.heading}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className={styles.question}>{item.q}</span>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Plus className={styles.icon} strokeWidth={2} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.panel}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.28, ease: "easeOut" },
                  }}
                >
                  <div className={styles.answer}>{item.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
