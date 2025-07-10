"use client"
import { useRef } from "react";
import TestimonialCard from "../TestimonialCard";
import {
  Section,
  SectionHeadline,
  SectionSummary,
  SectionTagline,
} from "../ui/SectionSummaryContent";
import useGSAP from "@/lib/hooks/UseGsap"
import gsap from "gsap";
import { useIsMobile } from "@/lib/hooks/use-mobile";


export default function TestimonialsSection() {
      const containerRef = useRef<HTMLElement>(null)
          const isMobile = useIsMobile(640)
      useGSAP(()=>{
          const container = containerRef.current
          const pin = isMobile?{}:{pin:"#testimonialSectionContent"}
          if(!container) return
          gsap.to(container, {
              scrollTrigger:{
                  trigger: container,
                  start: "top top",
                  end: "bottom bottom",
                  ...pin
              },
          })
      })
  return (
    <Section ref={containerRef} id="testimonialSection" className="w-full py-10 sm:py-16">
      {/* content */}
      <div id="testimonialSectionContent" className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-[1.5fr_2fr] gap-5 items-center m-auto">
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
            image="/logo.png"
            client_name="Jane Smith"
            description="True Tech guided us through every step with transparency and expertise. Our new platform launched on time, under budget, and exceed all performance benchmarks."
          />
          <TestimonialCard
            image="/logo.png"
            client_name="Jane Smith"
            description="True Tech guided us through every step with transparency and expertise. Our new platform launched on time, under budget, and exceed all performance benchmarks."
          />
          <TestimonialCard
            image="/logo.png"
            client_name="Jane Smith"
            description="True Tech guided us through every step with transparency and expertise. Our new platform launched on time, under budget, and exceed all performance benchmarks."
          />
        </section>
      </div>
    </Section>
  );
}
