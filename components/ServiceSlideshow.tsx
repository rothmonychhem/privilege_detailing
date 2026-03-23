"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Locale = "en" | "fr";
type Slide = { src: string; alt: string; caption: string };

export default function ServiceSlideshow({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const isFR = locale === "fr";
  const slides: Slide[] = useMemo(
    () =>
      isFR
        ? [
            {
              src: "/slides/slide1.jpg",
              alt: "Resultat esthetique interieur",
              caption: "Nettoyage interieur propre, frais et plus confortable.",
            },
            {
              src: "/slides/slide2.jpg",
              alt: "Lavage exterieur",
              caption: "Lavage exterieur avec une finition propre et brillante.",
            },
            {
              src: "/slides/slide3.jpg",
              alt: "Avant apres esthetique",
              caption: "Des resultats visibles qui donnent confiance au service.",
            },
            {
              src: "/slides/slide4.jpg",
              alt: "Satisfaction client",
              caption: "Un service mobile plus soigne et plus professionnel.",
            },
          ]
        : [
            {
              src: "/slides/slide1.jpg",
              alt: "Interior detailing result",
              caption: "Interior detailing, spotless, fresh, and comfortable.",
            },
            {
              src: "/slides/slide2.jpg",
              alt: "Exterior wash and shine",
              caption: "Exterior wash with a clean finish and a deeper shine.",
            },
            {
              src: "/slides/slide3.jpg",
              alt: "Before and after detailing",
              caption: "Visible before-and-after results that feel worth booking.",
            },
            {
              src: "/slides/slide4.jpg",
              alt: "Customer satisfaction",
              caption: "Reliable mobile detailing with a more polished experience.",
            },
          ],
    [isFR]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[index];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4 md:p-6">
        <div className="absolute inset-0">
          <Image
            src="/detail_back.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.16]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_30%),linear-gradient(to_bottom,rgba(9,9,11,0.2),rgba(9,9,11,0.45))]" />

        <div className="relative grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-center">
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

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm font-medium text-zinc-100 md:text-base">
                {active.caption}
              </p>
              <p className="mt-1 text-xs text-zinc-300">
                {isFR
                  ? "Esthetique mobile a Laval et dans le Grand Montreal"
                  : "Mobile detailing in Laval and Greater Montreal"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {isFR
                  ? "Des resultats qui parlent d'eux-memes"
                  : "Results that speak for themselves"}
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                {isFR
                  ? "Travail interieur, exterieur et complet avec une presentation propre et professionnelle."
                  : "Interior, exterior, and full-detail work with a clean finish and professional presentation."}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={
                    isFR
                      ? `Aller a la slide ${i + 1}`
                      : `Go to slide ${i + 1}`
                  }
                  className={[
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-8 bg-white" : "w-2.5 bg-zinc-600 hover:bg-zinc-400",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="grid gap-2 text-sm text-zinc-200">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-3">
                <Check className="mr-2 inline h-4 w-4 text-emerald-400" />
                {isFR
                  ? "Une finition professionnelle a chaque rendez-vous"
                  : "Professional finish, every time"}
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-3">
                <Check className="mr-2 inline h-4 w-4 text-emerald-400" />
                {isFR
                  ? "Un service mobile qui se rend a vous"
                  : "On-call service that comes to you"}
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-3">
                <Check className="mr-2 inline h-4 w-4 text-emerald-400" />
                {isFR
                  ? "Plus de details sur la page des prix"
                  : "A more detailed look on the pricing page"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
