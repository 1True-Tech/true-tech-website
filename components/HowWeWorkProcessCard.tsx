import { ExtendedElement } from "@/types/index.";
import clsx from "clsx";
import Icons, { icon_name } from "./ui/Icons";

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
  return (
    <article
      {...props}
      className={clsx(
        "flex flex-col gap-3 duration-500",
        "not-last:[--last-color:var(--color-primary))]",
        "not-last:[--last-height:100%]",
        "last:[--last-height:0%]",
        "last:[--last-color:transparent]",

        className
      )}
    >
      {/* heading */}
      <div className="w-full flex gap-3 items-center">
        {/* icon */}
        <Icons
          icon_name={icon_name}
          size={32}
          className="text-secondary"
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
            "w-full h-full pointer-events-none flex items-center justify-center"
          )}
        >
          <span
            className={clsx("w-0.5 rounded-full h-[var(--last-height)] bg-[var(--last-color)] duration-500")}
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
