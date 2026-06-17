import communityEmpowerment from "@/assets/community-empowerment.jpg.asset.json";
import heroMarch from "@/assets/hero-march.jpg";
import impact from "@/assets/impact.jpg";
import aboutVintage from "@/assets/about-vintage.jpg";

export type ProgramDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  overview: string[];
  outcomes: { label: string; value: string }[];
  highlights: string[];
  region: string;
};

export const PROGRAM_DETAILS: ProgramDetail[] = [
  {
    slug: "community-empowerment",
    eyebrow: "Community Empowerment & Capacity Building",
    title: "Mobilising Villages, Building Local Leaders",
    body: "We work with rural communities across Puri and Cuttack to organise village collectives, train grassroots leaders, and connect families to rights, entitlements and dignified livelihoods.",
    image: communityEmpowerment.url,
    alt: "Community members in a village capacity-building meeting",
    region: "Puri & Cuttack districts, Odisha",
    overview: [
      "Life Care H mobilises village-level collectives that bring neighbours together to identify shared challenges, plan local action and hold service providers accountable. Members receive training in leadership, rights awareness, public-scheme literacy and participatory planning.",
      "Capacity-building runs in parallel with practical livelihood support — vocational skilling, micro-enterprise mentoring and linkages to government welfare schemes — so that organised communities can translate awareness into stable household income.",
    ],
    outcomes: [
      { label: "Community members mobilised", value: "2,000+" },
      { label: "Village collectives supported", value: "45" },
      { label: "Youth & adults trained", value: "1,300+" },
      { label: "Districts covered", value: "2" },
    ],
    highlights: [
      "Formation and strengthening of 45+ village-level collectives",
      "Leadership and rights-awareness training across 27 programmes",
      "Vocational skilling for 529 unemployed youth and adults",
      "Skill development for 800 SC/ST/OBC participants in trades like carpentry, masonry and tailoring",
    ],
  },
  {
    slug: "agriculture-livelihood",
    eyebrow: "Agriculture & Livelihood",
    title: "Sustainable Farming, Stronger Villages",
    body: "From organic farming workshops to food processing camps, we work alongside 1,000+ farmers and youth to strengthen food security and create dignified rural livelihoods.",
    image: heroMarch,
    alt: "Farmers learning sustainable agriculture",
    region: "Cuttack district, Odisha",
    overview: [
      "Our agriculture programme supports small and marginal farmers in adopting organic practices, soil and water conservation, and climate-resilient crops. Workshops are delivered on-farm and through farmer field schools so techniques can be tested and adapted locally.",
      "Food-processing and value-addition training helps families capture more of what they grow — turning surplus produce into preserves, snacks and packaged goods that earn year-round income.",
    ],
    outcomes: [
      { label: "Farmers reached", value: "1,000+" },
      { label: "Sustainable agriculture workshops", value: "30" },
      { label: "Food processing camps", value: "20" },
      { label: "Villages engaged", value: "40+" },
    ],
    highlights: [
      "Hands-on training in organic farming and soil conservation",
      "Promotion of low-cost, climate-resilient practices",
      "Linkages with FPOs and government extension services",
      "Value-addition training for women-led food enterprises",
    ],
  },
  {
    slug: "health-water-sanitation",
    eyebrow: "Health, Water & Sanitation",
    title: "Healthier Homes, Safer Communities",
    body: "Free health camps, clean-water awareness and sanitation drives reach thousands every year — protecting families from preventable disease and building long-term wellbeing.",
    image: impact,
    alt: "Community health camp in rural Odisha",
    region: "Puri & Cuttack districts, Odisha",
    overview: [
      "We bring primary healthcare into villages through camps that offer free check-ups, essential medicines and referrals. Camps are designed around women's and children's health, with follow-up support for chronic conditions.",
      "Parallel water and sanitation drives focus on safe drinking water, hygiene, menstrual health and waste disposal — addressing the everyday conditions that drive preventable illness.",
    ],
    outcomes: [
      { label: "Beneficiaries at health camps", value: "850+" },
      { label: "Health camps organised", value: "19" },
      { label: "WASH awareness drives", value: "Ongoing" },
      { label: "Districts covered", value: "2" },
    ],
    highlights: [
      "Free medical check-ups and essential medicines",
      "Awareness on safe drinking water and waterborne disease prevention",
      "Sanitation and waste-disposal drives in vulnerable habitations",
      "Special focus on women's and children's health",
    ],
  },
  {
    slug: "education-environment",
    eyebrow: "Education & Environment",
    title: "Learning, Trees & a Future to Believe In",
    body: "We support 700+ underprivileged children with books and digital literacy, while planting 30,000+ saplings and leading environment campaigns that protect Odisha's natural heritage.",
    image: aboutVintage,
    alt: "Children studying and saplings being planted",
    region: "Puri & Cuttack districts, Odisha",
    overview: [
      "Our education work removes everyday barriers — books, study materials, school bags and basic digital literacy — for children from low-income families. A four-month computer course introduces school students and rural youth to MS Office, typing and safe internet use.",
      "Environment action runs alongside: social forestry plantations, e-waste awareness and campaigns against plastic pollution build a culture of stewardship in villages and schools.",
    ],
    outcomes: [
      { label: "Children supported", value: "700+" },
      { label: "Saplings planted", value: "30,000+" },
      { label: "Environment campaigns", value: "20" },
      { label: "Active campaign participants", value: "700" },
    ],
    highlights: [
      "Free books, study materials and school bags for 700+ children",
      "4-month computer literacy programme for youth and students",
      "Social forestry plantations of Mango, Eucalyptus and Akashi",
      "Awareness on plastic, e-waste and consumer rights",
    ],
  },
];

export const getProgramBySlug = (slug: string) => PROGRAM_DETAILS.find((p) => p.slug === slug);
