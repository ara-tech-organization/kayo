import { ArrowRight, Home } from "lucide-react";
import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Kayo International Preschool"
        description="The page you were looking for could not be found. Explore our programmes, curriculum and campus instead."
        path="/404"
      />

      <section className={styles.section}>
        <Container size="narrow">
          <Reveal variant="up" className={styles.inner}>
            <p className={styles.code} aria-hidden="true">
              404
            </p>
            <h1 className={styles.title}>This page has wandered off</h1>
            <p className={styles.text}>
              The page you were looking for is not here. Let's get you back to somewhere
              familiar — or get in touch and we will point you in the right direction.
            </p>
            <div className={styles.actions}>
              <Button to="/" variant="light" icon={Home} iconRight={false}>
                Back to home
              </Button>
              <Button to="/contact" variant="outline-light" icon={ArrowRight}>
                Contact us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
