import asset from "../lib/asset";

/* -------------------------------------------------------------------------- */
/*  Imagery — real photography from the Kayo International Perungudi campus.   */
/*  Files live in /public/media; alt text describes what each photo actually   */
/*  shows, following the alt-text guidance in the content document.            */
/* -------------------------------------------------------------------------- */

const P = (name) => asset(`/media/photos/${name}.webp`);

export const IMAGES = {
  hero: {
    src: P("hero"),
    alt: "Kayo International preschool graduates in caps and gowns with their certificates, teachers and founders at the annual graduation ceremony in Chennai",
  },
  classroom: {
    src: P("classroom"),
    alt: "A Montessori practical-life session at Kayo International Preschool, with child-friendly learning materials on open shelves",
  },
  welcomeFamily: {
    src: asset("/media/photos/welcome-family.webp"),
    alt: "A Kayo International family with their child at the Welcome to School board on the Perungudi campus",
  },
  progNursery: {
    src: asset("/media/photos/prog-nursery.webp"),
    alt: "A Kayo International nursery child adding her handprint to a class art display",
  },
  progLkg: {
    src: asset("/media/photos/prog-lkg.webp"),
    alt: "Kayo International LKG children in uniform wearing the paper crowns they made",
  },
  progPrimary: {
    src: asset("/media/photos/prog-primary.webp"),
    alt: "Kayo International primary enrichment children on a sports-store field trip with their teachers",
  },
  playgroup: {
    src: asset("/media/photos/playgroup.webp"),
    alt: "Kayo International playgroup children holding the teddy-bear crafts they made on Red Day",
  },
  careers: {
    src: asset("/media/photos/careers.webp"),
    alt: "A Kayo International educator leading a floor-based group activity with children at the Perungudi campus",
  },
  familyConnect: {
    src: asset("/media/photos/family-connect.webp"),
    alt: "Kayo International families taking part in a classroom celebration together at the Perungudi campus",
  },
  parentMeeting: {
    src: asset("/media/photos/parent-meeting.webp"),
    alt: "Kayo International staff talking parents through the curriculum during a campus visit in Perungudi",
  },
  curriculumFramework: {
    src: asset("/media/photos/curriculum-framework.webp"),
    alt: "Kayo International children on Green Day beside their colour-themed display board at the Perungudi campus",
  },
  classroomGroup: {
    src: asset("/media/photos/classroom-group.webp"),
    alt: "Kayo International teachers and children together in a classroom at the Perungudi campus, Chennai",
  },
  kayoFamily: {
    src: asset("/media/photos/kayo-family.webp"),
    alt: "The Kayo International team of teachers and caregivers at the Perungudi campus",
  },
  ourStory: {
    src: asset("/media/photos/our-story.webp"),
    alt: "Kayo International children celebrating Yellow Day together at the Perungudi campus",
  },
  learning: {
    src: P("learning"),
    alt: "A child building words on a phonics board with a teacher at Kayo International Preschool, Chennai",
  },
  teachers: {
    src: P("teachers"),
    alt: "Qualified early years teachers leading a circle-time session at Kayo International Preschool, Perungudi",
  },
  reading: {
    src: P("reading"),
    alt: "Children with their craft work in a bright, nurturing classroom at Kayo International Preschool and DayCare, Chennai",
  },
  stem: {
    src: P("stem"),
    alt: "A child exploring hands-on STEM materials with a teacher at Kayo International Preschool, Chennai",
  },
  art: {
    src: P("art"),
    alt: "A child adding handprints to a class art project at Kayo International Preschool",
  },
  play: {
    src: P("play"),
    alt: "Children playing together during a colour-day activity at Kayo International Preschool",
  },
  daycare: {
    src: P("daycare"),
    alt: "Toddlers in the daycare play corner at Kayo International, a nurturing daycare centre in OMR Chennai",
  },
  music: {
    src: P("music"),
    alt: "Music and movement session developing rhythm and confidence at Kayo International Preschool",
  },
  theatre: {
    src: P("theatre"),
    alt: "Children performing in costume at a Kayo International Preschool celebration, fostering confidence and creativity",
  },
  celebration: {
    src: P("celebration"),
    alt: "Children in traditional dress at a festival celebration with their teachers at Kayo International Preschool",
  },
  outdoor: {
    src: P("outdoor"),
    alt: "Kayo International children and their teacher on an outdoor field trip to a Chennai park",
  },
  tour: {
    src: P("tour"),
    alt: "Parents at a family orientation session on the Kayo International Preschool campus in Perungudi",
  },
  safety: {
    src: P("safety"),
    alt: "A Kayo International staff member caring for a child at the Perungudi campus — a safe, supervised environment",
  },
  campus: {
    src: P("campus"),
    alt: "A Kayo International Preschool class with their teachers at the Perungudi campus, Chennai OMR",
  },

  /* Gallery-only shots */
  fieldTripSupermarket: {
    src: P("field-trip-supermarket"),
    alt: "Kayo International children on a supermarket field trip, learning about fresh food with their teacher",
  },
  capsLine: {
    src: P("caps-line"),
    alt: "Children wearing the paper caps they made during a craft session at Kayo International Preschool",
  },
  friends: {
    src: P("friends"),
    alt: "Two Kayo International Preschool children in uniform at the Perungudi campus",
  },
  sportsStoreTrip: {
    src: P("sports-store-trip"),
    alt: "Kayo International children and teachers on a sports-store field trip in Chennai",
  },

  /* Founders, partners — supplied by the client */
  founder: {
    src: asset("/media/founders/veena-sundaramurthy.webp"),
    alt: "Veena Sundaramurthy, Founder of Kayo International Preschool, early childhood education expert",
  },
  coFounder: {
    src: asset("/media/founders/sankara-k.webp"),
    alt: "Sankara K, Co-Founder of Kayo International Preschool",
  },
  franchisePartners: {
    src: asset("/media/franchise-partners.webp"),
    alt: "Kayo International founders welcoming new franchise partners at a Kayo centre",
  },
};

/* -------------------------------------------------------------------------- */
/*  Home — hero                                                               */
/* -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: "Shaping Little Minds · Since 2013",
  titleLines: ["Best Preschool in Chennai", "Nurturing Little Minds"],
  titleAccent: "Since 2013",
  lead: "Every child deserves a nurturing start. At Kayo International Preschool and DayCare, we have spent over a decade creating a warm, stimulating environment where children aged 6 months to 12 years discover the joy of learning.",
  sub: "Conveniently located in Perungudi, we are proud to be the best preschool in Chennai OMR, trusted by more than 1,000 families who have watched their children grow into confident, curious learners.",
  primaryCta: { label: "Start Today", to: "/contact" },
  secondaryCta: { label: "WhatsApp Us", href: "https://wa.me/919884004650" },
  badges: [
    { value: "4.9★", label: "Google rating" },
    { value: "1,000+", label: "Happy children" },
    { value: "10+", label: "Years of trust" },
  ],
};

export const INTRO = {
  founderNote:
    "Our founder, Veena Sundaramurthy, a TESOL Early Childhood Education graduate and Diploma holder in Child Psychology, envisioned a place where education goes beyond textbooks. Here, your child will explore, create, question, and flourish under the guidance of passionate, trained educators who treat every little one as their own.",
  welcome:
    "Whether you are searching for a top-rated preschool in Perungudi, a nurturing daycare centre in OMR Chennai, or a Montessori-inspired early learning programme, Kayo International welcomes you with open arms.",
};

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                             */
/* -------------------------------------------------------------------------- */

