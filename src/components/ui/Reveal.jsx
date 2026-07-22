import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal primitive. One component covers every entrance we use so the
 * motion language stays identical site-wide.
 *
 *   <Reveal variant="up" delay={0.1}>…</Reveal>
 *   <Stagger><Reveal.Item>…</Reveal.Item></Stagger>
 */

const DISTANCE = 26;

const VARIANTS = {
  up: { hidden: { opacity: 0, y: DISTANCE }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -DISTANCE }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: DISTANCE }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -DISTANCE }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  mask: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    show: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  },
};

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  variant = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.25,
  as = "div",
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={VARIANTS[variant] || VARIANTS.up}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that cascades its children's entrance. */
export function Stagger({
  as = "div",
  className,
  delay = 0,
  gap = 0.09,
  once = true,
  amount = 0.2,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Child of <Stagger>. Inherits the parent's timing. */
export function StaggerItem({ variant = "up", as = "div", className, children, ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={VARIANTS[variant] || VARIANTS.up}
      transition={{ duration: 0.65, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

Reveal.Item = StaggerItem;
export { VARIANTS, EASE };
