import clsx from "clsx";
import React from "react";
import Icons, { icon_name } from "./ui/Icons";

type Props = {
    icon_name:icon_name;
    title:string;
    description:string;
}&React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLElement
>;

export default function AboutCard({ icon_name,title,description, className, ...props }: Props) {
  return (
    <article {...props} className={clsx("bg-secondary-100 rounded-md shadow-md flex flex-col gap-4 py-10 px-5 items-center text-center justify-between", className)}>
        {/* icon */}
        <Icons icon_name={icon_name} size={32} className="text-primary" />
        {/* title */}
        <h5 className="text-primary text-sm sm:text-base font-bold leading-[160%]">{title}</h5>
        {/* description */}
        <p className="text-neutral-900 text-xs sm:text-sm leading-[160%]">{description}</p>

    </article>
  );
}