export const WHY_CHOOSE = {
  title: "Why Kayo International is the preferred preschool in Perungudi",
  intro:
    "When it comes to your child's first school, you want nothing but the best. Parents across Perungudi, Nanmangalam, Pallikaranai, Palavakkam, Kottivakkam, Taramani, Kandanchavadi, Thoraipakkam and Adambakkam — all within around 3 km — consistently choose Kayo International, and here's why:",
  items: [
    {
      icon: "Award",
      title: "A Decade of Trust and Excellence",
      desc: "Over ten years of nurturing young learners in Chennai, with 20+ awards for excellence in early childhood education.",
    },
    {
      icon: "FlaskConical",
      title: "Expert-Led, Research-Based Curriculum",
      desc: "The proprietary NURTURE Lab framework, created under the guidance of a qualified Early Childhood Education and Child Psychology professional.",
    },
    {
      icon: "ShieldCheck",
      title: "Safety and Transparency You Can Count On",
      desc: "24/7 CCTV surveillance, trained staff, strict hygiene practices, secure facilities and regular SMS updates for parents.",
    },
    {
      icon: "Trees",
      title: "Spacious, Stimulating Environment",
      desc: "Generous indoor and outdoor play areas, a sandpit and splash pool, a creative corner and quiet spaces to rest and recharge.",
    },
    {
      icon: "GraduationCap",
      title: "Experienced and Caring Educators",
      desc: "Every teacher holds a Bachelor's degree in Early Years Education or an equivalent professional qualification.",
    },
    {
      icon: "Sparkles",
      title: "Holistic Learning for Every Child",
      desc: "An approach that develops the whole child — intellectually, emotionally, socially, creatively and physically.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Programmes                                                                */
/* -------------------------------------------------------------------------- */

export const PROGRAMMES = {
  title: "Early learning pathways for every age",
  intro:
    "At Kayo International, we believe learning begins from the very first day. That is why we offer a complete range of programmes designed to support your child at every stage of their early development.",
  items: [
    {
      id: "daycare",
      cutout: { src: asset("/media/programmes/daycare.webp"), alt: "A toddler playing with a stacking-ring toy" },
      icon: "Baby",
      name: "Day Care",
      age: "6 Months Onwards",
      short: "A safe, loving home away from home.",
      desc: "We understand the challenges of working parents. Our daycare in OMR Chennai provides a safe, nurturing home-away-from-home for babies as young as 6 months. With caring attendants, age-appropriate activities, nutritious meals, and restful nap times, your child is in the best hands while you are at work.",
      image: IMAGES.daycare,
      highlights: ["Caring attendants", "Nutritious meals", "Restful nap times"],
    },
    {
      id: "playgroup",
      cutout: { src: asset("/media/programmes/playgroup.webp"), alt: "A young child building a tower from chunky blocks" },
      icon: "Blocks",
      name: "Playgroup",
      age: "1.5 to 3 Years",
      short: "A gentle first step into joyful learning.",
      desc: "Our gentle playgroup programme introduces toddlers to a structured yet joyful learning environment. Through sensory play, music, movement, and social interaction, your little one builds confidence, language skills, and early cognitive abilities — all while feeling safe and loved.",
      image: IMAGES.playgroup,
      highlights: ["Sensory play", "Music & movement", "Social interaction"],
    },
    {
      id: "nursery",
      cutout: { src: asset("/media/programmes/nursery.webp"), alt: "A child sorting colourful balls into a basket" },
      icon: "Puzzle",
      name: "Nursery",
      age: "3 to 4 Years",
      short: "Montessori practical life and early numeracy.",
      desc: "In our nursery programme, children dive deeper into structured learning through the Montessori approach. Practical life skills, early numeracy, pre-writing activities, and language development form the core of this enriching year.",
      image: IMAGES.progNursery,
      highlights: ["Practical life skills", "Early numeracy", "Pre-writing"],
    },
    {
      id: "lkg",
      cutout: { src: asset("/media/programmes/lkg.webp"), alt: "A child sitting on a stack of books, reading" },
      icon: "Pencil",
      name: "Lower Kindergarten",
      age: "4 to 5 Years",
      short: "Foundational literacy and numeracy through play.",
      desc: "Our LKG programme strengthens foundational literacy and numeracy through hands-on, play-based learning. Children explore science concepts, develop fine motor skills, and build the social confidence needed for formal schooling.",
      image: IMAGES.progLkg,
      highlights: ["Play-based literacy", "Science concepts", "Fine motor skills"],
    },
    {
      id: "ukg",
      cutout: { src: asset("/media/programmes/ukg.webp"), alt: "A child drawing with crayons" },
      icon: "BookOpen",
      name: "Upper Kindergarten",
      age: "5 to 6 Years",
      short: "The confident final step before primary school.",
      desc: "The final preschool year at Kayo International ensures your child is fully prepared for primary school. Our UKG programme emphasises reading fluency, mathematical thinking, scientific curiosity, and independent learning — giving them a head start in life.",
      image: IMAGES.reading,
      highlights: ["Reading fluency", "Mathematical thinking", "Independent learning"],
    },
    {
      id: "enrichment",
      cutout: { src: asset("/media/programmes/primary.webp"), alt: "A child painting at a desk" },
      icon: "Rocket",
      name: "Primary Enrichment",
      age: "6 to 12 Years",
      short: "Keeping learning alive beyond the classroom.",
      desc: "Our enrichment programme for 6 to 12 year olds keeps learning alive beyond the classroom. Through activity-based sessions, critical thinking exercises, and creative projects, children build communication, digital literacy, and problem-solving skills — staying curious, confident, and ready for new challenges.",
      image: IMAGES.progPrimary,
      highlights: ["Critical thinking", "Digital literacy", "Creative projects"],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  NURTURE Lab curriculum                                                    */
/* -------------------------------------------------------------------------- */

export const NURTURE = {
  acronym: [
    { letter: "N", word: "urturing" },
    { letter: "U", word: "nique" },
    { letter: "R", word: "esources" },
    { letter: "T", word: "hrough" },
    { letter: "U", word: "nderstanding," },
    { letter: "R", word: "espect &" },
    { letter: "E", word: "xploration" },
  ],
  title: "The NURTURE Lab Curriculum — where Montessori meets STEM",
  intro:
    "The NURTURE Lab curriculum is a proprietary, four-pillar educational framework exclusive to Kayo International. Unlike conventional preschool programmes that rely on rote memorisation and standardised worksheets, our curriculum embraces a child-centric philosophy where learning emerges naturally through curiosity, exploration, and guided discovery.",
  pillars: [
    {
      icon: "Hand",
      title: "Montessori Method",
      tagline: "Independence Through Purposeful Activity",
      desc: "Practical, self-directed work with carefully designed materials lets children learn at their own pace and build genuine independence.",
    },
    {
      icon: "Atom",
      title: "STEM Integration",
      tagline: "Building Future-Ready Skills",
      desc: "Hands-on experiments and building challenges spark scientific inquiry, engineering thinking, and real problem-solving from the earliest years.",
    },
    {
      icon: "Smile",
      title: "Play-Based Learning",
      tagline: "Learning Through Joy",
      desc: "Joyful, child-led play is the engine of early development — building language, confidence, and cognitive ability without pressure.",
    },
    {
      icon: "Users",
      title: "Multiple Intelligence Theory",
      tagline: "Celebrating Every Child's Uniqueness",
      desc: "Howard Gardner's framework guides us to nurture all eight intelligences, so every child finds their own strength and path to excellence.",
    },
  ],
  philosophy:
    "At Kayo International, we believe every child is born with extraordinary potential. Our NURTURE Lab curriculum is an innovative fusion of Montessori methodology, STEM education, play-based learning, and Howard Gardner's Multiple Intelligence Theory — thoughtfully designed to unlock that potential from the earliest years.",
  serving:
    "Serving families across Perungudi, OMR, Thoraipakkam, and Sholinganallur, we have spent over a decade refining a preschool curriculum that doesn't just prepare children for primary school, but instils a lifelong love of learning.",
  adaptive:
    "Created under the expert guidance of our founder Veena Sundaramurthy, a qualified professional in Early Childhood Education and Child Psychology, our curriculum recognises that no two children learn the same way. That is precisely why we have built an approach that adapts to your child's unique learning style rather than forcing them into a rigid framework.",
  wholeChild:
    "This four-pillar approach creates a Montessori STEM preschool curriculum Chennai families trust — one that develops the whole child: intellectually, emotionally, socially, creatively, and physically.",
};

export const INTELLIGENCES = {
  title: "Multiple Intelligence Theory — nurturing every child's unique gifts",
  intro:
    "Howard Gardner's Multiple Intelligence Theory tells us that every child is smart in their own unique way. At Kayo International, we celebrate this by nurturing all eight intelligences in every child, because true learning happens when education sees the whole child, not just one side.",
  items: [
    {
      icon: "MessageCircle",
      name: "Verbal-Linguistic",
      nickname: "Word Smart",
      desc: "Storytelling circles, phonics, vocabulary games, show-and-tell, and poetry recitation build strong language skills in children who learn best through words.",
    },
    {
      icon: "Calculator",
      name: "Logical-Mathematical",
      nickname: "Number Smart",
      desc: "Sorting activities, pattern games, building challenges, and Montessori maths materials develop reasoning and problem-solving in children who think logically.",
    },
    {
      icon: "Shapes",
      name: "Visual-Spatial",
      nickname: "Picture Smart",
      desc: "Arty Crafty sessions, block building, puzzles, and drawing activities let children express themselves visually through colour, shape, and design.",
    },
    {
      icon: "Music",
      name: "Musical-Rhythmic",
      nickname: "Music Smart",
      desc: "Music and movement sessions, rhythmic activities, instruments, and our Bharatanatyam and Western Dance programmes develop a natural feel for melody and rhythm.",
    },
    {
      icon: "Activity",
      name: "Bodily-Kinesthetic",
      nickname: "Body Smart",
      desc: "Outdoor play, yoga, Kayo Sports, sandpit, splash pool, and climbing equipment give active learners endless ways to explore through movement.",
    },
    {
      icon: "HeartHandshake",
      name: "Interpersonal",
      nickname: "People Smart",
      desc: "Group projects, collaborative games, circle time, and empathy-building exercises help children develop strong social skills and meaningful relationships.",
    },
    {
      icon: "Brain",
      name: "Intrapersonal",
      nickname: "Self Smart",
      desc: "Reflection time, emotional coaching, mindfulness practices, and freedom of choice help children understand themselves and manage their emotions confidently.",
    },
    {
      icon: "Leaf",
      name: "Naturalist",
      nickname: "Nature Smart",
      desc: "Nature walks, gardening, outdoor learning spaces, and environmental projects connect children who are drawn to the natural world around them.",
    },
  ],
  closing:
    "By nurturing all eight intelligences, we ensure every child at Kayo International finds their strength, builds confidence, and discovers their own path to excellence.",
};

export const SCHOOL_READINESS = {
  title: "How our curriculum prepares children for school",
  intro:
    "One of the most common concerns parents share with us is whether their child will be ready for “big school.” The NURTURE Lab curriculum addresses this concern comprehensively. School readiness is not just about knowing letters and numbers — it is about having the confidence, social skills, emotional regulation, curiosity, and love of learning that make academic success possible.",
  items: [
    {
      icon: "Globe",
      title: "Cross-Cultural Programs",
      desc: "Children explore traditions, languages, and festivals from around the world, building empathy, respect for diversity, and the adaptability to thrive in a global society. Through cultural stories, songs, and celebrations, they develop open-mindedness and pride in their own heritage.",
    },
    {
      icon: "Lightbulb",
      title: "Cognitive Activities",
      desc: "Structured games and challenges strengthen memory, attention, and reasoning — the mental building blocks for all future learning. Children build focus, pattern recognition, and flexible thinking through hands-on, engaging tasks.",
    },
    {
      icon: "Network",
      title: "Logical Thinking",
      desc: "Pattern games, sequencing, and problem-solving tasks develop structured reasoning and analytical skills. Children learn to break challenges into steps, evaluate options, and think with clarity and confidence.",
    },
    {
      icon: "Palette",
      title: "Arty Crafty",
      desc: "Open-ended art and craft projects build fine motor skills, creative confidence, and self-expression. Children explore colours, textures, and techniques while developing patience and pride in their creations.",
    },
    {
      icon: "Flower2",
      title: "Yoga",
      desc: "Breathwork, poses, and mindful movement build physical strength, emotional balance, and focus. Children learn to regulate energy, manage emotions, and develop body awareness and self-confidence.",
    },
    {
      icon: "Trophy",
      title: "Kayo Sports",
      desc: "Active play and team games develop gross motor skills, coordination, and healthy lifestyle habits. Children build teamwork, discipline, and sportsmanship while gaining confidence through physical challenge.",
    },
    {
      icon: "BookMarked",
      title: "Storytelling",
      desc: "Rich narratives expand vocabulary, imagination, and listening skills while building emotional intelligence. Children engage with characters and cultures, developing empathy and the narrative thinking essential for literacy.",
    },
    {
      icon: "Microscope",
      title: "STEM Activity",
      desc: "Hands-on experiments and building challenges spark curiosity and develop scientific inquiry, engineering thinking, and problem-solving. Children learn to question, test, and innovate through real-world exploration.",
    },
  ],
  closing:
    "Graduates of Kayo International enter primary school not just academically prepared, but as confident, curious, well-rounded children who genuinely enjoy learning. That is the difference a thoughtfully designed curriculum makes.",
};

/* -------------------------------------------------------------------------- */
/*  Stats, testimonials and ratings                                           */
/* -------------------------------------------------------------------------- */

export const STATS = [
  { value: 10, suffix: "+", label: "Years of excellence", desc: "Nurturing Chennai families since 2013" },
  { value: 1000, suffix: "+", label: "Happy children", desc: "And counting, every single year" },
  { value: 20, suffix: "+", label: "Awards for excellence", desc: "In early childhood education" },
  { value: 4.9, decimals: 1, suffix: "★", label: "Average Google rating", desc: "Across 63 verified reviews" },
];

export const RATINGS = [
  { platform: "Google", score: "4.9", outOf: "5", detail: "63 Reviews", icon: "Star" },
  { platform: "Justdial", score: "4.8", outOf: "5", detail: "65 Reviews", icon: "Star" },
  { platform: "Facebook", score: "5.0", outOf: "5", detail: "Verified page", icon: "Star" },
  { platform: "Awards", score: "20+", outOf: "", detail: "Excellence in Early Childhood Education", icon: "Trophy" },
  { platform: "Families", score: "1,000+", outOf: "", detail: "Happy children and counting", icon: "Heart" },
];

/**
 * Awards & achievements — transcribed from the certificates supplied by the
 * client. Images live in /public/media/awards.
 */
export const AWARDS = [
  {
    src: asset("/media/awards/education-world-2019.webp"),
    body: "EducationWorld",
    title: "Promising 21st Century India Preschool Awards",
    detail: "Teachers–Parents–Student Engagement",
    year: "2018–19",
    alt: "EducationWorld Promising 21st Century India Preschool Award 2018-19 certificate presented to Kayo International, Perungudi, Chennai",
  },
  {
    src: asset("/media/awards/eca-hall-of-fame-2019.webp"),
    body: "Early Childhood Association",
    title: "Hall of Fame Award",
    detail: "Top 50 Franchised Preschools in Asia",
    year: "2019",
    alt: "Early Childhood Association Hall of Fame Award 2019 certificate presented to Kayo International, Chennai",
  },
  {
    src: asset("/media/awards/eminent-best-emerging-2020.webp"),
    body: "Indian's Eminent Educational Awards",
    title: "Best Emerging Pre School in South India",
    detail: "Certificate of Achievement",
    year: "2020",
    alt: "Indian's Eminent Educational Awards 2020 certificate naming Kayo International the Best Emerging Pre School in South India",
  },
  {
    src: asset("/media/awards/brainfeed-top-100-2022.webp"),
    body: "Brainfeed School Excellence Awards",
    title: "Top 100 Preschools of India",
    detail: "Hyderabad",
    year: "2022",
    alt: "Brainfeed School Excellence Awards 2022 certificate recognising Kayo International Preschool, Chennai in the Top 100 Preschools of India",
  },
  {
    src: asset("/media/awards/gslc-inspire-2023.webp"),
    body: "Global School Leaders' Consortium",
    title: "Pre-School with the Interactive Infrastructure",
    detail: "GSLC INSPIRE 3.0 — Regional",
    year: "2023",
    alt: "GSLC INSPIRE 3.0 2023 Certificate of Achievement presented to Kayo International School",
  },
  {
    src: asset("/media/awards/ecdla-top-50-educators-2023.webp"),
    body: "ECDLA",
    title: "Top 50 Incredible Educators",
    detail: "Early Years Educators Summit & Awards — Veena Sundaramurthy",
    year: "2023",
    alt: "ECDLA certificate recognising Veena Sundaramurthy among the Top 50 Incredible Educators at the Early Years Educators Summit and Awards 2023",
  },
  {
    src: asset("/media/awards/gtf-innovative-curriculum-2018.webp"),
    body: "Global Triumph Foundation",
    title: "Best Early Education Innovative Curriculum in Chennai",
    detail: "GTF Education Summit & Awards, New Delhi",
    year: "2018",
    alt: "GTF Education Summit and Awards 2018 certificate presented to Kayo International for Best Early Education Innovative Curriculum in Chennai",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Kayo International is hands down the best preschool in Perungudi. My daughter has transformed from a shy toddler into a confident little speaker. The teachers are incredibly loving, and the daily updates give me so much peace of mind.",
    author: "Parent",
    source: "Google Review",
  },
  {
    quote:
      "We enrolled our son in the daycare programme when he was just 11 months old. The staff treated him like family. The CCTV access and live monitoring made it so much easier for me to focus at work. I highly recommend this daycare in OMR Chennai!",
    author: "Parent",
    source: "Justdial Review",
  },
  {
    quote:
      "The NURTURE Lab curriculum is truly unique. My child comes home excited about something new every day, whether it is a science experiment, a theatre performance, or a new song. Kayo has set the foundation for a lifetime of learning.",
    author: "Parent",
    source: "Facebook Review",
  },
];

export const FRANCHISE_TESTIMONIALS = [
  {
    quote:
      "Partnering with Kayo International was the best decision I made for my entrepreneurial journey. The no-royalty model meant I could reinvest in my centre, and the support from the head office team has been exceptional. Within 18 months, I had not only recovered my investment but was operating a profitable, beloved preschool in my community.",
    author: "Franchise Partner",
    source: "Chennai",
  },
  {
    quote:
      "What drew me to Kayo was their genuine commitment to quality education and their transparent business model. The NURTURE Lab curriculum is outstanding, parents trust the brand, and my centre now has a long waiting list. I am proud to be part of a brand that truly puts children first.",
    author: "Franchise Partner",
    source: "Tamil Nadu",
  },
  {
    quote:
      "Coming from a corporate background, I had no experience in education. Kayo's training and operational support gave me the confidence to launch and run my preschool successfully. The 2X ROI promise was not just marketing — it was my reality within the first two years.",
    author: "Franchise Partner",
    source: "South India",
  },
];

/* -------------------------------------------------------------------------- */
/*  Areas served                                                              */
/* -------------------------------------------------------------------------- */

export const AREAS = {
  title: "Families we serve across Chennai",
  intro:
    "Parents across Perungudi, Nanmangalam, Pallikaranai, Palavakkam, Kottivakkam, Taramani, Kandanchavadi, Thoraipakkam and Adambakkam — all within around 3 km — consistently choose Kayo International.",
  /* Exactly the nine neighbourhoods the content document names as being within
     ~3 km. Velachery and Medavakkam are franchise target markets, not current
     catchment, so they belong on the franchise page only. */
  primary: [
    "Perungudi",
    "Nanmangalam",
    "Pallikaranai",
    "Palavakkam",
    "Kottivakkam",
    "Taramani",
    "Kandanchavadi",
    "Thoraipakkam",
    "Adambakkam",
  ],
  /* From the curriculum page: "Serving families across Perungudi, OMR,
     Thoraipakkam, and Sholinganallur". */
  wider: {
    label: "We also serve families across",
    items: ["OMR", "Sholinganallur"],
  },
  branches: [
    { name: "Perungudi, Chennai", note: "Main campus" },
    { name: "Saravanampatti, Coimbatore", note: "Branch campus" },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Learning journey (age progression timeline)                               */
/* -------------------------------------------------------------------------- */

export const JOURNEY = {
  title: "Your child's journey with Kayo",
  intro:
    "From a six-month-old's first day in daycare to a twelve-year-old's creative projects, every stage is designed to build on the last.",
  steps: [
    { step: "01", age: "6 months+", name: "Day Care", desc: "A safe, loving home-away-from-home with caring attendants and nutritious meals." },
    { step: "02", age: "1.5 – 3 yrs", name: "Playgroup", desc: "Sensory play, music and movement build early confidence and language." },
    { step: "03", age: "3 – 4 yrs", name: "Nursery", desc: "Montessori practical life skills, early numeracy and pre-writing take root." },
    { step: "04", age: "4 – 5 yrs", name: "LKG", desc: "Foundational literacy, numeracy and science through play-based learning." },
    { step: "05", age: "5 – 6 yrs", name: "UKG", desc: "Reading fluency, mathematical thinking and independent learning for big school." },
    { step: "06", age: "6 – 12 yrs", name: "Primary Enrichment", desc: "Critical thinking, digital literacy and creative projects beyond the classroom." },
  ],
};

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

export const FAQ = {
  title: "Frequently asked questions",
  intro:
    "We understand that choosing a preschool comes with many questions. Here are answers to the most common ones parents ask us:",
  items: [
    {
      q: "What makes Kayo International the best preschool in Chennai?",
      a: "Kayo International stands out with over a decade of experience, a 4.9★ Google rating, and its exclusive NURTURE Lab curriculum that combines Montessori, STEM, and holistic learning. Backed by award-winning excellence and expert leadership, we create a strong foundation for every child.",
    },
    {
      q: "What age groups do you admit at your preschool in Perungudi?",
      a: "We welcome children aged 6 months to 12 years through our Day Care, Playgroup, Nursery, LKG, UKG, and After School programmes. Our age-specific learning approach supports every stage of your child's early development.",
    },
    {
      q: "How does Kayo International ensure child safety and parent communication?",
      a: "We prioritise your child's safety with 24/7 CCTV surveillance, trained staff, strict hygiene practices, and secure facilities. Parents also receive regular SMS updates to stay informed about their child's daily activities and wellbeing.",
    },
    {
      q: "Do you offer daycare facilities for working parents in OMR Chennai?",
      a: "Yes, we provide a safe and nurturing daycare for children from 6 months onwards, ideal for working parents. Our programme includes supervised care, engaging activities, healthy meals, and dedicated rest time in a secure environment.",
    },
    {
      q: "What curriculum does Kayo International follow?",
      a: "Our NURTURE Lab curriculum blends Montessori principles, STEM learning, play-based education, and Multiple Intelligence Theory. This balanced approach helps children grow academically, socially, emotionally, and creatively while preparing them for future learning.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Closing CTA                                                               */
/* -------------------------------------------------------------------------- */

export const CLOSING_CTA = {
  title: "Start your child's journey today",
  body: "Choosing the right preschool is one of the most important decisions you will make for your child. We invite you to visit our Perungudi campus, meet our founder and educators, explore our classrooms and play areas, and experience the warm, welcoming atmosphere that makes Kayo International the best preschool in Chennai.",
  note: "Prefer to speak with us directly? Call us now at +91 98840 04650. We would love to hear from you!",
};

export const GALLERY_INTRO =
  "Take a glimpse into the joyful learning experiences at Kayo International. From engaging classroom activities and creative play to celebrations and everyday milestones, our gallery reflects the safe, vibrant, and nurturing environment where children learn, grow, and thrive.";

export const GALLERY = [
  IMAGES.hero,
  IMAGES.classroom,
  IMAGES.art,
  IMAGES.theatre,
  IMAGES.stem,
  IMAGES.play,
  IMAGES.music,
  IMAGES.celebration,
  IMAGES.learning,
  IMAGES.reading,
  IMAGES.daycare,
  IMAGES.capsLine,
  IMAGES.outdoor,
  IMAGES.fieldTripSupermarket,
  IMAGES.sportsStoreTrip,
  IMAGES.friends,
  IMAGES.teachers,
  IMAGES.campus,
];

/* -------------------------------------------------------------------------- */
/*  About page                                                                */
/* -------------------------------------------------------------------------- */

export const ABOUT = {
  seoTitle: "About Us | Kayo International Preschool",
  metaDescription:
    "Discover Kayo International Preschool — founded by Veena Sundaramurthy in 2013. 10+ years of nurturing 1000+ children in Chennai with qualified teachers & a 4.9★ rating. Book a visit today.",
  h1: "About Kayo International Preschool",
  lead: "Every parent wants to find a preschool that feels like a second home — a place where their child is safe, nurtured, and inspired to explore the world with confidence. At Kayo International Preschool and DayCare, we have spent over a decade making that vision a reality for families across Chennai and Coimbatore.",
  intro:
    "Founded in 2013 by Veena Sundaramurthy, Kayo International was born from a deeply personal calling: to create an early learning environment that truly puts children first. What began as a heartfelt mission has grown into one of the most trusted preschools in Perungudi, Chennai — and a name parents actively seek when they search for preschool founders in Chennai who bring both passion and professional expertise to early childhood education.",
  story: {
    title: "Our Story — from the corporate world to the children's world",
    paragraphs: [
      "Kayo International was founded in 2013 by Veena Sundaramurthy, whose journey from the IT industry to early childhood education was driven by a passion for shaping young minds. With qualifications in Early Childhood Education from TESOL and a Diploma in Child Psychology, she combined her expertise with a vision to create a nurturing preschool where children learn with confidence, curiosity, and joy.",
      "Committed to providing the best early learning experience, Veena developed the proprietary NURTURE Lab Curriculum, blending Montessori principles with STEM-based, play-led learning. Her continuous participation in educational workshops and research ensures that Kayo International remains at the forefront of modern preschool education.",
      "Supported by a co-founder with an engineering and business background, Kayo International is built on strong values of quality, transparency, and innovation. Together, they have created a trusted learning environment that prepares children for school and lifelong success.",
    ],
  },
  founders: [
    {
      name: "Veena Sundaramurthy, M.A.",
      role: "Founder & Director",
      image: IMAGES.founder,
      paragraphs: [
        "Veena Sundaramurthy is the Founder and Director of Kayo International, bringing over a decade of experience in early childhood education. Her qualifications in Early Childhood Education and Child Psychology, along with her role as the creator of the NURTURE Lab Curriculum, reflect her commitment to holistic child development.",
        "Her unique blend of analytical thinking from the corporate world and genuine passion for education has shaped every aspect of Kayo International — from curriculum design and teacher training to creating a safe, engaging, and child-centred learning environment.",
        "As an educator, curriculum developer, and parent, Veena believes every child deserves a nurturing space where they feel secure, inspired, and encouraged to reach their full potential. This philosophy continues to guide Kayo International's approach to early learning every day.",
      ],
      credentials: ["TESOL Early Childhood Education", "Diploma in Child Psychology", "Creator, NURTURE Lab Curriculum"],
    },
    {
      name: "Sankara K",
      role: "Co-Founder",
      image: IMAGES.coFounder,
      paragraphs: [
        "My journey from BITS Pilani sparked a lifelong mission: merging education with technology to reimagine how schools grow and thrive. That curiosity has never faded — it's what gets me up every morning.",
        "I spend my days building and testing bold, forward-thinking education solutions that help schools hit their goals, not just academically, but as businesses too. Scouting new opportunities is a big part of that: digging into markets, spotting trends, and staying a step ahead of what's happening across the industry.",
        "At the heart of it, my role is simple — I partner with school leaders and help them think bigger. Whether it's cracking a tough strategic problem or mapping out the next phase of growth, I'm there to help turn ambitious goals into reality.",
      ],
      credentials: ["BITS Pilani", "Education technology & strategy", "Growth & operations"],
    },
  ],
  team: {
    title: "Our Team — qualified, caring, committed",
    paragraphs: [
      "A preschool is only as good as its educators. At Kayo International, we take immense pride in our team of dedicated teachers and caregivers who share Veena's passion for early childhood development.",
      "Every teacher at Kayo International holds a Bachelor's degree in Early Years Education or an equivalent professional qualification. We believe that understanding child development, learning psychology, and age-appropriate teaching methodologies is essential to providing the quality of care your child deserves.",
      "Our teachers regularly participate in training sessions and workshops to stay updated with the latest research in early childhood education. When you choose Kayo, you are choosing a preschool with qualified teachers in Chennai who are truly invested in your child's success.",
    ],
    image: IMAGES.teachers,
  },
};

/* -------------------------------------------------------------------------- */
/*  Family Connect page                                                       */
/* -------------------------------------------------------------------------- */

export const FAMILY_CONNECT = {
  seoTitle: "Family Connect | Kayo International Chennai",
  metaDescription:
    "Discover Kayo International's family engagement preschool approach in Perungudi, Chennai. Open-door policy, live parent monitoring, SMS daily updates & family events.",
  h1: "Family Connect — partnering with parents for your child's bright future",
  lead: "At Kayo International, we believe that parents and families are the most important partners in every child's learning journey. With over 10 years of expertise in early childhood education and a 4.9-star rating from more than 1,000 happy families, we have built a nurturing community where parents are never spectators — they are active participants in their child's growth and development.",
  research:
    "Research consistently shows that when families are involved in preschool education, children develop stronger social skills, higher self-confidence, and better academic outcomes. That is why we have designed our Family Connect programme to be one of the most comprehensive parent involvement preschool programmes Chennai has to offer.",
  events: {
    title: "Family events calendar — celebrating together all year round",
    intro:
      "Building a strong sense of community is at the heart of everything we do at Kayo International. Throughout the year, we host a variety of family events that Perungudi families look forward to — creating cherished memories and meaningful connections among our school community.",
    items: [
      { icon: "PartyPopper", name: "New Year's Celebration" },
      { icon: "Flower2", name: "Mother's Day Tea Party" },
      { icon: "Cake", name: "Children's Day Party" },
      { icon: "UtensilsCrossed", name: "Father's Day Luncheon" },
      { icon: "GraduationCap", name: "Preschool Graduation" },
    ],
  },
  communication: {
    title: "Daily communication — never miss a moment of your child's day",
    intro:
      "Consistent, meaningful communication is the backbone of successful family engagement. At Kayo International, we ensure you are always informed about your child's daily experiences through multiple touchpoints designed for busy modern families.",
    items: [
      { icon: "MessageSquare", name: "SMS Daily Updates" },
      { icon: "FileText", name: "Regular Progress Reports" },
      { icon: "Users", name: "Parent-Teacher Meetings" },
      { icon: "MessagesSquare", name: "Open Communication Channels" },
      { icon: "Radio", name: "Real-Time Updates on Child Activities" },
      { icon: "TrendingUp", name: "Monthly Learning Insights" },
    ],
  },
  benefits: {
    title: "Kayo benefits",
    items: [
      { icon: "Droplets", name: "Clean Bathrooms & Wash Areas" },
      { icon: "Palette", name: "Children's Creative Corner" },
      { icon: "Trees", name: "Spacious Indoor & Outdoor Play Areas" },
      { icon: "UtensilsCrossed", name: "Dining Area" },
      { icon: "Tent", name: "Picnics & Field Trips" },
      { icon: "Waves", name: "Sand Pit & Splash Pool" },
      { icon: "GlassWater", name: "R.O. Purified Drinking Water" },
      { icon: "Bus", name: "Safe Transport Facility" },
      { icon: "Medal", name: "Graduation & Annual Sports Meet" },
    ],
  },
  resources: {
    title: "Parent resources — information at your fingertips",
    policies: {
      title: "Kayo Policies",
      intro:
        "We encourage all families to review our Kayo Policies page, which outlines important guidelines across several key areas:",
      items: [
        {
          name: "Settling-in Policy",
          desc: "We request parents to stay with their child during the initial settling-in period to ensure a smooth, comfortable transition into the preschool environment.",
        },
        {
          name: "Health Policy",
          desc: "Detailed protocols for maintaining hygiene, preventing infection spread, and managing illness — including our hand-washing routines, sanitisation practices, and first-aid preparedness.",
        },
        {
          name: "Children Collection Policy",
          desc: "Clear guidelines for safe pickup procedures to ensure every child leaves our premises only in the care of authorised individuals.",
        },
        {
          name: "Comments & Complaints",
          desc: "A transparent process for raising concerns, with a commitment to resolution within 5 working days.",
        },
        {
          name: "Behaviour Management",
          desc: "Our compassionate, age-appropriate approach to supporting children through behavioural challenges.",
        },
      ],
    },
    handbook: {
      title: "Parent Handbook",
      desc: "Every enrolled family receives a detailed parent handbook covering everything from daily routines and uniform guidelines to celebration policies and emergency procedures.",
    },
    updates: {
      title: "Regular Updates on Policy Changes",
      desc: "Whenever we update our curriculum, policies, or procedures, we ensure all families are informed through the appropriate communication channels. We welcome questions and feedback at any time.",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*  Policies page                                                             */
/* -------------------------------------------------------------------------- */

export const POLICIES = {
  seoTitle: "Policies | Kayo International Preschool",
  metaDescription:
    "Discover Kayo International's comprehensive preschool safety policies in Chennai. Learn about our health standards, child protection, settling-in support & more.",
  h1: "Our preschool policies — safety, transparency & peace of mind",
  lead: "At Kayo International, we believe every parent deserves complete clarity about how we care for their children. Over the past decade, we have earned the trust of Chennai families by placing child safety, hygiene, and open communication at the centre of everything we do. Our policies are designed to exceed parent expectations — creating a secure environment where children explore, learn, and grow with confidence.",
  items: [
    {
      icon: "HeartHandshake",
      title: "Settling In — gentle starts for every child",
      desc: "We encourage parents to stay with their child for an agreed period during the initial days. This gradual approach helps children become familiar with their new environment, build trust with their teachers, and settle in at their own comfortable pace. Every child transitions differently, and we personalise the process to suit individual needs.",
    },
    {
      icon: "Moon",
      title: "Rest Areas — quiet spaces to recharge",
      desc: "Both our nursery and preschool feature quiet, carpeted rest areas with soft cushions where children can relax whenever they need. Whether they choose to nap or engage in quiet activities, our soothing environment ensures every child gets the downtime they need to recharge during the day.",
    },
    {
      icon: "Droplets",
      title: "Health Policy — hygiene first, always",
      desc: "We take every precaution to prevent the spread of infection among children. Our premises are equipped with hot water, liquid hand wash, sanitisers, and paper towels — all readily available throughout the day. Classrooms and play areas are sanitised daily using child-safe disinfectants, and all staff hold current paediatric first aid certifications.",
    },
    {
      icon: "ShieldCheck",
      title: "Children Collection — your child's safety, our priority",
      desc: "Children are never released to anyone other than their parents or a pre-authorised adult named in advance. Anyone collecting a child on behalf of a parent must present valid identification for verification. We also request that parents collect their child on time, as late pickups can cause unnecessary distress.",
    },
    {
      icon: "MessagesSquare",
      title: "Comments & Complaints — we are always listening",
      desc: "If you have any concern about your child's experience, please speak to their class teacher first. Most matters are resolved quickly through open conversation. If a concern remains unresolved, it will be escalated to our Centre Head within 5 working days for a thorough review and satisfactory resolution.",
    },
    {
      icon: "Smile",
      title: "Behaviour Management — positive guidance, patient support",
      desc: "We recognise that challenging behaviour is a natural part of early childhood development. Our educators use positive guidance techniques — redirecting, modelling good behaviour, and helping children build self-regulation skills. If outside support is ever needed, we communicate proactively with parents and recommend appropriate specialists.",
    },
    {
      icon: "Globe",
      title: "Equal Opportunities — every child welcome",
      desc: "At Kayo International, we welcome all children and families regardless of race, religion, gender, ability, or background. We are committed to providing an inclusive environment where every child feels valued, respected, and supported to reach their full potential. Our staff are trained to recognise and celebrate diversity in all its forms, ensuring equal access to learning and participation for every child in our care.",
    },
    {
      icon: "Apple",
      title: "Healthy Eating — good food, good habits",
      desc: "We encourage healthy eating habits from the earliest age by offering balanced, nutritious meals and limiting processed foods and sugary snacks. Our menu is planned to support children's growth, energy, and concentration throughout the day. Parents are asked not to send unhealthy snacks or sugary drinks from home, as we work together to build positive food habits that last a lifetime.",
    },
    {
      icon: "Ban",
      title: "Practices Prohibited — what we never allow",
      desc: "To protect every child in our care, the following practices are strictly prohibited at Kayo International: physical punishment of any kind, shouting or humiliating language, force-feeding, isolation as a disciplinary measure, and unauthorised photography or video recording of children by anyone other than our own staff. Any staff member found violating these standards faces immediate disciplinary action. Our code of conduct ensures a safe, respectful, and nurturing environment at all times.",
    },
    {
      icon: "Sparkles",
      title: "Toilet Training — supporting independence with patience",
      desc: "We work with parents to support toilet training at a pace that suits each child's individual readiness. Our educators provide gentle encouragement and never pressure children, understanding that every child develops this skill at their own time. Parents are asked to keep us informed about their child's toilet training progress at home so we can maintain consistency between home and preschool.",
    },
    {
      icon: "CalendarX",
      title: "Absence & Sickness — keeping us informed",
      desc: "If your child is unable to attend due to illness or any other reason, we kindly request that parents inform us as early as possible. This helps us maintain accurate attendance records and plan accordingly for the day. For prolonged absences, parents should contact the Centre Head to discuss their child's return and any support needed to help them settle back in smoothly.",
    },
    {
      icon: "Stethoscope",
      title: "Accident & Injury — immediate care, clear communication",
      desc: "Despite all precautions, minor bumps and scrapes can happen during active play. All staff are trained in paediatric first aid and respond to any accident immediately with appropriate care. Parents are informed of any incident — no matter how small — through our daily communication system or by phone if the injury requires closer attention. A detailed accident report is recorded and shared with parents for their records.",
    },
  ],
  help: {
    title: "Have questions about our policies? We are here to help",
    body: "We understand that reading about policies is helpful, but sometimes you simply want to speak with a real person who can address your specific concerns. Whether you would like clarification on our preschool health and safety procedures, want to discuss your child's individual needs, or are ready to explore enrolment, our friendly team is here to assist you.",
    body2:
      "Every family is welcome to visit our centre, meet our qualified educators, and see our preschool safety policies in action. There is no substitute for experiencing firsthand the warm, secure environment we have created for our children.",
  },
};

/* -------------------------------------------------------------------------- */
/*  Franchise page                                                            */
/* -------------------------------------------------------------------------- */

export const FRANCHISE = {
  seoTitle: "Franchise | Kayo International Preschool",
  metaDescription:
    "Explore a rewarding preschool franchise opportunity in India with Kayo International. No royalty fees, 2X ROI potential & complete support. Enquire now for Chennai & Tamil Nadu.",
  h1: "Own a Kayo International preschool franchise — let's grow together",
  subtitle: "A proven preschool franchise opportunity in India",
  lead: "Are you an aspiring entrepreneur looking for a meaningful business venture in the rapidly growing early childhood education sector? Kayo International welcomes passionate individuals to join our expanding family through our preschool franchise opportunity in India.",
  lead2:
    "With over a decade of trusted experience, a proven NURTURE Lab curriculum, and a reputation built on genuine parent trust, we offer franchise partners a pathway to build a successful, rewarding preschool business.",
  why: {
    title: "Why partner with Kayo International?",
    items: [
      { icon: "BadgeCheck", name: "A Trusted and Reputable Brand" },
      { icon: "Rocket", name: "Dedicated to Empowering Successful Entrepreneurs" },
      { icon: "Compass", name: "Expert Guidance from Establishment to Operations" },
      { icon: "TrendingUp", name: "Proven Business Model with Growth Opportunities" },
      { icon: "GraduationCap", name: "Comprehensive Training and Ongoing Support" },
      { icon: "Users", name: "Strong Community and Collaborative Network" },
    ],
  },
  support: {
    title: "Our comprehensive support system",
    items: [
      { icon: "Building2", name: "Setup Guidance" },
      { icon: "BookOpen", name: "Curriculum & Academic Support" },
      { icon: "UserCheck", name: "Teacher Training & Recruitment" },
      { icon: "Settings", name: "Operations & Administration" },
      { icon: "Megaphone", name: "Marketing & Admissions Support" },
    ],
  },
  partner: {
    title: "Who we're looking for",
    intro:
      "We seek franchise partners who share our passion for early childhood education and our commitment to excellence. The ideal Kayo franchise partner is:",
    items: [
      { name: "Passionate about children", desc: "and genuinely invested in their wellbeing and development" },
      { name: "Financially prepared", desc: "to invest in setting up a premium preschool centre" },
      { name: "Committed to quality", desc: "and willing to uphold Kayo's high standards for safety, hygiene, and education" },
      { name: "Locally connected", desc: "with good knowledge of their chosen neighbourhood or city" },
      { name: "Business-minded", desc: "with the drive to grow a sustainable, profitable enterprise" },
      { name: "Hands-on", desc: "or willing to appoint a dedicated centre director for day-to-day operations" },
    ],
    closing:
      "You do not need prior experience in education. What matters most is your dedication, integrity, and willingness to follow a proven system while bringing your personal touch to your centre.",
  },
  investment: {
    title: "Investment overview",
    intro:
      "The total investment for a Kayo International preschool franchise varies based on location, property size, and local market conditions. Our investment framework typically covers:",
    items: [
      { name: "Franchise Fee", desc: "One-time, with no recurring royalty" },
      { name: "Infrastructure & Interiors", desc: "Centre design, child-safe furniture, learning materials, play equipment" },
      { name: "Technology Setup", desc: "CCTV systems, parent communication tools, administrative software" },
      { name: "Initial Marketing", desc: "Launch campaigns, local promotions, and digital presence" },
      { name: "Working Capital", desc: "For the first few months of operation" },
    ],
    closing:
      "During our confidential discussion, we provide detailed financial projections, break-even analysis, and a clear understanding of revenue potential based on your specific location and market conditions.",
  },
  process: {
    title: "Your next steps: how to apply",
    intro: "Taking the first step towards owning your Kayo International preschool franchise is simple:",
    steps: [
      { step: "01", name: "Enquiry with Kayo", desc: "Submit your franchise enquiry and share your details, interests, and preferred location with our team." },
      { step: "02", name: "Meeting with a Kayo Representative", desc: "Connect with our franchise representative to discuss your goals, understand the process, and get answers to your queries." },
      { step: "03", name: "Finalising the Location", desc: "Work with our team to identify and finalise the ideal location for setting up your Kayo International preschool." },
      { step: "04", name: "Agreement Signing", desc: "Complete the franchise agreement process and begin your journey towards establishing your own Kayo centre." },
      { step: "05", name: "Preschool Setup & Registration", desc: "Receive guidance on infrastructure setup, branding, registrations, and other essential launch requirements." },
      { step: "06", name: "Administrative & Teaching Training", desc: "Get comprehensive training and support for managing operations, administration, and delivering quality early education." },
      { step: "07", name: "Launch of Your Own School", desc: "Open your Kayo International preschool with complete support and start your journey as a successful preschool entrepreneur." },
    ],
  },
  locations:
    "We currently invite enquiries for preschool franchise opportunities in Chennai, across Tamil Nadu, and select cities in South India. Prime locations include neighbourhoods along OMR, Perungudi, Thoraipakkam, Sholinganallur, Velachery, Medavakkam, Kandanchavadi, Coimbatore, and other high-potential markets.",
  enquire: {
    title: "Enquire now — let's grow together",
    body: "Ready to build a rewarding business in early childhood education? Share your details and our franchise team will reach out within 48 hours.",
  },
};

/* -------------------------------------------------------------------------- */
/*  Careers page                                                              */
/* -------------------------------------------------------------------------- */

export const CAREERS = {
  seoTitle: "Careers | Kayo International",
  metaDescription:
    "Explore preschool teacher jobs in Chennai at Kayo International. We're hiring passionate early childhood educators for our Perungudi centre. Apply today and grow with us!",
  h1: "Join Team Kayo — meaningful preschool teaching careers in Chennai",
  lead: "If you have been searching for early childhood educator jobs on OMR, Montessori teacher jobs in Chennai, or a preschool teaching career in Perungudi where you are valued, supported, and inspired every single day — Team Kayo is waiting for you.",
  body: "Join a preschool with 10+ years of trusted excellence, a 4.9★ Google rating, and a founder-led culture that puts both children and educators first. Help us nurture the next generation of confident, curious, happy learners.",
  cta: "Fill out the form below and take the first step toward a deeply rewarding career in early childhood education.",
  privacy:
    "We respect your privacy. All information shared will be kept strictly confidential and used solely for recruitment purposes.",
  designations: [
    "School Teacher",
    "Daycare Teacher",
    "Curriculum Coordinator",
    "Branch Admin",
    "Assistant Branch Admin",
    "Phonic Teacher",
    "Sports Coach",
    "Handwriting Teacher",
    "Dance Teacher",
    "Music Teacher",
    "Karate Teacher",
    "Drawing Teacher",
  ],
  perks: [
    { icon: "Award", title: "10+ years of trusted excellence", desc: "Join an established name in Chennai early childhood education." },
    { icon: "Star", title: "4.9★ Google rating", desc: "Work somewhere families genuinely recommend to one another." },
    { icon: "Heart", title: "Founder-led culture", desc: "A culture that puts both children and educators first." },
    { icon: "GraduationCap", title: "Ongoing training", desc: "Regular training sessions and workshops in early childhood research." },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Contact page                                                              */
/* -------------------------------------------------------------------------- */

export const CONTACT_PAGE = {
  seoTitle: "Contact Us | Kayo International Preschool",
  metaDescription:
    "Contact Kayo International preschool in Perungudi, Chennai. Call +91 98840 04650. Visit our campus at Rajiv Nagar, Perungudi. Enrolment open for 2025-26.",
  h1: "Get in touch with Kayo International",
  lead: "At Kayo International, we believe that choosing the right preschool is one of the most important decisions you will make for your child. That is why we encourage every parent to reach out, ask questions, and visit our campus before making this decision. We are here to provide all the information you need — with warmth, honesty, and transparency.",
  body: "You can contact Kayo International preschool by phone, email, WhatsApp, or by filling out the quick enquiry form below. We typically respond to all enquiries within a few hours during preschool hours.",
  formNote: "Fill in the form below and our admissions counsellor will get back to you within 24 hours.",
  ageOptions: ["1.5–2 Years", "2–3 Years", "3–4 Years", "4–6 Years", "6–12 Years"],
  programmeOptions: ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare"],
};
