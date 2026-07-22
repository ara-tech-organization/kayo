import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./Form.module.css";

/* -------------------------------------------------------------------------- */
/*  Fields                                                                    */
/* -------------------------------------------------------------------------- */

export function Field({ label, hint, required, children, span = 1 }) {
  return (
    <div className={styles.field} data-span={span}>
      <label className={styles.label}>
        <span className={styles.labelText}>
          {label}
          {required && (
            <span className={styles.req} aria-hidden="true">
              *
            </span>
          )}
        </span>
        {children}
      </label>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}

export function Input({ className = "", ...rest }) {
  return <input className={`${styles.control} ${className}`} {...rest} />;
}

export function Textarea({ rows = 4, className = "", ...rest }) {
  return <textarea rows={rows} className={`${styles.control} ${styles.textarea} ${className}`} {...rest} />;
}

export function Select({ options, placeholder = "Please select", className = "", ...rest }) {
  return (
    <div className={styles.selectWrap}>
      <select className={`${styles.control} ${styles.select} ${className}`} defaultValue="" {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => {
          const value = typeof opt === "string" ? opt : opt.value;
          const label = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <span className={styles.selectArrow} aria-hidden="true" />
    </div>
  );
}

export function FileInput({ accept, className = "", ...rest }) {
  return (
    <input
      type="file"
      accept={accept}
      className={`${styles.control} ${styles.file} ${className}`}
      {...rest}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Form shell                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Wraps a set of fields with client-side validation, a submitting state and a
 * success panel. There is no backend in this build — `onSubmit` receives the
 * FormData so a real endpoint can be dropped in without touching the markup.
 */
export function Form({
  children,
  onSubmit,
  successTitle = "Thank you — we have your details",
  successMessage = "Our team will be in touch shortly.",
  className = "",
}) {
  const [status, setStatus] = useState("idle");
  const formId = useId();

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    const data = new FormData(event.currentTarget);

    try {
      await onSubmit?.(data);
      setStatus("success");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <div className={`${styles.formShell} ${className}`}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            className={styles.success}
            role="status"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.successIcon} aria-hidden="true">
              <CheckCircle2 />
            </span>
            <h3 className={styles.successTitle}>{successTitle}</h3>
            <p className={styles.successText}>{successMessage}</p>
            <button
              type="button"
              className={styles.successReset}
              onClick={() => setStatus("idle")}
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id={formId}
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate={false}
            initial={false}
            exit={{ opacity: 0 }}
            data-submitting={status === "submitting" ? "true" : undefined}
          >
            {typeof children === "function" ? children({ status }) : children}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FormGrid({ children, className = "" }) {
  return <div className={`${styles.grid} ${className}`}>{children}</div>;
}

export function FormActions({ children, note }) {
  return (
    <div className={styles.actions}>
      {children}
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
