import * as CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";

/**
 * react-countup ships CommonJS only, so the default export can arrive either as
 * the component itself or wrapped in a namespace object depending on how the
 * bundler applies interop. Normalise it once, here.
 */
const CountUp = CountUpModule.default?.default ?? CountUpModule.default ?? CountUpModule;

/**
 * Number that counts up once, the first time it scrolls into view.
 */
export default function Counter({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 2.2,
  separator = ",",
  className,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-60px 0px" });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={value}
          decimals={decimals}
          duration={duration}
          separator={separator}
          prefix={prefix}
          suffix={suffix}
          useEasing
        />
      ) : (
        <span aria-hidden="true">
          {prefix}
          {(0).toFixed(decimals)}
          {suffix}
        </span>
      )}
    </span>
  );
}
