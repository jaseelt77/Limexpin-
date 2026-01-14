"use client";

import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition",
        variant === "primary" &&
          "bg-brand-primary text-white hover:bg-brand-accent/90 hover:text-black",
        variant === "outline" &&
          "border border-white text-white hover:bg-white hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
}
