import React from "react";
import WorldSvg from "../extras/worldsvg";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import Icons from "../ui/Icons";
import { Section, SectionSummary } from "../ui/SectionSummaryContent";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Section className="w-full pt-[15vh] pb-[10vh] sm:pt-[20vh] flex flex-col gap-20 isolate">
      <WorldSvg className="w-full absolute top-0 left-0 pointer-events-none -z-10" />
      {/* headline */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-5xl leading-[140%] text-center text-secondary font-bold">
          Transform Your Online Presence with TrueTech
        </h1>
        <SectionSummary className="max-w-lg text-base md:text-xl text-center">
          At TrueTech, we specialize in web services, SEO, web development, and
          design to elevate your business. Let us help you create a stunning
          online experience that drives results.
        </SectionSummary>
        <CustomButton variant="fill" rightIcon={<Icons icon_name="arrow_right" weight="fill" />}>Start your project</CustomButton>
      </div>
      <div className="w-full flex items-end relative">
        <span className="w-[calc((100%/3)-20px)] -z-10 scale-125 translate-x-4 sm:translate-x-0 sm:scale-100 sm:w-[calc((100%/3)-50px)] shrink">
          <Image
            src={"/hero-images/image.png"}
            className="size-full object-bottom"
            alt="image 1"
            width={400}
            height={400}
          />
        </span>
        <span className="w-[calc((100%/3)+30px)] sm:w-[calc((100%/3)+100px)] scale-150 sm:scale-110">
          <Image
            src={"/hero-images/image-2.png"}
            className="size-full object-bottom"
            alt="image 1"
            width={400}
            height={400}
          />
        </span>
        <span className="w-[calc((100%/3)-20px)] -z-10 scale-125 -translate-x-4 sm:translate-x-0 sm:scale-100 sm:w-[calc((100%/3)-50px)] shrink">
          <Image
            src={"/hero-images/image-1.png"}
            className="size-full object-bottom"
            alt="image 1"
            width={400}
            height={400}
          />
        </span>
      </div>
    </Section>
  );
}
