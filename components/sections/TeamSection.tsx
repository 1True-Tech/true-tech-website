"use client";

import { useRef,useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGSAP from "@/lib/hooks/UseGsap";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { useCustomScrollSpeed } from "@/lib/hooks/useCustomScrolSpeed";

import TeamMemberCard from "../TeamMemberCard";
import {
  Section,
  SectionHeadline,
  SectionSummary,
  SectionTagline,
} from "../ui/SectionSummaryContent";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const isMobile = useIsMobile();
  const runCustomSpeed = useCustomScrollSpeed();

useEffect(() => {
  if (!outerRef.current) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // entry.boundingClientRect.top is relative to the viewport.
        if (entry.boundingClientRect.top <= 0) {
          // The top edge has reached (or passed) the top of the viewport
          runCustomSpeed(0.2);
        } else {
          // The top edge is still below the top of the viewport
          runCustomSpeed(1);
        }
      });
    },
    {
      root: null,     // viewport
      threshold: 0,   // fire callback at the very moment of crossing
      rootMargin: "0px",
    }
  );

  observer.observe(outerRef.current);

  return () => {
    observer.disconnect();
  };
}, []);


  useGSAP(() => {
    const outer = outerRef.current!;
    const sticky = stickyRef.current!;
    const cards = cardRefs.current!;
    const scroller = scrollerRef.current!;
    let tween: gsap.core.Tween;
      const initialVh = window.innerHeight


    const setStyling = (mobile:boolean=false) => {
      const totalWidth = cardRefs.current.reduce((sum, el) => {
        if (!el) return sum;
        const m = parseFloat(getComputedStyle(el).marginRight);
        return sum + el.offsetWidth + m + (20);
      }, 0);
      const visible = scroller.offsetWidth;
      const scrollLen = (totalWidth - visible)+100;
      

      // 2. Compute height
      outer.style.height = mobile?"fit-content":`${scrollLen + initialVh}px`;
      scroller.style.height = mobile?`${scroller.scrollWidth}px`:"fit-content"

      return {
        totalWidth,
        visible,
        scrollLen
      }
    }
    const buildDesktop = () => {
      const {scrollLen} = setStyling()
      // 3. Create tween
      tween = gsap.to(scroller, {
        x: -scrollLen,
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          endTrigger:outer,
          end: `bottom bottom`,
          scrub: 1,
          pin: sticky,
          pinSpacing: false,
          anticipatePin: 1,
          onEnter:    () => runCustomSpeed(0.2),
          onLeave:    () => runCustomSpeed(1),
          onEnterBack:() => runCustomSpeed(0.2),
          onLeaveBack:() => runCustomSpeed(1),
        },
      });
    }
    const buildMobile = () => {
      const  {scrollLen} = setStyling(true)
      const totalScroll = scroller.scrollWidth
      tween = gsap.to(cards, {
        ease: "none",
        xPercent:-106*(cards.length-1),
        scrollTrigger: {
          trigger: scroller,
          start: "top top",
          end: `${scroller.scrollWidth}px 95%`,
          scrub: 1,
          pin: true,
          toggleActions: "play none none reverse",
          anticipatePin: 1,
          snap: 1/(cards.length-1),
          onEnter:    () => runCustomSpeed(0.2),
          onLeave:    () => runCustomSpeed(1),
          onEnterBack:() => runCustomSpeed(0.2),
          onLeaveBack:() => runCustomSpeed(1),
        },
      });
    }
    const build = () => {
      if (tween) {
        tween.scrollTrigger!.kill!();
        tween.kill!();
      }

      if(isMobile){
        buildMobile()
      }else{
        buildDesktop()
      }
      
    };

    build();
    const onResize = () => { ScrollTrigger.refresh(); build(); };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      tween.scrollTrigger?.kill();
      tween?.kill();
    };
  }, { scope: outerRef, dependencies: [isMobile], revertOnUpdate: true });

  const cards = [
    ["Shaw", "Social manager", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius adipisci consequuntur atque, harum autem repellendus voluptatibus ducimus esse modi."],
    ["Victor", "Developer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius adipisci consequuntur atque, harum autem repellendus voluptatibus ducimus esse modi."],
    ["Paul", "Frontend Developer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius adipisci consequuntur atque, harum autem repellendus voluptatibus ducimus esse modi."],
    ["Nicholas", "Backend Developer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius adipisci consequuntur atque, harum autem repellendus voluptatibus ducimus esse modi."],
  ];

  return (
    <div ref={outerRef} className="w-full relative overflow-hidden !p-0">
      <div
        ref={stickyRef}
        className="w-full top-0 left-0 flex items-start justify-center md:!h-screen"
      >
        <Section className="w-full !p-0 flex items-stretch">
          <div
            ref={groupRef}
            className="flex w-full m-auto flex-col md:flex-row md:!h-[100dvh] relative isolate"
          >
            {/* — LEFT/TOP PANE — */}
            <main className="w-full z-10 bg-gradient-to-r from-white to-100% via-96% via-white to-transparent md:w-1/2 pb-16 md:pt-16 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-center">
              <SectionTagline className="sm:!text-base md:!text-base lg:!text-2xl">
                Meet The True-Tech Team
              </SectionTagline>
              <SectionHeadline className="sm:!text-3xl lg:!text-5xl">
                Driven by passion, <br /> United by purpose
              </SectionHeadline>
              <SectionSummary>
                Our diverse team of strategists, designers, and developers
                brings together decades of industry experience and a shared
                commitment to innovation. Every member is dedicated to turning
                your vision into a seamless, high-impact digital solution —
                collaboratively and with care. From crafting user-centric
                designs to writing clean, scalable code, we work as one to
                ensure your success at every phase.
              </SectionSummary>
            </main>

            {/* — RIGHT/BOTTOM SCROLLER — */}
            <div className="w-full relative z-0 h-fit md:h-full md:w-1/2 -mt-[20vh] md:mt-0 pl-4 sm:pl-8 flex items-center">
              <div
                ref={scrollerRef}
                className="flex gap-6 w-fit h-fit pt-[20vh] md:pt-0 pb-5 md:pb-0"
              >
                {cards.map(([name, title, desc], i) => (
                  <TeamMemberCard
                    key={name}
                    ref={(el) => {cardRefs.current[i] = el}}
                    member_name={name}
                    member_title={title}
                    description={desc}
                    image="/team-demo.jpeg"
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
