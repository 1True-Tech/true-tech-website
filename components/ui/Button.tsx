import React from "react";
import clsx from "clsx";

const styling = {
  base: "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 !outline-none !ring-0 shadow-lg font-poppins",
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

    primary:
      "bg-[var(--primary)] text-white border border-[var(--primary)] " +
      "hover:bg-[var(--primary-500)] hover:text-[var(--primary)] active:scale-95 " +
      "shadow-[0_4px_24px_0_rgba(10,31,68,0.25)] backdrop-blur-[6px] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit before:opacity-50 before:pointer-events-none",

    link:
      "bg-transparent border-none text-[var(--secondary)] underline underline-offset-4 " +
      "hover:text-[var(--secondary-500)] active:scale-95",

    glass:
      "bg-white/20 border border-white/30 text-[var(--foreground)] backdrop-blur-[8px] " +
      "hover:bg-white/30 hover:text-[var(--secondary-500)] active:scale-95 " +
      "shadow-[0_4px_20px_rgba(0,0,0,0.1)]",

    danger:
      "bg-red-500 text-white border border-red-600 " +
      "hover:bg-red-600 hover:border-red-700 active:scale-95 " +
      "shadow-[0_4px_20px_rgba(255,0,0,0.25)] backdrop-blur-[6px] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit before:opacity-40 before:pointer-events-none",

    success:
      "bg-green-500/80 text-white border border-green-600/60 " +
      "hover:bg-green-600/90 active:scale-95 " +
      "backdrop-blur-[6px] shadow-[0_4px_20px_rgba(34,197,94,0.25)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit before:opacity-50 before:pointer-events-none",

    warning:
      "bg-yellow-400/80 text-black border border-yellow-500/60 " +
      "hover:bg-yellow-500/90 active:scale-95 " +
      "backdrop-blur-[6px] shadow-[0_4px_20px_rgba(250,204,21,0.25)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit before:opacity-50 before:pointer-events-none",

    subtle:
      "bg-[var(--color-neutral-100)]/60 text-[var(--color-neutral-700)] border border-[var(--color-neutral-200)] " +
      "hover:bg-[var(--color-neutral-200)] active:scale-95 " +
      "backdrop-blur-[4px] shadow-[0_2px_6px_rgba(0,0,0,0.05)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:rounded-inherit before:opacity-40 before:pointer-events-none",

    frosted:
      "bg-white/10 text-[var(--foreground)] border border-white/20 " +
      "hover:bg-white/20 hover:text-[var(--secondary-500)] active:scale-95 " +
      "backdrop-blur-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:rounded-inherit before:opacity-30 before:pointer-events-none",

    lightHover:
      "bg-transparent text-[var(--foreground)] border border-transparent " +
      "hover:bg-[var(--primary-500)]/30 hover:text-[var(--secondary-500)] active:scale-95 " +
      "backdrop-blur-[2px] shadow-[0_1px_8px_rgba(0,0,0,0.05)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:rounded-inherit before:opacity-20 before:pointer-events-none",

    accentIcon:
      "bg-[var(--primary)] text-white border border-[var(--primary)] " +
      "hover:bg-[var(--primary-500)]/80 hover:text-[var(--secondary-500)] active:scale-90 " +
      "backdrop-blur-[6px] shadow-[0_4px_20px_rgba(10,31,68,0.25)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit before:opacity-50 before:pointer-events-none",

    destructiveOutline:
      "bg-transparent text-red-500 border border-red-500 " +
      "hover:bg-red-500 hover:text-white active:scale-95 " +
      "backdrop-blur-[4px] shadow-[0_2px_12px_rgba(255,0,0,0.1)] " +
      "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:rounded-inherit before:opacity-30 before:pointer-events-none",
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof defaultVariants;
  rounded?: keyof typeof styling.rounded;
  size?: keyof typeof styling.size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  options?: {
    background?: string;
    border?: string;
    text?: string;
    hoverBg?: string;
    hoverText?: string;
    blur?: string;
    shadow?: string;
    beforeOpacity?: string;
  };
}

const defaultVariants = {
  fill: "",
  outline: "",
  ghost: "",
  secondary: "",
  primary: "",
  link: "",
  glass: "",
  danger: "",
  success: "",
  warning: "",
  subtle: "",
  frosted: "",
  lightHover: "",
  accentIcon: "",
  destructiveOutline: "",
};

function buildVariantStyle(
  variant: keyof typeof styling.variants,
  options?: ButtonProps["options"]
): string {
  if (!options) return styling.variants[variant] || "";

  const {
    background = "bg-[var(--secondary)]",
    border = "border border-[var(--secondary)]",
    text = "text-white",
    hoverBg = "hover:bg-[var(--secondary-500)]",
    hoverText = "hover:text-[var(--secondary)]",
    blur = "backdrop-blur-[6px]",
    shadow = "shadow-[0_4px_24px_rgba(0,0,0,0.1)]",
    beforeOpacity = "before:opacity-40",
  } = options;

  return clsx(
    background,
    border,
    text,
    hoverBg,
    hoverText,
    blur,
    shadow,
    "active:scale-95",
    "relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-inherit",
    `before:pointer-events-none ${beforeOpacity}`
  );
}

export default function Button({
  variant = "fill",
  rounded = "full",
  size = "md",
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  options,
  ...props
}: ButtonProps) {
  const onlyIcon =
    !children && ((leftIcon && !rightIcon) || (!leftIcon && rightIcon));

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
        buildVariantStyle(variant, options),
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
          {children && (
            <span className="flex items-center mt-0.5">{children}</span>
          )}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}


