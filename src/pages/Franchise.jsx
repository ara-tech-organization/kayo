import { Check, Send } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import Journey from "../components/sections/Journey";
import Testimonials from "../components/sections/Testimonials";
import Stats from "../components/sections/Stats";
import Awards from "../components/sections/Awards";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import AnimatedCard from "../components/ui/AnimatedCard";
import Figure from "../components/ui/Figure";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import { Field, Form, FormActions, FormGrid, Input, Textarea } from "../components/ui/Form";
import Icon from "../lib/icons";
import { FRANCHISE, FRANCHISE_TESTIMONIALS, IMAGES } from "../data/content";
import styles from "./Franchise.module.css";

const submit = () => new Promise((resolve) => setTimeout(resolve, 900));

export default function Franchise() {
  return (
    <>
      <Seo
        title={FRANCHISE.seoTitle}
        description={FRANCHISE.metaDescription}
        path="/franchise"
        image={IMAGES.campus.src}
      />

      <PageHero
        eyebrow="Franchise opportunity"
        title={FRANCHISE.h1}
        lead={FRANCHISE.lead}
        image={IMAGES.campus}
        breadcrumb={["Franchise"]}
      >
        <Button href="#franchise-enquiry" size="lg">
          Enquire now
        </Button>
      </PageHero>

      {/* ---- Why partner -------------------------------------------------- */}
      <section className={styles.why}>
        <Container size="wide">
          <SectionTitle
            eyebrow={FRANCHISE.subtitle}
            title={FRANCHISE.why.title}
            lead={FRANCHISE.lead2}
          />

          <Stagger className={styles.whyGrid} gap={0.07} amount={0.1}>
            {FRANCHISE.why.items.map((item, i) => (
              <StaggerItem key={item.name} variant="up">
                <AnimatedCard
                  icon={item.icon}
                  title={item.name}
                  accent={i % 2 === 1 ? "lime" : "brand"}
                  tone={i % 3 === 0 ? "tint" : "light"}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Support system ----------------------------------------------- */}
      <section className={styles.support}>
        <Container size="wide">
          <SectionTitle
            eyebrow="End-to-end support"
            title={FRANCHISE.support.title}
            lead="From site selection to your first admissions campaign, our head-office team stays alongside you."
            tone="light"
          />

          <Stagger className={styles.supportRow} gap={0.08}>
            {FRANCHISE.support.items.map((item) => (
              <StaggerItem key={item.name} variant="up" className={styles.supportItem}>
                <span className={styles.supportIcon} aria-hidden="true">
                  <Icon name={item.icon} strokeWidth={1.6} />
                </span>
                <span className={styles.supportName}>{item.name}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Partner profile + investment ---------------------------------- */}
      <section className={styles.profile}>
        <Container size="wide">
          <div className={styles.profileGrid}>
            <div>
              <SectionTitle
                eyebrow="Partner profile"
                title={FRANCHISE.partner.title}
                lead={FRANCHISE.partner.intro}
                align="left"
                className={styles.head}
              />

              <Stagger className={styles.checkList} gap={0.06}>
                {FRANCHISE.partner.items.map((item) => (
                  <StaggerItem key={item.name} variant="up" as="li" className={styles.checkItem}>
                    <Check aria-hidden="true" />
                    <span>
                      <strong>{item.name}</strong> {item.desc}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal variant="up" delay={0.12}>
                <p className={styles.note}>{FRANCHISE.partner.closing}</p>
              </Reveal>
            </div>

            <div>
              <SectionTitle
                eyebrow="Investment"
                title={FRANCHISE.investment.title}
                lead={FRANCHISE.investment.intro}
                align="left"
                className={styles.head}
              />

              <Stagger className={styles.investList} gap={0.06}>
                {FRANCHISE.investment.items.map((item) => (
                  <StaggerItem key={item.name} variant="up" className={styles.invest}>
                    <h3 className={styles.investName}>{item.name}</h3>
                    <p className={styles.investDesc}>{item.desc}</p>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal variant="up" delay={0.12}>
                <p className={styles.note}>{FRANCHISE.investment.closing}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Stats />
      <Awards />

      <Journey
        id="franchise-process"
        eyebrow="How to apply"
        title={FRANCHISE.process.title}
        intro={FRANCHISE.process.intro}
        steps={FRANCHISE.process.steps}
      />

      <Testimonials
        items={FRANCHISE_TESTIMONIALS}
        eyebrow="Partner stories"
        title="Success stories from our franchise partners"
        lead="Entrepreneurs across Chennai, Tamil Nadu and South India on what partnering with Kayo has meant for them."
      />

      {/* ---- Enquiry ------------------------------------------------------- */}
      <section id="franchise-enquiry" className={styles.enquiry}>
        <Container size="wide">
          <div className={styles.enquiryGrid}>
            <div>
              <SectionTitle
                eyebrow="Let's grow together"
                title={FRANCHISE.enquire.title}
                lead={FRANCHISE.enquire.body}
                align="left"
                className={styles.head}
              />
              <Reveal variant="up">
                <p className={styles.locations}>{FRANCHISE.locations}</p>
              </Reveal>

              <Reveal variant="up" delay={0.08} className={styles.partnersMedia}>
                <Figure
                  src={IMAGES.franchisePartners.src}
                  alt={IMAGES.franchisePartners.alt}
                  ratio="16 / 10"
                  rounded="lg"
                  sizes="(max-width: 1080px) 100vw, 40vw"
                />
              </Reveal>
            </div>

            <Reveal variant="up" delay={0.06} className={styles.formCard}>
              <Form
                onSubmit={submit}
                successTitle="Thank you — your enquiry is in"
                successMessage="Our franchise team will reach out within 48 hours to arrange a confidential discussion."
              >
                {({ status }) => (
                  <>
                    <FormGrid>
                      <Field label="Full name" required span={2}>
                        <Input name="fullName" placeholder="Your full name" required autoComplete="name" />
                      </Field>

                      <Field label="Phone number" required>
                        <Input
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9+\s-]{10,15}"
                          placeholder="10-digit mobile number"
                          required
                          autoComplete="tel"
                        />
                      </Field>

                      <Field label="Email address" required>
                        <Input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          autoComplete="email"
                        />
                      </Field>

                      <Field label="Preferred city / location" required span={2}>
                        <Input name="city" placeholder="e.g. Sholinganallur, Chennai" required />
                      </Field>

                      <Field
                        label="Your message"
                        hint="Tell us about your background, investment capacity, and why you are interested in a preschool franchise."
                        span={2}
                      >
                        <Textarea name="message" rows={5} placeholder="Optional" />
                      </Field>
                    </FormGrid>

                    <FormActions>
                      <Button type="submit" size="lg" icon={Send} full disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending…" : "Submit Enquiry"}
                      </Button>
                    </FormActions>
                  </>
                )}
              </Form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
