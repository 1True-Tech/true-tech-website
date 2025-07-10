import HowWeWorkProcessCard from "../HowWeWorkProcessCard";
import {
  Section,
  SectionHeadline,
  SectionSummary,
  SectionTagline,
} from "../ui/SectionSummaryContent";

type Props = {};

export default function HowWeWorkSection({}: Props) {
  return (
    <Section className="w-full py-0">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-5 items-center m-auto">
      {/* content */}
      <section className="flex flex-col gap-4">
        <SectionTagline>How we work</SectionTagline>
        <SectionHeadline>
          Built with you, <br /> Backed by us
        </SectionHeadline>
        <SectionSummary>
          At TrueTech, we turn your big ideas into reality through a clear,
          collaborative process. From our very first conversation to ongoing
          support, every step is designed to keep you informed, in control and
          confident that your digital solution will exceed expectations.
        </SectionSummary>
      </section>

      <section className="min-h-full h-fit flex flex-col gap-4">
        <HowWeWorkProcessCard
          icon_name="binoculars"
          title="Discover"
          description="We dive into your goals, audience, and pain points to define success together."
        />
        <HowWeWorkProcessCard
          icon_name="strategy"
          title="Strategize"
          description="We craft a clear roadmap - scope, timeline, and tech stack - so everyone knows the plan."
        />
        <HowWeWorkProcessCard
          icon_name="cursor_click"
          title="Design"
          description="We translate insights into clean, mobile-first mocks and ux flows for your approval."
        />
        <HowWeWorkProcessCard
          icon_name="rocket_launch"
          title="Build & Launch"
          description="Our developers code, integrate, test, and deploy - bringing your solution to live, fast and secure."
        />
        <HowWeWorkProcessCard
          icon_name="headset"
          title="Support"
          description="Post-Launch, we handle maintenance, updates, and new features to keep you ahead."
        />
      </section>
            </div>
      
    </Section>
  );
}
