import Derrick from "../assets/images/derrick.png";
import Jessica from "../assets/images/Jessica.png";
import Nii from "../assets/images/nii.png";
import Emmanuel from "../assets/images/emmanuel.png";
import webDev from "../assets/icons/web-dev.svg";
import creativeDesign from "../assets/icons/creative-design.svg";
import DigitalMarketing from "../assets/icons/digital-marketing.svg";
import BrandStrategy from "../assets/icons/brand-strategy.svg";
import Development from "../assets/images/services/development.jpg"
import UI from "../assets/images/services/ui.jpg"
import Marketing from "../assets/images/services/marketing.jpg"
import Design from "../assets/images/services/design.jpg"
import Branding from "../assets/images/services/branding.jpg"




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
    header: "Meet Our Team",
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
    image: Development,
    header: "Development",
    body: "We build fast, modern websites tailored to your business needs — from landing pages to full web platforms.",
  },
  {
    icon: creativeDesign,
    image: Design,
    header: "Creative Design",
    body: "From branding to UI/UX design, we craft visually compelling experiences that engage your audience.",
  },
  {
    icon: creativeDesign,
    image: UI,
    header: "UI/UX Design",
    body: "From branding to UI/UX design, we craft visually compelling experiences that engage your audience.",
  },
  {
    icon: DigitalMarketing,
    image: Marketing,
    header: "Marketing",
    body: "Our team drives traffic and conversion through targeted campaigns, SEO, social media, and content strategy.",
  },
  {
    icon: BrandStrategy,
    image: Branding,
    header: "Branding",
    body: "We help shape strong, memorable brands with strategic messaging, identity systems, and positioning.",
  },
];

export { sections, teamMembers, services };
