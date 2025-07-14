"use client";
import { useRef } from "react";
import TestimonialCard from "../TestimonialCard";
import {
  Section,
  SectionHeadline,
  SectionSummary,
  SectionTagline,
} from "../ui/SectionSummaryContent";
import useGSAP from "@/lib/hooks/UseGsap";
import gsap from "gsap";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { useCustomScrollSpeed } from "@/lib/hooks/useCustomScrolSpeed";

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile(640);
  const runCustomSpeed = useCustomScrollSpeed();

  useGSAP(() => {
    const container = containerRef.current;
    const pin = isMobile ? {} : { pin: "#testimonialSectionContent" };
    if (!container) return;
    const tween = gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        onEnter() {
          runCustomSpeed(0.2);
        },
        onLeave() {
          runCustomSpeed(1);
        },
        onEnterBack() {
          runCustomSpeed(0.2);
        },
        onLeaveBack() {
          runCustomSpeed(1);
        },
        ...pin,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, {dependencies:[isMobile]});
  return (
    <Section
      ref={containerRef}
      id="testimonialSection"
      className="w-full py-10 sm:py-16"
    >
      {/* content */}
      <div
        id="testimonialSectionContent"
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-[1.5fr_2fr] gap-5 items-center m-auto"
      >
        <section className="flex flex-col gap-4">
          <SectionTagline>What our clients say!</SectionTagline>
          <SectionHeadline>
            Real Feedback, <br /> Real Results
          </SectionHeadline>
          <SectionSummary>
            We pride ourselves in delivering exceptional digital solutions
            tailored to your goals. But don't just take our words for it -
            here's what our clients have to say about partnering with True-Tech.
          </SectionSummary>
        </section>

        <section className="h-fit flex gap-4 flex-col items-end">
          <TestimonialCard
            image="/testimonial-images/image-2.jpeg"
            client_name="Jane Smith"
            description="True Tech guided us through every step with transparency and expertise. Our new platform launched on time, under budget, and exceed all performance benchmarks."
          />
          <TestimonialCard
            image="/testimonial-images/image.jpeg"
            client_name="Rahul Singh"
            description="Their team's agile approach meant we saw progress weekly. the quality of design and code is outstanding - Our user engagement has already jumped 40%."
          />
          <TestimonialCard
            image="/testimonial-images/image-1.jpeg"
            client_name="Pierre Samuel"
            description="From initial discovery to ongoing support, True-Tech has been a true partner. They listened to our needs and delivered a solution that continues to drive our growth."
          />
        </section>
      </div>
    </Section>
  );
}
