import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { TESTIMONIALS } from "../../data/content";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Testimonials.module.css";

export default function Testimonials({
  items = TESTIMONIALS,
  eyebrow = "What parents say",
  title = "Trusted by more than 1,000 families",
  lead = "Verified reviews from parents across Google, Justdial and Facebook.",
}) {
  const swiperRef = useRef(null);

  /* With only three testimonials and up to three per view, Swiper has nothing
     to navigate at desktop widths — it locks, hides its own pagination, and
     slideNext()/slidePrev() become no-ops. Mirror that by hiding the arrows,
     rather than leaving dead buttons on screen. */
  const [locked, setLocked] = useState(false);
  const syncLocked = useCallback((sw) => {
    setLocked(sw.isLocked === true || (sw.isBeginning && sw.isEnd));
  }, []);

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <span className={styles.glowA} aria-hidden="true" />
      <span className={styles.glowB} aria-hidden="true" />

      <Container size="wide">
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          lead={lead}
          tone="light"
          id="testimonials-title"
        />

        <Reveal variant="up" className={styles.sliderWrap}>
          <Swiper
            modules={[Pagination, Autoplay, Keyboard, A11y]}
            onSwiper={(sw) => {
              swiperRef.current = sw;
              syncLocked(sw);
            }}
            onResize={syncLocked}
            onBreakpoint={syncLocked}
            watchOverflow
            slidesPerView={1}
            spaceBetween={24}
            loop={items.length > 2}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={720}
            pagination={{ clickable: true, el: `.${styles.bullets}`, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active" }}
            a11y={{ prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
            breakpoints={{
              760: { slidesPerView: 2, spaceBetween: 24 },
              1180: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className={styles.swiper}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <figure className={styles.card}>
                  <Quote className={styles.quoteMark} aria-hidden="true" />

                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={styles.star} aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className={styles.quote}>
                    <p>{item.quote}</p>
                  </blockquote>

                  <figcaption className={styles.author}>
                    <span className={styles.avatar} aria-hidden="true">
                      {item.author.charAt(0)}
                    </span>
                    <span className={styles.authorText}>
                      <span className={styles.authorName}>{item.author}</span>
                      <span className={styles.authorSource}>{item.source}</span>
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`${styles.controls} ${locked ? styles.controlsHidden : ""}`}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous testimonial"
            >
              <ArrowLeft aria-hidden="true" />
            </button>

            <div className={`${styles.bullets} kayo-bullets`} />

            <button
              type="button"
              className={styles.navBtn}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next testimonial"
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
