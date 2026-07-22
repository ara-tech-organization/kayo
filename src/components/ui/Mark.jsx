import styles from "./Mark.module.css";

/**
 * Highlights a phrase inside a heading with the lime brand bar.
 *
 *   <SectionTitle title={<>Three <Mark>promises</Mark> we make</>} />
 *
 * `tone="light"` for dark surfaces. Used sparingly — one phrase per section at
 * most, so it stays an accent rather than decoration.
 */
export default function Mark({ children, tone = "brand" }) {
  return <span className={`${styles.mark} ${styles[tone]}`}>{children}</span>;
}
