"use client";

import Image from "next/image";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
];

export default function BrandsMarquee() {
  return (
    <div className="w-full bg-brand-textBg py-12">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee 25s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-textBg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-textBg to-transparent z-10 pointer-events-none" />

        {/* Track - Marquee Animation */}
        <div className="marquee-track flex w-max gap-16 py-4">
          {[...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[140px]"
            >
              <Image
                src={logo}
                alt="Brand logo"
                width={140}
                height={50}
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
