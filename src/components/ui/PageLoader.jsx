import styles from "./PageLoader.module.css";

/** Suspense fallback while a route chunk loads. */
export default function PageLoader() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className="visually-hidden">Loading page…</span>
    </div>
  );
}
