import Seo from "../components/ui/Seo";
import PageHero from "../components/sections/PageHero";
import ContactSection from "../components/sections/ContactSection";
import Faq from "../components/sections/Faq";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import { CONTACT_PAGE, IMAGES } from "../data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: "KAYO International Preschool - Perungudi",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.3, 1st Cross Street, Rajiv Nagar",
      addressLocality: "Perungudi",
      addressRegion: "Tamil Nadu",
      postalCode: "600096",
      addressCountry: "IN",
    },
    telephone: "+91-98840-04650",
    email: "chnperungudi@kayointernational.in",
    openingHours: "Mo-Sa 09:00-18:00",
    url: "https://kayointernational.in/contact",
    geo: { "@type": "GeoCoordinates", latitude: "12.9654", longitude: "80.2451" },
  };

  return (
    <>
      <Seo
        title={CONTACT_PAGE.seoTitle}
        description={CONTACT_PAGE.metaDescription}
        path="/contact"
        image={IMAGES.tour.src}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Contact us"
        title={CONTACT_PAGE.h1}
        lead={CONTACT_PAGE.lead}
        image={IMAGES.tour}
        breadcrumb={["Contact"]}
      />

      <section className={styles.intro}>
        <Container size="narrow">
          <Reveal variant="up">
            <p className={styles.introText}>{CONTACT_PAGE.body}</p>
          </Reveal>
        </Container>
      </section>

      <ContactSection
        eyebrow="Perungudi campus — main branch"
        title="Send us an enquiry"
        lead={CONTACT_PAGE.formNote}
      />

      <Faq />
    </>
  );
}
