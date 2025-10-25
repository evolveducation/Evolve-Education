import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { InnovationSection } from "./sections/InnovationSection";
import { MainContentSection } from "./sections/MainContentSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { VisionSection } from "./sections/VisionSection";

export const Evolve = (): JSX.Element => {
  return (
    <main className="bg-[#000000] overflow-x-hidden w-full flex flex-col items-center">
      <MainContentSection />
      <VisionSection />
      <CallToActionSection />
      <FeaturesSection />
      <FAQSection />
      <HeaderSection />
      <FooterSection />
      <TestimonialsSection />
      <InnovationSection />
      <HeroSection />
    </main>
  );
};
