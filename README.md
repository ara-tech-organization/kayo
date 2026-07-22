# Kayo International Preschool — Website

Production-ready marketing site for **Kayo International Preschool and DayCare**, Perungudi,
Chennai. Built with React + Vite, CSS Modules, React Router, Framer Motion, Swiper and
Lucide icons.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
npm run lint
```

---

## Design system

The palette and typography are taken from the live site (`kayointernational.in`) and refined.

| Token | Value | Source |
| --- | --- | --- |
| `--brand-500` | `#922b8d` | site's `--main` (magenta-purple) |
| `--accent-500` | `#9ccb3b` | site's `--second` (lime) |
| `--cream` | `#f4eee5` | site's `--gray` |
| `--mist` | `#eff5f6` | site's `--gray-2` |

Fonts: **Capriola** (headings) · **Love Ya Like A Sister** (script accents) ·
**Source Sans 3** (body). The live site declares `Source Sans Pro` for body text but never
loads it — Source Sans 3 is its current Google Fonts release, so this matches the original
intent while staying readable at long lengths.

All tokens live in [`src/styles/tokens.css`](src/styles/tokens.css): spacing scale, radii,
layered shadows, gradients, easing curves and breakpoint variables. Nothing hard-codes a
colour or a spacing value.

### Elevation

Photographs carry **no drop shadow** — they sit flat on the page, separated by whitespace and
radius alone. Shadows are reserved for elements that genuinely float above the page: cards on
hover, form panels, modals and the sticky navbar.

### Section rhythm

Light sections alternate deliberately between `#fff` and `--cream-soft`, punctuated by the
dark (`--grad-dusk`) and brand-gradient bands. Vertical gradients are only used where they
resolve into the neighbouring section's colour, so no boundary reads as an accident.

---

## Structure

```
src/
  components/
    layout/     Navbar · Footer · Logo · Layout (scroll manager)
    sections/   Hero, About, WhyChooseUs, Programmes, Nurture, Showcase, Journey,
                Stats, Awards, Testimonials, Ratings, Areas, GalleryPreview, Faq,
                ContactSection, CtaBanner, PageHero
    ui/         Container · Button · SectionTitle · Reveal · AnimatedCard · Figure
                Counter · Accordion · Form · Seo · ScrollProgress · PageLoader
  data/
    content.js  All editorial copy, transcribed from the client's content document
    site.js     Navigation, contact details, social links
  lib/
    icons.jsx        Icon components (+ hand-rolled Facebook/Instagram/WhatsApp marks)
    iconRegistry.js  Name → lucide component map, explicitly imported for tree-shaking
  pages/        Home, About, Curriculum, Gallery, FamilyConnect, Policies,
                Franchise, Careers, Contact, NotFound
```

Every route is `React.lazy`-loaded; vendor code is split into `motion`, `swiper`, `router`
and `icons` chunks so they cache independently of app code.

---

## Content

All copy comes from the supplied web-content document. Wording is preserved — only
formatting, headings and line breaks were adapted for the web. No facts, figures, awards or
testimonials were invented.

Your brief's boilerplate section list (industrial imagery, "Industries Served", "Products")
was written for a manufacturing company; the actual content is a preschool. Those sections
were mapped onto real content rather than fabricated:

| Brief section | Built as |
| --- | --- |
| Services | **Programmes** — daycare through primary enrichment, with detail dialogs |
| Products / Solutions showcase | **Showcase** — alternating curriculum / safety / family-connect blocks |
| Industries served | **Areas we serve** — the twelve Chennai neighbourhoods named in the document |
| Process | **Learning journey** (home) and **How to apply** (franchise) timelines |
| Certifications / Partners | **Awards** — the seven real certificates, in a hover-pause carousel with a lightbox |

### Images

**Every image on the site is real Kayo photography** — there is no stock or placeholder
imagery. Sources: the client's `Kayo photos` set (130 campus photos), the founder portraits,
the franchise-partner photo and the seven award certificates.

All assets live in `public/media/` and are referenced from the `IMAGES` map at the top of
[`src/data/content.js`](src/data/content.js):

```
public/media/
  photos/     20 campus photos — hero, classroom, programmes, gallery
  founders/   Veena Sundaramurthy, Sankara K (cropped to 3:4)
  awards/     7 certificates
  og-image.jpg    1200×630 social share card (JPEG for crawler compatibility)
  franchise-partners.webp
```

Processing: EXIF-rotated, cropped to each slot's aspect ratio with a hand-picked focal
point, resized, then encoded as WebP. Total media weight **3.7 MB** across 31 files (from
~16 MB of originals). The share card stays JPEG because some social crawlers still prefer it.

Alt text describes what each photograph actually shows, following the alt-text guidance in
the content document — it was not copied verbatim where the real photo differs from the
document's hypothetical shot list.

To swap a photo: drop a new file into `public/media/photos/` and update the matching entry
in `IMAGES`. The `P()` helper builds the path, so only the filename needs to match.

Originals are preserved untouched in `_source/` (and `src/`, if your editor had those folders
locked at the time) — nothing was deleted.

### ⚠️ Unresolved content conflict

The supplied **Founder's note** slide contradicts the web-content document:

| | Content document (used) | Founder's note slide |
| --- | --- | --- |
| Founded | 2013 | 2018 |
| Veena's qualifications | TESOL Early Childhood Education, Diploma in Child Psychology | MA in Education, IIM-Calcutta alumna |
| Curriculum name | NURTURE Lab | Caprics Nurture Lab |

The site follows the content document throughout. Confirm which is correct before launch —
the founding year appears in the hero, the About page, the footer and the JSON-LD schema.

The **Testimonial video** folder was empty, so testimonials are text-only for now. The
`Kayo photos` set also contains **18 video clips** that are not yet used anywhere — they are
good candidates for a hero background video or a gallery video tab if you want them.

---

## SEO & accessibility

- Per-route `<title>`, meta description, canonical and Open Graph tags via React 19's native
  document metadata (`src/components/ui/Seo.jsx`) — no extra dependency.
- JSON-LD: `ChildCare`/`Preschool` in `index.html`, plus `Preschool`, `JobPosting` and
  `FAQPage` on the relevant routes.
- Semantic landmarks, skip link, labelled forms, `aria-expanded`/`aria-controls` on the
  accordion and nav, focus-visible rings, and `prefers-reduced-motion` honoured throughout
  (every animation primitive short-circuits).
- Images are lazy-loaded with reserved aspect-ratio boxes, so there is no layout shift.

## Forms

The contact, franchise and careers forms validate client-side and show a success state, but
have **no backend** — `onSubmit` receives a `FormData` object, so pointing them at a real
endpoint is a one-line change per form.

## Note on the build

Vite 8 minifies CSS with the native `lightningcss` binary, which is blocked by Windows
Application Control on this machine. `vite.config.js` sets `cssMinify: "esbuild"` (pure JS)
instead. On an unrestricted machine you can drop that line.
