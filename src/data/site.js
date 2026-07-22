/**
 * Global site configuration — navigation, contact details, social links.
 * Every value here is sourced from the Kayo International web-content document.
 */

export const SITE = {
  name: "Kayo International",
  legalName: "Kayo International Preschool and DayCare",
  slogan: "Shaping Little Minds",
  foundedYear: 2013,
  url: "https://kayointernational.in",
};

export const CONTACT = {
  phone: "+91 98840 04650",
  phoneHref: "tel:+919884004650",
  whatsappHref: "https://wa.me/919884004650",
  email: "chnperungudi@kayointernational.in",
  emailHref: "mailto:chnperungudi@kayointernational.in",
  addressLines: ["No.3, 1st Cross Street,", "Rajiv Nagar, Perungudi,", "Chennai – 600096"],
  addressOneLine: "No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai – 600096",
  hours: [
    { label: "Preschool hours", value: "Monday – Saturday · 9:00 AM – 6:00 PM" },
    { label: "Campus tours", value: "Monday – Saturday · 10:00 AM – 5:00 PM (by appointment)" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Kayo+International+Preschool,+1st+Cross+Street,+Rajiv+Nagar,+Perungudi,+Chennai+600096&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=12.9656,80.2459",
  branches: ["Perungudi, Chennai", "Saravanampatti, Coimbatore"],
};

export const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/kayointernational", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/kayointernational", icon: "instagram" },
  { label: "WhatsApp", href: CONTACT.whatsappHref, icon: "whatsapp" },
];

export const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Kayo", to: "/about", desc: "Our story, founders and team" },
      { label: "Family Connect", to: "/family-connect", desc: "How we partner with parents" },
      { label: "Our Policies", to: "/policies", desc: "Safety, health and transparency" },
    ],
  },
  {
    label: "Curriculum",
    to: "/curriculum",
    children: [
      { label: "NURTURE Lab", to: "/curriculum", desc: "Where Montessori meets STEM" },
      { label: "Programmes", to: "/#programmes", desc: "Daycare through primary enrichment" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Franchise", to: "/franchise" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "NURTURE Lab Curriculum", to: "/curriculum" },
    { label: "Gallery", to: "/gallery" },
    { label: "Family Connect", to: "/family-connect" },
    { label: "Our Policies", to: "/policies" },
  ],
  programmes: [
    { label: "Day Care · 6 months+", to: "/#programmes" },
    { label: "Playgroup · 1.5–3 yrs", to: "/#programmes" },
    { label: "Nursery · 3–4 yrs", to: "/#programmes" },
    { label: "LKG · 4–5 yrs", to: "/#programmes" },
    { label: "UKG · 5–6 yrs", to: "/#programmes" },
    { label: "Primary Enrichment · 6–12 yrs", to: "/#programmes" },
  ],
  connect: [
    { label: "Franchise Opportunity", to: "/franchise" },
    { label: "Careers at Kayo", to: "/careers" },
    { label: "Contact Us", to: "/contact" },
  ],
};
