import React from "react";
import clsx from "clsx";

// Uses your theme variables and a more "liquid glass" Apple-like look
const styling = {
  base:
    "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 !outline-none !ring-0 shadow-lg font-poppins",
  variants: {
    fill:
      "bg-gradient-to-br from-[var(--secondary-500)] via-[var(--secondary)] to-[var(--secondary-500)] text-white border border-[var(--secondary-500)] " +
      "hover:from-[var(--secondary)] hover:to-[var(--secondary)] active:scale-95 " +
      "backdrop-blur-[6px] bg-opacity-90 " +
      "shadow-[0_4px_24px_0_rgba(41,98,255,0.25)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/40 before:rounded-inherit before:opacity-70 before:pointer-events-none " +
      "after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-1/3 after:bg-white/60 after:blur-[6px] after:rounded-b-full after:opacity-60 after:pointer-events-none",
    outline:
      "bg-white/60 border border-[var(--secondary-500)] text-[var(--secondary)] " +
      "hover:bg-[var(--primary-500)]/80 hover:text-[var(--secondary-500)] active:scale-95 " +
      "backdrop-blur-[4px] shadow-[0_2px_12px_0_rgba(41,98,255,0.10)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit before:opacity-40 before:pointer-events-none",
    ghost:
      "bg-transparent border border-transparent text-[var(--secondary)] " +
      "hover:bg-[var(--primary-500)]/60 hover:text-[var(--secondary-500)] active:scale-95",
    secondary:
      "bg-gradient-to-br from-[var(--color-neutral-200)] via-[var(--color-neutral-100)] to-[var(--color-neutral-300)] text-[var(--color-neutral-900)] border border-[var(--color-neutral-300)] " +
      "hover:from-[var(--color-neutral-300)] hover:to-[var(--color-neutral-400)] active:scale-95 " +
      "backdrop-blur-[4px] shadow-[0_2px_12px_0_rgba(180,180,180,0.10)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit before:opacity-50 before:pointer-events-none",
  },
  rounded: {
    full: "rounded-full",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "rounded-none",
  },
  size: {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
    iconSm: "w-8 h-8 p-0",
    iconMd: "w-10 h-10 p-0",
    iconLg: "w-12 h-12 p-0",
  },
};

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof styling.variants;
  rounded?: keyof typeof styling.rounded;
  size?: keyof typeof styling.size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function CustomButton({
  variant = "fill",
  rounded = "full",
  size = "md",
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: CustomButtonProps) {
  // Only icon, no children
  const onlyIcon =
    !children &&
    ((leftIcon && !rightIcon) || (!leftIcon && rightIcon));

  // Choose icon size class
  let iconSizeClass = "";
  if (onlyIcon) {
    if (size === "sm") iconSizeClass = styling.size.iconSm;
    else if (size === "lg") iconSizeClass = styling.size.iconLg;
    else iconSizeClass = styling.size.iconMd;
  }

  return (
    <button
      className={clsx(
        styling.base,
        styling.variants[variant],
        onlyIcon ? styling.rounded.full : styling.rounded[rounded],
        onlyIcon ? iconSizeClass : styling.size[size],
        {
          "flex gap-2": !onlyIcon && (rightIcon || leftIcon),
        },
        className
      )}
      {...props}
    >
      {onlyIcon ? (
        leftIcon || rightIcon
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children && <span className="flex items-center mt-0.5">{children}</span>}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}