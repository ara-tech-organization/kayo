import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { Field, Form, FormActions, FormGrid, Input, Select, Textarea } from "../ui/Form";
import { WhatsappIcon } from "../../lib/icons";
import { CONTACT_PAGE } from "../../data/content";
import { CONTACT } from "../../data/site";
import styles from "./ContactSection.module.css";

const CARDS = [
  {
    icon: MapPin,
    label: "Visit our campus",
    lines: CONTACT.addressLines,
    action: { label: "Open in Maps", href: CONTACT.mapLink },
  },
  {
    icon: Phone,
    label: "Call us",
    lines: [CONTACT.phone],
    action: { label: "Call now", href: CONTACT.phoneHref },
  },
  {
    icon: Mail,
    label: "Email us",
    lines: [CONTACT.email],
    action: { label: "Send an email", href: CONTACT.emailHref },
  },
  {
    icon: Clock,
    label: "Opening hours",
    lines: CONTACT.hours.map((h) => `${h.label}: ${h.value}`),
  },
];

/* Simulates a network round-trip so the submitting state is visible. */
const submit = () => new Promise((resolve) => setTimeout(resolve, 900));

export default function ContactSection({
  eyebrow = "Get in touch",
  title = "Start your child's journey today",
  lead = CONTACT_PAGE.formNote,
}) {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <Container size="wide">
        <SectionTitle eyebrow={eyebrow} title={title} lead={lead} id="contact-title" />

        <div className={styles.grid}>
          {/* ---- Contact cards + map ---------------------------------- */}
          <div className={styles.aside}>
            <Stagger className={styles.cards} gap={0.08}>
              {CARDS.map((card) => (
                <StaggerItem key={card.label} variant="up" className={styles.card}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    <card.icon />
                  </span>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardLabel}>{card.label}</h3>
                    <div className={styles.cardLines}>
                      {card.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                    {card.action && (
                      <a
                        className={styles.cardAction}
                        href={card.action.href}
                        {...(/^https?:/.test(card.action.href)
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {card.action.label}
                      </a>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal variant="up" delay={0.1} className={styles.mapWrap}>
              <iframe
                title="Kayo International Preschool, Perungudi — location map"
                src={CONTACT.mapEmbed}
                className={styles.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>

          {/* ---- Enquiry form ------------------------------------------ */}
          <Reveal variant="up" delay={0.06} className={styles.formCard}>
            <h3 className={styles.formTitle}>Quick enquiry</h3>
            <p className={styles.formLead}>
              Our admissions counsellor will get back to you within 24 hours.
            </p>

            <Form
              onSubmit={submit}
              successTitle="Thank you — we have your enquiry"
              successMessage="Our admissions counsellor will get back to you within 24 hours. For anything urgent, call us on +91 98840 04650."
            >
              {({ status }) => (
                <>
                  <FormGrid>
                    <Field label="Parent's name" required>
                      <Input name="parentName" placeholder="Enter your full name" required autoComplete="name" />
                    </Field>

                    <Field label="Phone number" required>
                      <Input
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9+\s-]{10,15}"
                        placeholder="Enter your 10-digit mobile number"
                        required
                        autoComplete="tel"
                      />
                    </Field>

                    <Field label="Email address">
                      <Input name="email" type="email" placeholder="Enter your email (optional)" autoComplete="email" />
                    </Field>

                    <Field label="Child's age">
                      <Select name="childAge" options={CONTACT_PAGE.ageOptions} placeholder="Select age group" />
                    </Field>

                    <Field label="Programme interested in">
                      <Select
                        name="programme"
                        options={CONTACT_PAGE.programmeOptions}
                        placeholder="Select a programme"
                      />
                    </Field>

                    <Field label="Branch preferred">
                      <Select name="branch" options={CONTACT.branches} placeholder="Select a branch" />
                    </Field>

                    <Field label="Message" span={2}>
                      <Textarea name="message" placeholder="How can we help you? (optional)" />
                    </Field>
                  </FormGrid>

                  <FormActions note="By submitting this form you agree to be contacted by our admissions team.">
                    <Button
                      type="submit"
                      size="lg"
                      icon={Send}
                      full
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending…" : "Send Enquiry"}
                    </Button>
                  </FormActions>
                </>
              )}
            </Form>

            <div className={styles.formFoot}>
              <span>Prefer to talk?</span>
              <a href={CONTACT.phoneHref} className={styles.formFootLink}>
                <Phone aria-hidden="true" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsappHref}
                className={styles.formFootLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon size={16} />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
