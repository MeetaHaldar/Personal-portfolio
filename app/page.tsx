import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { HowIWork } from "@/components/sections/HowIWork";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <SelectedWork />
      <Experience />
      <Services />
      <HowIWork />
      <About />
      <TechStack />
      <ContactCTA />
    </>
  );
}
