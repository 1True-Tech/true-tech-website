import AboutCard from "../AboutCard";
import {
  SectionHeadline,
  SectionSummary,
  SectionTagline,
  Section,
} from "../ui/SectionSummaryContent";

export default function AboutSection() {
  return (
    <Section className="w-full py-16 bg-primary-500 flex flex-col lg:flex-row gap-5 items-center justify-between">
      {/* content */}
      <section className="flex flex-col gap-4 lg:max-w-[49rem]">
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

      <section className="h-fit grid gap-4 grid-cols-1 md:grid-cols-2 lg:max-w-[33rem]">
        <AboutCard
          icon_name="browsers"
          title="Custom Web Development for Your Business Needs"
          description="We build responsive and user-friendly websites that drive engagement."
        />
        <AboutCard
          icon_name="globe_simple"
          title="Boost Your Visibility with Expert SEO Services"
          description="Our SEO strategies ensure your site ranks higher on search engines."
        />
        <AboutCard
          icon_name="cursor_click"
          title="Stunning Designs That Captivates and Converts"
          description="We create visually appealing designs that resonates with your audience."
        />
      </section>
    </Section>
  );
}
