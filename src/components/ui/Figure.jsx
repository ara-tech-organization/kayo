import { useState } from "react";
import styles from "./Figure.module.css";

/**
 * Image with a reserved aspect-ratio box (so nothing shifts on load), a
 * brand-tinted placeholder, native lazy-loading and a soft fade-in.
 *
 * `ratio` accepts any CSS aspect-ratio value, e.g. "4 / 3", "1 / 1".
 */
export default function Figure({
  src,
  alt,
  ratio = "4 / 3",
  priority = false,
  rounded = "lg",
  className = "",
  imgClassName = "",
  sizes = "(max-width: 900px) 100vw, 50vw",
  children,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`${styles.figure} ${styles[rounded]} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className={styles.placeholder} aria-hidden="true" />

      {!failed && (
        <img
          src={src}
          alt={alt}
          className={`${styles.img} ${loaded ? styles.loaded : ""} ${imgClassName}`}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
          draggable="false"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}

      {children}
    </div>
  );
}
