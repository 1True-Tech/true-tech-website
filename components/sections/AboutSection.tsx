import AboutCard from "../AboutCard";
import {
  SectionHeadline,
  SectionSummary,
  SectionTagline,
  Section,
} from "../ui/SectionSummaryContent";

export default function AboutSection() {
  return (
    <Section className="w-full py-16 bg-primary-500 grid grid-cols-1 sm:grid-cols-[1.5fr_2fr] gap-5 items-center">
      {/* content */}
      <section className="flex flex-col gap-4">
        <SectionTagline>What we do</SectionTagline>
        <SectionHeadline>
          Transform Your Online Presence with TrueTech
        </SectionHeadline>
        <SectionSummary>
          At TrueTech, we specialize in crafting tailored web solutions that
          elevate your brand. Our expert team is dedicated to delivering
          exceptional results in web development, SEO, and design.
        </SectionSummary>
      </section>

      <section className="h-fit grid gap-4 grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] place-items-center lg:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]">
        <AboutCard
          icon_name="browsers"
          title="Custom Web Development for Your Business Needs"
          description="We build responsive and user-friendly websites that drive engagement."
       /> 
       <AboutCard
          icon_name="browsers"
          title="Custom Web Development for Your Business Needs"
          description="We build responsive and user-friendly websites that drive engagement."
       /> 
       <AboutCard
          icon_name="browsers"
          title="Custom Web Development for Your Business Needs"
          description="We build responsive and user-friendly websites that drive engagement."
       /> 
      </section>
    </Section>
  );
}
