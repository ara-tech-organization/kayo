import { Send, ShieldCheck } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import AnimatedCard from "../components/ui/AnimatedCard";
import Figure from "../components/ui/Figure";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import {
  Field,
  FileInput,
  Form,
  FormActions,
  FormGrid,
  Input,
  Select,
} from "../components/ui/Form";
import { CAREERS, IMAGES } from "../data/content";
import Mark from "../components/ui/Mark";
import styles from "./Careers.module.css";

const submit = () => new Promise((resolve) => setTimeout(resolve, 900));

export default function Careers() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Preschool Teacher",
    description:
      "Join Team Kayo as a Preschool Teacher at our Perungudi, Chennai centre. Deliver our NURTURE Lab curriculum in a supportive, professional environment with ongoing training and career growth.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Kayo International Preschool and DayCare",
      sameAs: "https://kayointernational.in",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perungudi",
        addressRegion: "Chennai",
        addressCountry: "IN",
      },
    },
    employmentType: "FULL_TIME",
    qualifications: "Bachelor's degree in Early Years Education or equivalent",
    industry: "Early Childhood Education",
    datePosted: "2026-07-01",
    validThrough: "2026-12-31",
    applicationContact: {
      "@type": "ContactPoint",
      contactType: "Recruitment",
      availableLanguage: ["English", "Tamil"],
    },
  };

  return (
    <>
      <Seo
        title={CAREERS.seoTitle}
        description={CAREERS.metaDescription}
        path="/careers"
        image={IMAGES.careers.src}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Careers"
        title={CAREERS.h1}
        lead={CAREERS.lead}
        image={IMAGES.careers}
        breadcrumb={["Careers"]}
      />

      {/* ---- Why work here ------------------------------------------------ */}
      <section className={styles.perks}>
        <Container size="wide">
          <SectionTitle
            eyebrow="Why Team Kayo"
            title={<>A place where educators are <Mark>valued</Mark></>}
            lead={CAREERS.body}
          />

          <Stagger className={styles.perksGrid} gap={0.08} amount={0.1}>
            {CAREERS.perks.map((perk, i) => (
              <StaggerItem key={perk.title} variant="up">
                <AnimatedCard
                  icon={perk.icon}
                  title={perk.title}
                  accent={i % 2 === 1 ? "lime" : "brand"}
                >
                  <p>{perk.desc}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---- Application --------------------------------------------------- */}
      <section className={styles.apply}>
        <Container size="wide">
          <div className={styles.applyGrid}>
            <div className={styles.applyAside}>
              <SectionTitle
                eyebrow="Apply now"
                title="Take the first step"
                lead={CAREERS.cta}
                align="left"
                className={styles.head}
              />

              <Reveal variant="right" duration={0.9}>
                <Figure
                  src={IMAGES.reading.src}
                  alt={IMAGES.reading.alt}
                  ratio="4 / 3"
                  rounded="xl"
                  sizes="(max-width: 980px) 100vw, 42vw"
                />
              </Reveal>

              <Reveal variant="up" delay={0.1} className={styles.privacy}>
                <ShieldCheck aria-hidden="true" />
                <p>{CAREERS.privacy}</p>
              </Reveal>
            </div>

            <Reveal variant="up" delay={0.06} className={styles.formCard}>
              <h2 className={styles.formTitle}>Application form</h2>

              <Form
                onSubmit={submit}
                successTitle="Application received"
                successMessage="Thank you for your interest in Team Kayo. Our team reviews every application and will be in touch if there is a match."
              >
                {({ status }) => (
                  <>
                    <FormGrid>
                      <Field label="Your name" required span={2}>
                        <Input name="name" placeholder="Full name" required autoComplete="name" />
                      </Field>

                      <Field label="Your phone" required>
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

                      <Field label="Your email" required>
                        <Input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          autoComplete="email"
                        />
                      </Field>

                      <Field label="Select designation" required span={2}>
                        <Select
                          name="designation"
                          options={CAREERS.designations}
                          placeholder="Choose a role"
                          required
                        />
                      </Field>

                      <Field
                        label="Upload resume"
                        hint="PDF, DOC or DOCX — maximum 5 MB."
                        required
                        span={2}
                      >
                        <FileInput
                          name="resume"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword"
                          required
                        />
                      </Field>
                    </FormGrid>

                    <FormActions>
                      <Button
                        type="submit"
                        size="lg"
                        icon={Send}
                        full
                        disabled={status === "submitting"}
                      >
                        {status === "submitting" ? "Submitting…" : "Submit Application"}
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
