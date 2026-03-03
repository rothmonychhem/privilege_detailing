"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = { src: string; alt: string; caption: string };

export default function ServiceSlideshow() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/slides/slide1.jpg",
        alt: "Interior detailing result",
        caption: "Interior detailing — spotless, fresh, and comfortable.",
      },
      {
        src: "/slides/slide2.jpg",
        alt: "Exterior wash and shine",
        caption: "Exterior wash — clean finish with a deep shine.",
      },
      {
        src: "/slides/slide3.jpg",
        alt: "Before and after detailing",
        caption: "Before & after — visible results you can trust.",
      },
      {
        src: "/slides/slide4.jpg",
        alt: "Customer satisfaction",
        caption: "Satisfaction first — reliable, on-time service.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  const active = slides[index];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="relative aspect-[16/9]">
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm md:text-base text-zinc-100 font-medium">
                {active.caption}
              </p>
              <p className="mt-1 text-xs text-zinc-300">
                Mobile detailing in Laval & Greater Montréal
              </p>
            </div>
          </div>

          {/* Right side: dots + small text */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Results that speak for themselves
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Interior, exterior, full details — clean work, fair prices, and reliable service.
              </p>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-8 bg-white" : "w-2.5 bg-zinc-600 hover:bg-zinc-400",
                  ].join(" ")}
                />
              ))}
            </div>

            {/* Quick proof points */}
            <div className="grid gap-2 text-sm text-zinc-200">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-3">
                ✅ Professional finish, every time
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-3">
                ✅ On-call service (we come to you)
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-3">
                ✅ Trusted by local customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}