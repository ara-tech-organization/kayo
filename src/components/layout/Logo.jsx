import asset from "../../lib/asset";
import styles from "./Logo.module.css";

/**
 * The Kayo International logo.
 *
 * `tone="light"` swaps in the variant whose "International" wordmark is white,
 * for use on the dark footer and other dark surfaces — the standard logo's
 * wordmark is near-black and disappears there.
 */
export default function Logo({ tone = "dark", compact = false }) {
  const src = asset(tone === "light" ? "/brand/kayo-logo-light.webp" : "/brand/kayo-logo.webp");

  return (
    <img
      src={src}
      alt="Kayo International — Shaping Little Minds"
      className={`${styles.logo} ${compact ? styles.compact : ""}`}
      width="400"
      height="180"
      decoding="async"
    />
  );
}
