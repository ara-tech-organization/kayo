import Reveal from "./Reveal";
import styles from "./SectionTitle.module.css";

/**
 * Consistent section header: optional eyebrow, heading and lead paragraph.
 * `align` = left | center · `tone` = dark | light
 */
export default function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "dark",
  as: Tag = "h2",
  id,
  className = "",
  children,
}) {
  return (
    <header
      className={`${styles.head} ${styles[align]} ${styles[tone]} ${className}`}
    >
      {eyebrow && (
        <Reveal variant="fade" duration={0.5}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal variant="up" delay={0.06}>
        <Tag id={id} className={styles.title}>
          {title}
        </Tag>
      </Reveal>

      {lead && (
        <Reveal variant="up" delay={0.12}>
          <p className={styles.lead}>{lead}</p>
        </Reveal>
      )}

      {children && (
        <Reveal variant="up" delay={0.18}>
          <div className={styles.extra}>{children}</div>
        </Reveal>
      )}
    </header>
  );
}
