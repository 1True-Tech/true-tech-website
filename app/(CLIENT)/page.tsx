import AboutSection from "../../components/sections/AboutSection";
import ContactSection from "../../components/sections/ContactSection";
import HeroSection from "../../components/sections/HeroSection";
import HowWeWorkSection from "../../components/sections/HowWeWorkSection";
import WhatWeDoSection from "../..//components/sections/WhatWeDoSection";
import TeamSection from "../../components/sections/TeamSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import WhyUsSection from "../../components/sections/WhyUsSection";


export default function Home() {
  return (
    <main className="w-full flex gap-0 flex-col">
      <HeroSection/>
      <AboutSection/>
      <HowWeWorkSection/>
      <WhatWeDoSection/>
      <WhyUsSection/>
      <TestimonialsSection/>
      <TeamSection/>
      <ContactSection/>
    </main>
  );
}
