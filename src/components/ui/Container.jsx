import styles from "./Container.module.css";

/**
 * Horizontal layout constraint. `size` controls max-width:
 * narrow (prose) · default (page) · wide (full-bleed grids)
 */
export default function Container({ size = "default", as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`${styles.container} ${styles[size]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
