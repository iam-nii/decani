import Derrick from "../assets/images/derrick.png";
import Jessica from "../assets/images/Jessica.png";
import Nii from "../assets/images/nii.png";
import Emmanuel from "../assets/images/emmanuel.png";

import Branding800 from "../assets/images/opt/branding-800.jpg";
import Branding1600 from "../assets/images/opt/branding-1600.jpg";
import Design800 from "../assets/images/opt/design-800.jpg";
import Design1600 from "../assets/images/opt/design-1600.jpg";
import Development800 from "../assets/images/opt/development-800.jpg";
import Development1600 from "../assets/images/opt/development-1600.jpg";
import Marketing800 from "../assets/images/opt/marketing-800.jpg";
import Marketing1600 from "../assets/images/opt/marketing-1600.jpg";
import Ui800 from "../assets/images/opt/ui-800.jpg";
import Ui1600 from "../assets/images/opt/ui-1600.jpg";

export const site = {
  name: "Decani",
  fullName: "Decani Creative Hub",
  email: "hello@decani.studio",
  location: "Accra, Ghana",
  coordinates: "5.6037 N, 0.1870 W",
  tagline: "A creative studio in Accra.",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Team", href: "#team" },
  { label: "Studio", href: "#studio" },
];

export const hero = {
  words: ["Decani", "Creative", "Agency"],
  lede: "We make brands, websites and campaigns for people with something worth saying.",
  metaLeft: "Independent creative studio",
  metaRight: "Accra, Ghana",
};

export type Service = {
  id: string;
  index: string;
  name: string;
  short: string;
  body: string;
  tags: string[];
  image: string;
  imageSmall: string;
  imageAlt: string;
  caption: string;
};

export const services: Service[] = [
  {
    id: "branding",
    index: "01",
    name: "Branding",
    short: "Position and identity",
    body: "Positioning, naming and identity systems that give the work a direction worth defending. We build the rules first, then the pieces that carry them.",
    tags: ["Strategy", "Naming", "Identity systems"],
    image: Branding1600,
    imageSmall: Branding800,
    imageAlt: "Colour swatches and printed brand guidelines laid out on a studio desk",
    caption: "Identity and print",
  },
  {
    id: "design",
    index: "02",
    name: "Creative Design",
    short: "Art direction and layout",
    body: "Art direction, campaign design and print work made for the surface it lands on. One idea, drawn properly, at every size.",
    tags: ["Art direction", "Campaigns", "Print"],
    image: Design1600,
    imageSmall: Design800,
    imageAlt: "Designer arranging printed layouts and colour studies on a table",
    caption: "Campaign direction",
  },
  {
    id: "uiux",
    index: "03",
    name: "UI/UX Design",
    short: "Interfaces that read",
    body: "Interfaces mapped from the real task, then designed until the path feels obvious. Wireframes, design systems and prototypes you can test.",
    tags: ["Research", "Wireframes", "Design systems"],
    image: Ui1600,
    imageSmall: Ui800,
    imageAlt: "Interface wireframes and components on a design workspace",
    caption: "Product interface",
  },
  {
    id: "development",
    index: "04",
    name: "Development",
    short: "Fast, accessible builds",
    body: "Sites and platforms built to load quickly, read clearly and be handed over. Clean code, documented, with no lock in.",
    tags: ["React", "CMS", "E-commerce"],
    image: Development1600,
    imageSmall: Development800,
    imageAlt: "Developer workspace with code and a website in progress",
    caption: "Front end build",
  },
  {
    id: "marketing",
    index: "05",
    name: "Marketing",
    short: "Campaigns with a story",
    body: "Campaigns, social and search work that start from the story rather than the ad slot. Planned, written, measured.",
    tags: ["Campaigns", "Social", "Search"],
    image: Marketing1600,
    imageSmall: Marketing800,
    imageAlt: "Marketing planning notes and charts on a desk",
    caption: "Campaign planning",
  },
];

export const approach = {
  label: "Approach",
  heading: "A short route from question to launch.",
  quote: "Good work is a decision, made early.",
  note: "We would rather agree on the route before anyone opens a design file.",
  steps: [
    {
      index: "01",
      title: "Listen",
      body: "Questions, an audit and a shared brief. No design until we can say the problem in one sentence you agree with.",
    },
    {
      index: "02",
      title: "Shape",
      body: "Routes, references and a written direction. You choose a road before anyone draws a screen.",
    },
    {
      index: "03",
      title: "Build",
      body: "Design and code in the same room, reviewed in the browser every week instead of in a deck.",
    },
    {
      index: "04",
      title: "Hand over",
      body: "Files, accounts, documentation and a support window. You leave able to run it without us.",
    },
  ],
  expectations: [
    {
      title: "One team, start to finish",
      body: "Strategy, design and code sit in the same room, so nothing gets lost in a handover.",
    },
    {
      title: "Weekly, in the browser",
      body: "You see working screens every week. Fewer meetings, fewer surprises.",
    },
    {
      title: "You own all of it",
      body: "Source files, accounts and documentation are yours from day one.",
    },
  ],
};

export const teamMembers = [
  {
    image: Derrick,
    name: "Derrick Sarpong",
    role: "CTO, Co-founder",
    note: "Front end, infrastructure and the handover.",
  },
  {
    image: Jessica,
    name: "Jessica Awuradjoa Asamoah",
    role: "CEO, Co-founder",
    note: "Briefs, studio and client relationships.",
  },
  {
    image: Nii,
    name: "Nii Adjetey Adjei-Boye",
    role: "COO, Co-founder",
    note: "Schedules, budgets and the day to day.",
  },
  {
    image: Emmanuel,
    name: "Emmanuel Adom",
    role: "Graphic Designer",
    note: "Identity systems, layout and print.",
  },
];

export const studio = {
  label: "Studio",
  heading: "A studio built for the part after the pitch.",
  paragraphs: [
    "Decani is a creative studio in Accra. We build brands, websites and campaigns for people who have something specific to say and want it said well.",
    "We keep the team small and the process short. Strategy, design and development happen in the same room, which is why the finished thing usually looks like the idea you approved.",
    "We take on a handful of projects at a time. If we are not the right studio for yours, we will say so in the first call.",
  ],
  facts: [
    { label: "Studio", value: "Accra, Ghana" },
    { label: "Team", value: "Four people" },
    { label: "Working", value: "Worldwide" },
    { label: "Languages", value: "English" },
  ],
};

export const footer = {
  blurb:
    "A four person studio building brands, products and campaigns from one room in Accra.",
  columns: [
    {
      title: "Studio",
      links: [
        { label: "Services", href: "/#services" },
        { label: "Approach", href: "/#approach" },
        { label: "Team", href: "/#team" },
        { label: "About", href: "/#studio" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Branding", href: "/#services" },
        { label: "Creative design", href: "/#services" },
        { label: "UI and UX", href: "/#services" },
        { label: "Development", href: "/#services" },
        { label: "Marketing", href: "/#services" },
      ],
    },
  ],
};
