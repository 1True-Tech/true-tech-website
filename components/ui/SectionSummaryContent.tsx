import { ExtendedElement } from "@/types/index.";
import clsx from "clsx";
import React from "react";

type Props = {};

export function SectionTagline({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) {
  return (
    <h2
      {...props}
      className={clsx(
        "w-fit relative font-bold text-primary before:absolute before:w-[calc((100%/2)-2dvw)] leading-[140%] before:h-[2px] before:bg-secondary before:rounded-full before:bottom-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionHeadline({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) {
  return (
    <h3
      {...props}
      className={clsx(
        "w-fit relative font-bold text-xl sm:text-3xl lg:text-5xl leading-[140%] text-secondary",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function SectionSummary({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) {
  return (
    <p
      {...props}
      className={clsx(
        "w-fit relative font-normal text-sm sm:text-base leading-[160%] text-neutral-900",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  className,
  children,
  ...props
}: ExtendedElement) {
  return (
    <section
      {...props}
      className={clsx("relative px-4 sm:px-8 md:px-12 lg:px-16", className)}
    >
      {children}
    </section>
  );
}
