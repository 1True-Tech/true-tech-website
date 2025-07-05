import Image from "next/image";
import { HoveredElement } from "./ui/HoveredElement";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full py-12 px-2 sm:px-4 md:px-8 lg:px-16 bg-primary flex gap-4 items-center flex-col">
      <span className=" flex gap-1 items-center w-fit">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={1024}
          height={1024}
          quality={100}
          className="size-8 md:size-10 lg:size-12"
        />
        <b className="text-xl md:text-3xl lg:text-4xl text-secondary-200">
          True Tech
        </b>
      </span>
      <nav className="w-full flex flex-col gap-4">
        <ul className="flex-col w-full min-[498px]:flex-row items-center justify-center flex gap-4">
          {[
            {
              label: "About",
              url: "#",
            },
            {
              label: "Why us",
              url: "#",
            },
            {
              label: "Services",
              url: "#",
            },
            {
              label: "Testimonials",
              url: "#",
            },
          ].map((item, idx) => (
            <HoveredElement
              key={idx}
              asChild
              hoveredClass={{
                true: "before:w-full before:bg-gradient-to-r before:from-secondary-200 before:to-secondary-200/30",
                false: "before:w-0 before:bg-transparent",
              }}
              className="relative before:duration-300 before:rounded-full before:bg-gradient-to-r before:h-[2px] before:absolute before:top-[calc(100%+2px)] text-sm md:text-base text-neutral-100"
            >
              <Link href={item.url}> {item.label}</Link>
            </HoveredElement>
          ))}
        </ul>
        <span className="h-[2px] w-full bg-secondary-200/50 rounded-full mt-5 mb-2" />
        <div className="flex-col-reverse min-[498px]:flex-col w-full sm:flex-row flex gap-5 items-center justify-between">
          <em className="text-xs md:text-sm text-neutral-100 not-italic">&copy; 2025 TrueTech. All rights reserved.</em>
          <ul className="flex-col w-full sm:w-fit min-[498px]:flex-row items-center justify-center flex gap-4">
            <HoveredElement
              asChild
              hoveredClass={{
                true: "before:w-full before:bg-gradient-to-r before:from-secondary-200 before:to-secondary-200/30",
                false: "before:w-0 before:bg-transparent",
              }}
              className="relative before:duration-300 before:rounded-full before:bg-gradient-to-r before:h-[2px] before:absolute before:top-[calc(100%+2px)] text-xs md:text-sm text-neutral-100"
            >
              <Link href={"#"}> Privacy policy</Link>
            </HoveredElement>
            <HoveredElement
              asChild
              hoveredClass={{
                true: "before:w-full before:bg-gradient-to-r before:from-secondary-200 before:to-secondary-200/30",
                false: "before:w-0 before:bg-transparent",
              }}
              className="relative before:duration-300 before:rounded-full before:bg-gradient-to-r before:h-[2px] before:absolute before:top-[calc(100%+2px)] text-xs md:text-sm text-neutral-100"
            >
              <Link href={"#"}> Terms of service</Link>
            </HoveredElement>
            <HoveredElement
              asChild
              hoveredClass={{
                true: "before:w-full before:bg-gradient-to-r before:from-secondary-200 before:to-secondary-200/30",
                false: "before:w-0 before:bg-transparent",
              }}
              className="relative before:duration-300 before:rounded-full before:bg-gradient-to-r before:h-[2px] before:absolute before:top-[calc(100%+2px)] text-xs md:text-sm text-neutral-100"
            >
              <Link href={"#"}> Cookies settings</Link>
            </HoveredElement>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
