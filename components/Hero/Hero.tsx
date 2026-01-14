"use client";

import Link from "next/link";
import Button from "../UI/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  align?: "left" | "center";
  bannerImage?: string; // 👈 NEW
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  align = "left",
  bannerImage,
}: HeroProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section
      className="relative w-full text-brand-text"
      style={
        bannerImage
          ? {
              backgroundImage: `url(${bannerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { backgroundColor: "#262626" }
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className={`flex flex-col gap-6 ${alignment}`}>
          {subtitle && (
            <span className="text-sm uppercase tracking-widest text-brand-accent">
              {subtitle}
            </span>
          )}

          <h1 className="text-h1 text-white max-w-3xl">{title}</h1>

          {description && (
            <p className="text-lg max-w-2xl text-brand-text/80">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-4 flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button variant="primary">
                    {primaryCta.label}
                  </Button>
                </Link>
              )}

              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button variant="outline">
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
