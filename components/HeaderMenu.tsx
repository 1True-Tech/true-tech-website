"use client";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import Button from "./ui/Button";
import Icons from "./ui/Icons";
import useGSAP from "@/lib/hooks/UseGsap";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { HoveredElement } from "./ui/HoveredElement";

type MenuItem = { label: string; url: string };

// Desktop Menu with GSAP SplitText animation
const MenuNotMobile = ({
  menus,
  isOpen,
}: {
  menus: MenuItem[];
  isOpen: boolean;
}) => {
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const splitRef = useRef<ReturnType<typeof SplitText.create> | null>(null);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      if (!itemsRef.current.length) return;

      // revert old splits
      splitRef.current?.revert();

      // split text into chars
      splitRef.current = SplitText.create(itemsRef.current, {
        type: "chars",
      });
      const chars = splitRef.current.chars;

      gsap.fromTo(
        chars,
        { x: isOpen ? 10 : 0, opacity: isOpen ? 0 : 1 },
        {
          x: isOpen ? 0 : 5,
          opacity: isOpen ? 1 : 0,
          ease: "power3.out",
          stagger: 0.02,
          duration: 0.5,
        }
      );
    },
    { dependencies: [isOpen], revertOnUpdate: false }
  );

  return (
    <ul className="hidden md:flex items-center gap-4">
      {menus.map((menu, idx) => (
        <HoveredElement as="li"
          ref={addToRefs}
          asChild
          key={idx}
          hoveredClass={{
            true: "before:w-full before:bg-gradient-to-r before:from-secondary-500 before:to-secondary-500/30",
            false: "before:w-0 before:bg-transparent",
          }}
          className={clsx(
            "relative before:duration-300 before:rounded-full before:w-0 before:h-1 before:absolute before:top-[calc(100%+2px)]",
            "overflow-hidden text-secondary-500",
            {
              "pointer-events-none": !isOpen,
            }
          )}
        >
          <Link href={menu.url}>{menu.label}</Link>
        </HoveredElement>
      ))}
    </ul>
  );
};

// Fullscreen mobile menu
const MenuMobile = ({
  menus,
  isOpen,
}: {
  menus: MenuItem[];
  isOpen: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simple fade + slide animation for mobile menu
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const tl = gsap.timeline();

      if (isOpen) {
        tl.to(containerRef.current, { autoAlpha: 1, duration: 0.3 }).from(
          containerRef.current.querySelectorAll("li"),
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
      } else {
        tl.to(containerRef.current, { autoAlpha: 0, duration: 0.5 });
      }
    },
    { dependencies: [isOpen] }
  );
  useEffect(() => {
    const isClient = typeof window !== undefined
    if (isClient) {
      if (isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
        
      }
    }
    
  }, [isOpen])
  

  return (
    <div
      ref={containerRef}
      className="fixed top-0 overflow-hidden w-full h-[100dvh] -z-10 isolate inset-0 bg-black/20 backdrop-blur-sm flex flex-col gap-4 items-center justify-center text-2xl md:hidden pointer-events-none"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div
        className={clsx(
          "absolute inset-0 -z-10",
          "before:w-1/2 after:w-1/2",
          "before:h-full after:h-full",
          "before:absolute after:absolute",
          "before:duration-300 after:duration-300",
          "before:z-0 after:z-0",
          "before:top-0 after:top-0",
          "before:bg-white after:bg-white",
          {
            "before:-left-1/2 after:left-full": !isOpen,
            "before:left-0 after:left-1/2": isOpen,
            "before:skew-x-12 after:-skew-x-12": !isOpen,
            "before:skew-x-0 after:-skew-x-0": isOpen,
            "before:duration-300 after:duration-300": isOpen,
            "before:duration-500 after:duration-500": !isOpen,
          }
        )}
      >
        <span
          className={clsx(
            "bg-gradient-to-b delay-200 duration-300 from-secondary/10 to-white size-full z-10 absolute inset-0",
            {
              "opacity-100": isOpen,
              "opacity-0": !isOpen,
            }
          )}
        ></span>
      </div>
      <ul className="flex flex-col items-center gap-6">
        {menus.map((menu, idx) => (
          <HoveredElement
          as="li"
            key={idx}
            hoveredClass={{
              true: "before:w-full before:bg-gradient-to-r before:from-secondary-500 before:to-secondary-500/30",
              false: "before:w-0 before:bg-transparent",
            }}
            className="relative before:duration-300 before:rounded-full before:bg-gradient-to-r before:h-1 before:absolute before:top-[calc(100%+2px)] text-secondary-500"
          >
            <Link href={menu.url}>{menu.label}</Link>
          </HoveredElement>
        ))}
      </ul>
      <div className="w-full absolute bottom-0 flex items-center justify-center flex-col p-2 pb-4">
        <Button variant="fill" rightIcon={<Icons icon_name="arrow_right" weight="fill" />}>Get started</Button>
      </div>
    </div>
  );
};

export default function HeaderMenu() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const menus: MenuItem[] = [
    { label: "About", url: "#" },
    { label: "Contact", url: "#" },
    { label: "Features", url: "#" },
    { label: "Pricing", url: "#" },
  ];

  return (
    <>
      <nav className="relative flex items-center justify-between gap-4 overflow-x-hidden">
        {isMobile ? (
          <>
            <MenuMobile menus={menus} isOpen={isOpen} />
          </>
        ) : (
          <>
            <MenuNotMobile menus={menus} isOpen={isOpen} />
          </>
        )}
        <Button
          onClick={() => setIsOpen((o) => !o)}
          variant="outline"
          className="!text-secondary-500 !bg-transparent !border-none !shadow-none"
          leftIcon={<Icons icon_name="list" />}
        >
          {!isMobile && <em className="not-italic !hidden md:!flex">Menu</em>}
        </Button>
      </nav>
      {!isMobile && (
        <Button variant="outline" className="!hidden md:!flex">
          Get started
        </Button>
      )}
    </>
  );
}
