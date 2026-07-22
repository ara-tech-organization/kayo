import { forwardRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/**
 * The single button in the system.
 *
 * variant : primary | secondary | ghost | light | outline-light
 * size    : sm | md | lg
 * Renders <Link>, <a> or <button> depending on the props supplied.
 */
const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    to,
    href,
    icon: Icon,
    iconRight = true,
    full = false,
    className = "",
    children,
    onClick,
    ...rest
  },
  ref
) {
  const [ripples, setRipples] = useState([]);

  const handleClick = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const id = `${event.clientX}-${event.clientY}-${rect.top}`;
      const ripple = {
        id,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        size: Math.max(rect.width, rect.height) * 2,
      };
      setRipples((current) => [...current, ripple]);
      window.setTimeout(
        () => setRipples((current) => current.filter((r) => r.id !== ripple.id)),
        600
      );
      onClick?.(event);
    },
    [onClick]
  );

  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    full ? styles.full : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className={styles.label}>
        {Icon && !iconRight && <Icon className={styles.icon} aria-hidden="true" />}
        {children}
        {Icon && iconRight && <Icon className={styles.icon} aria-hidden="true" />}
      </span>
      <span className={styles.ripples} aria-hidden="true">
        {ripples.map((r) => (
          <span
            key={r.id}
            className={styles.ripple}
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          />
        ))}
      </span>
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} onClick={handleClick} {...rest}>
        {inner}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={handleClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} type="button" className={classes} onClick={handleClick} {...rest}>
      {inner}
    </button>
  );
});

export default Button;
