import AboutSection from "../../components/sections/AboutSection";
import ContactSection from "../../components/sections/ContactSection";
import HeroSection from "../../components/sections/HeroSection";
import HowWeWorkSection from "../../components/sections/HowWeWorkSection";
import TeamSection from "../../components/sections/TeamSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import WhyUsSection from "../../components/sections/WhyUsSection";
import Icons from "../../components/ui/Icons";

export default function Home() {
  return (
    <main className="w-full flex gap-[50px] flex-col">
      <HeroSection/>
      <AboutSection/>
      <HowWeWorkSection/>
      <WhyUsSection/>
      <TestimonialsSection/>
      <TeamSection/>
      <ContactSection/>
    </main>
  );
}
