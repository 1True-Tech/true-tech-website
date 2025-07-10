"use client"
import { ExtendedElement } from "@/types/index.";
import clsx from "clsx";
import Image from "next/image";
import Icons from "./ui/Icons";
import useGSAP from "@/lib/hooks/UseGsap"
import { useRef, useState } from "react";
import gsap from "gsap";

type Props = {
  image: string;
  client_name: string;
  description: string;
} & ExtendedElement;

export default function TestimonialCard({
  image,
  client_name,
  description,
  className,
  ...props
}: Props) {
    const cardRef = useRef<HTMLElement>(null)
    const [position, setPosition] = useState<"in"|"out">("out")
    useGSAP(()=>{
        const card = cardRef.current
        if(!card) return
        const toX = ((card.parentElement?.clientWidth || 0) - card.clientWidth)/3
        gsap.to(card, {
            scrollTrigger:{
                trigger: card,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
                onEnter(){
                    setPosition("in")
                },
                onLeave(){
                    setPosition("out")
                },
                onEnterBack(){
                    setPosition("in")
                },
                onLeaveBack(){
                    setPosition("out")
                },
            },
            ease:"none",
            x:-toX,
        })
    })
  return (
    <article
      {...props}
      ref={cardRef}
      className={clsx(
        "w-full sm:w-[80%] flex items-center gap-3 relative border-2 duration-300 rounded-md border-l-8 p-2",
        className,
        {
          "border-secondary":position==="in",
          "border-neutral-200":position==="out",
        }
      )}
    >
        <Icons icon_name="quotes" weight="fill" className={clsx("size-7 absolute duration-300 right-2 top-2", {
          "text-secondary":position==="in",
          "text-neutral-200":position==="out",
        })}/>
      {/* image */}
      <div className="size-20 flex items-center justify-center">
        <Image
          src={image}
          alt={`${client_name} image`}
          width={500}
          height={500}
          priority={false}
          className="size-full object-cover object-center"
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        {/* title */}
        <strong className="text-primary w-full text-sm sm:text-base font-bold leading-[160%]">
          {client_name}
        </strong>
        {/* description */}
        <p className="text-neutral-900 text-xs sm:text-sm leading-[160%]">
          {description}
        </p>
      </div>
    </article>
  );
}
