"use client";
import { ExtendedElement } from "@/types/index.";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import Icons from "./ui/Icons";

type Props = {
  image: string;
  member_name: string;
  member_title: string;
  description: string;
} & ExtendedElement;

export default function TeamMemberCard({
  image,
  member_name,
  member_title,
  description,
  className,
  ...props
}: Props) {
  return (
    <article
      {...props}
      className={clsx(
        "w-[90vw] md:w-[80%] max-w-sm h-fit p-4 shrink-0 flex flex-col gap-3 relative border-2 border-primary-500 shadow-md shadow-primary/10 duration-300 rounded-md border-l-8",
        className
      )}
    >
      {/* image */}
      <div className="w-full h-[40vh] md:h-[30vh] overflow-hidden rounded-sm shrink-0 flex items-center justify-center">
        <Image
          src={image}
          alt={`${member_name} image`}
          width={200}
          height={100}
          priority={false}
          quality={50}
          className="size-full object-cover object-center"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        {/* title */}
        <strong className="text-primary w-full text-base md:text-lg font-bold leading-[160%]">
          {member_name}
        </strong>
        <strong className="text-primary w-full text-xs md:text-sm font-semibold leading-[160%]">
          {member_title}
        </strong>
        {/* description */}
        <p className="text-neutral-900 mt-1 text-xs md:text-sm leading-[160%]">
          {description}
        </p>

        <div className="w-fit flex gap-2 mt-3">
          <Link href="#">
          <Button variant="primary" rightIcon={<Icons icon_name="twitter_logo" weight="fill" />} />
          </Link>
          <Link href="#">
          <Button variant="primary" rightIcon={<Icons icon_name="instagram_logo" weight="fill" />} />
          </Link>
        </div>
      </div>
    </article>
  );
}
