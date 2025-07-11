"use client"
import Image from "next/image"
import HeaderMenu from "./HeaderMenu"
import { useScrollView } from "@/lib/hooks/useScreenScrollPosition"
import clsx from "clsx"

type Props = {}

export default function Header({}: Props) {
  const {section} = useScrollView()
  return (
    <header className={clsx(
      "w-full py-4 px-2 sm:px-4 md:px-8 lg:px-16 flex justify-between duration-200 isolate z-50 sticky top-0 bg-white/30 backdrop-blur-lg",
      {
        "!bg-white":section === "why-us-section"
      }
    )}>
      {/* logo */}
      <span className=" flex gap-1 items-center">
        <Image src={"/logo.png"} alt="logo" width={1024} height={1024} quality={100} className="size-8" />
        <b className="text-base text-secondary-500">True Tech</b>
      </span>
      <aside className="w-fit flex gap-4">
        <HeaderMenu/>
          
      </aside>
    </header>
  )
}