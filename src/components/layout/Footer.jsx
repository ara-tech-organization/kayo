import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "../../lib/icons";
import { CONTACT, FOOTER_LINKS, SITE, SOCIAL } from "../../data/site";
import styles from "./Footer.module.css";

const YEAR = new Date().getFullYear();

const BRAND_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsappIcon,
};

function LinkColumn({ title, links }) {
  return (
    <StaggerItem className={styles.col}>
      <h3 className={styles.colTitle}>{title}</h3>
      <ul className={styles.colList}>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className={styles.colLink}>
              <span>{link.label}</span>
              <ArrowUpRight className={styles.colArrow} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </StaggerItem>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.glowA} aria-hidden="true" />
      <span className={styles.glowB} aria-hidden="true" />

      <Container size="wide">
        {/* ---- Call to action band ------------------------------------- */}
        <Reveal variant="up" className={styles.cta}>
          <div>
            <p className={styles.ctaEyebrow}>Enrolment open</p>
            <h2 className={styles.ctaTitle}>
              Come and see it for yourself
            </h2>
            <p className={styles.ctaBody}>
              Visit our Perungudi campus, meet our educators, and experience the warm,
              welcoming atmosphere we have built over the last decade.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Button to="/contact" variant="light" size="lg" icon={ArrowUpRight}>
              Book a Campus Tour
            </Button>
            <Button href={CONTACT.phoneHref} variant="outline-light" size="lg" icon={Phone} iconRight={false}>
              {CONTACT.phone}
            </Button>
          </div>
        </Reveal>

        {/* ---- Main grid ----------------------------------------------- */}
        <Stagger className={styles.grid}>
          <StaggerItem className={styles.about}>
            <Link to="/" aria-label="Kayo International — home">
              <Logo tone="light" />
            </Link>
            <p className={styles.blurb}>
              Kayo International Preschool and DayCare has nurtured little minds in Perungudi,
              Chennai since {SITE.foundedYear} — with the NURTURE Lab curriculum, qualified
              educators and a 4.9★ rating from over 1,000 families.
            </p>

            <ul className={styles.social}>
              {SOCIAL.map((item) => {
                const BrandIcon = BRAND_ICONS[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      <BrandIcon size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </StaggerItem>

          <LinkColumn title="Explore" links={FOOTER_LINKS.explore} />
          <LinkColumn title="Programmes" links={FOOTER_LINKS.programmes} />

          <StaggerItem className={styles.col}>
            <h3 className={styles.colTitle}>Visit us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} aria-hidden="true" />
                <address className={styles.address}>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </li>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} aria-hidden="true" />
                <a href={CONTACT.phoneHref} className={styles.contactLink}>
                  {CONTACT.phone}
                </a>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} aria-hidden="true" />
                <a href={CONTACT.emailHref} className={styles.contactLink}>
                  {CONTACT.email}
                </a>
              </li>
              <li className={styles.contactItem}>
                <Clock className={styles.contactIcon} aria-hidden="true" />
                <div className={styles.hours}>
                  {CONTACT.hours.map((h) => (
                    <span key={h.label}>
                      <strong>{h.label}</strong>
                      {h.value}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

            <ul className={styles.quickLinks}>
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={styles.colLink}>
                    <span>{link.label}</span>
                    <ArrowUpRight className={styles.colArrow} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>

        {/* ---- Legal ---------------------------------------------------- */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {YEAR} {SITE.legalName}. All rights reserved.
          </p>
          <p className={styles.branches}>
            {CONTACT.branches.join("  ·  ")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
