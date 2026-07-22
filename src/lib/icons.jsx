import { createElement } from "react";
import { getIcon } from "./iconRegistry";

/**
 * Renders a registry icon by name: <Icon name="Award" size={22} />
 *
 * `createElement` is used rather than JSX because the resolved component comes
 * from a lookup — the registry entries are module-level constants, so identity
 * is stable across renders.
 */
export default function Icon({ name, ...props }) {
  return createElement(getIcon(name), props);
}

/* -------------------------------------------------------------------------- */
/*  Brand marks — lucide dropped third-party logos, so these are hand-rolled.  */
/* -------------------------------------------------------------------------- */

export function FacebookIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.93 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.35-1.4a9.83 9.83 0 0 0 4.59 1.16h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a8 8 0 0 1 2.36 5.7c0 4.45-3.62 8.06-8.06 8.06a8.1 8.1 0 0 1-4.11-1.13l-.29-.17-3.05.8.81-2.98-.19-.31a8.03 8.03 0 0 1-1.24-4.28c0-4.44 3.62-8.05 8.08-8.05Zm-2.37 4.3c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.2.87 2.35.99 2.51.12.16 1.7 2.6 4.12 3.65.58.25 1.02.4 1.37.51.58.18 1.11.16 1.52.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.3-.73-1.77-.19-.46-.38-.4-.53-.41h-.45Z" />
    </svg>
  );
}
