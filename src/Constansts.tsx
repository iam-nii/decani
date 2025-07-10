import Derrick from "./assets/images/derrick.png";
import Jessica from "./assets/images/Jessica.png";
import Nii from "./assets/images/nii.png";
import Emmanuel from "./assets/images/emmanuel.png";
import webDev from "./assets/web-dev.svg";
import creativeDesign from "./assets/creative-design.svg";
import DigitalMarketing from "./assets/digital-marketing.svg";
import BrandStrategy from "./assets/brand-strategy.svg";

const sections = [
  {
    header: "Decani Creative Hub",
    content: "Your partner for all your creative Solutions",
  },
  {
    header: "Our Services",
    content: "We offer a wide array of services",
  },
  {
    header: "Meet The Team",
    content: "",
  },
  {
    header: "About Us",
    content:
      "We are a team of passionate individuals who are dedicated to providing the best possible service to our clients.",
  },
  {
    header: "Interested in Partnering with Us?",
    content: "Reach out to us",
  },
];

const teamMembers = [
  {
    image: Derrick,
    name: "Derrick Sarpong",
    role: "CTO",
    about:
      "Derrick is the CTO and Co-founder of Decani Creative Hub. He is a passionate about creating beautiful and functional websites and apps.",
  },
  {
    image: Jessica,
    name: "Jessica Awuradjoa Asamoah",
    role: "CEO",
    about:
      "Jessica is the CEO and Co-founder of Decani Creative Hub. She is a passionate about creating beautiful and functional websites and apps.",
  },
  {
    image: Nii,
    name: "Nii Adjetey Adjei-Boye",
    role: "COO",
    about:
      "Nii is the COO and Co-founder of Decani Creative Hub. He is a passionate about creating beautiful and functional websites and apps.",
  },
  {
    image: Emmanuel,
    name: "Emmanuel Adom",
    role: "Graphic Designer",
    about:
      "Emmanuel is a Graphic Designer at Decani Creative Hub. He is a passionate about creating beautiful and functional websites and apps.",
  },
];

const services = [
  {
    icon: webDev,
    header: "Web Development",
    body: "We build fast, modern websites tailored to your business needs — from landing pages to full web platforms.",
  },
  {
    icon: creativeDesign,
    header: "Creative Design",
    body: "From branding to UI/UX design, we craft visually compelling experiences that engage your audience.",
  },
  {
    icon: DigitalMarketing,
    header: "Digital Marketing",
    body: "Our team drives traffic and conversion through targeted campaigns, SEO, social media, and content strategy.",
  },
  {
    icon: BrandStrategy,
    header: "Brand Strategy",
    body: "We help shape strong, memorable brands with strategic messaging, identity systems, and positioning.",
  },
];

export { sections, teamMembers, services };
