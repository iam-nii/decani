import Hero from "../components/layouts/Hero";
import Services from "../components/layouts/Services";
import Approach from "../components/layouts/Approach";
import Team from "../components/layouts/Team";
import Studio from "../components/layouts/Studio";
import CallToAction from "../components/layouts/CallToAction";
import { usePageMeta } from "../lib/usePageMeta";

export default function LandingPage() {
  usePageMeta({
    title: "Decani Creative Hub | Brand, digital and campaigns",
    description:
      "Decani is a creative studio in Accra. We build brand identities, digital products and campaigns for teams with something worth saying.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <Team />
      <Studio />
      <CallToAction />
    </>
  );
}
