import { useCallback, useRef } from "react";
import Icon from "../../lib/icons";
import styles from "./AnimatedCard.module.css";

/**
 * The workhorse feature card: icon plate, title, body, and a cursor-tracking
 * glow that follows the pointer across the surface.
 *
 * tone   : light | tint | dark | glass
 * accent : brand | lime  — colours the icon plate and glow
 */
export default function AnimatedCard({
  icon,
  title,
  eyebrow,
  children,
  tone = "light",
  accent = "brand",
  as: Tag = "article",
  className = "",
  interactive = true,
  footer,
  ...rest
}) {
  const ref = useRef(null);

  const handleMove = useCallback((event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Tag
      ref={ref}
      className={[
        styles.card,
        styles[tone],
        styles[accent],
        interactive ? styles.interactive : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onPointerMove={interactive ? handleMove : undefined}
      {...rest}
    >
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.body}>
        {icon && (
          <span className={styles.iconPlate} aria-hidden="true">
            <Icon name={icon} className={styles.icon} strokeWidth={1.6} />
          </span>
        )}

        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        {title && <h3 className={styles.title}>{title}</h3>}
        {children && <div className={styles.text}>{children}</div>}
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </Tag>
  );
}
