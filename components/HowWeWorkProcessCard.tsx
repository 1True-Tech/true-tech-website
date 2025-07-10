"use client";
import { ExtendedElement } from "@/types/index.";
import clsx from "clsx";
import Icons, { icon_name } from "./ui/Icons";
import useGSAP from "@/lib/hooks/UseGsap";
import { useRef, useState } from "react";
import gsap from "gsap";
type Props = {
  icon_name: icon_name;
  title: string;
  description: string;
} & ExtendedElement;

export default function HowWeWorkProcessCard({
  icon_name,
  title,
  description,
  className,
  ...props
}: Props) {
  const cardRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState<"in" | "out">("out");
  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;
    const toX = (card.parentElement?.clientWidth || 0) - card.clientWidth;
    console.log(toX);
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        onEnter() {
          setPosition("in");
        },
        onLeaveBack() {
          setPosition("out");
        },
      },
      ease: "none",
      x: -toX,
    });
  });
  return (
    <article
      {...props}
      ref={cardRef}
      className={clsx(
        "flex flex-col gap-3 duration-500",
        "not-last:[--last-color:var(--color-primary))]",
        "last:[--last-height:0%]",
        "last:[--last-color:transparent]",
        {
          "not-last:[--last-height:100%]":position === "in",
          "not-last:[--last-height:0%]":position === "out",
        },

        className
      )}
    >
      {/* heading */}
      <div className="w-full flex gap-3 items-center">
        {/* icon */}
        <Icons
          icon_name={icon_name}
          size={32}
          className={
            clsx("duration-300",{
              "text-secondary":position === "in",
              "text-secondary-200":position === "out",
            })
          }
          weight="fill"
        />
        {/* title */}
        <h5 className="text-primary w-full text-sm sm:text-base font-bold leading-[160%]">
          {title}
        </h5>
      </div>

      <div className="w-full grid gap-3 grid-cols-[30px_1fr]">
        {/* before line */}
        <span
          className={clsx(
            "w-full h-full pointer-events-none flex justify-center"
          )}
        >
          <span
            className={clsx(
              "w-0.5 rounded-full h-[var(--last-height)] bg-[var(--last-color)] duration-500"
            )}
          />
        </span>
        {/* description */}
        <p className="text-neutral-900 text-xs sm:text-sm leading-[160%]">
          {description}
        </p>
      </div>
    </article>
  );
}
