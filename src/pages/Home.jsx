import Seo from "../components/ui/Seo";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Programmes from "../components/sections/Programmes";
import Nurture from "../components/sections/Nurture";
import Showcase from "../components/sections/Showcase";
import Journey from "../components/sections/Journey";
import Mark from "../components/ui/Mark";
import Stats from "../components/sections/Stats";
import Awards from "../components/sections/Awards";
import Testimonials from "../components/sections/Testimonials";
import Ratings from "../components/sections/Ratings";
import Areas from "../components/sections/Areas";
import GalleryPreview from "../components/sections/GalleryPreview";
import Faq from "../components/sections/Faq";
import ContactSection from "../components/sections/ContactSection";
import { IMAGES } from "../data/content";

export default function Home() {
  return (
    <>
      <Seo
        title="Best Preschool in Chennai | Kayo International Preschool & DayCare"
        description="Kayo International is the best preschool in Perungudi, Chennai. 10+ years, 4.9★ rating, NURTURE Lab curriculum (Montessori + STEM). Book a school tour today!"
        path="/"
        image={IMAGES.hero.src}
      />

      <Hero />
      <About />
      <WhyChooseUs />
      <Programmes />
      <Nurture />
      <Showcase />
      <Journey title={<>Your child's <Mark>journey</Mark> with Kayo</>} />
      <Stats />
      <Awards />
      <Testimonials />
      <Ratings />
      <Areas />
      <GalleryPreview />
      <Faq />
      <ContactSection />
    </>
  );
}
