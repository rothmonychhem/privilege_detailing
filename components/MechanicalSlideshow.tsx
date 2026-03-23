"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type MechanicSlide = {
  title: string;
  caption: string;
  points: string[];
  src: string;
};

type Locale = "en" | "fr";

export default function MechanicalSlideshow({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const isFR = locale === "fr";
  const slides: MechanicSlide[] = useMemo(
    () =>
      isFR
        ? [
            {
              title: "Entretien mobile",
              caption:
                "Un service mecanique de routine a votre emplacement, avec un delai rapide et une tarification plus simple.",
              points: [
                "Changements d'huile et entretien regulier",
                "Service sur place adapte a votre horaire",
              ],
              src: "/slides_mech/mec1.jpg",
            },
            {
              title: "Verification du vehicule",
              caption:
                "Des inspections utiles quand vous voulez mieux comprendre l'etat d'un vehicule avant la prochaine etape.",
              points: [
                "Verification avant achat ou avant vente",
                "Retour utile avant de vous engager",
              ],
              src: "/slides_mech/mec2.jpg",
            },
            {
              title: "Reparations et diagnostic",
              caption:
                "Du soutien pour les problemes courants, les voyants moteur et les soucis de conduite sans rendre le processus inutilement long.",
              points: [
                "Freins, suspension et voyants moteur",
                "Diagnostic clair et prochaine etape simple",
              ],
              src: "/slides_mech/mec3.jpg",
            },
          ]
        : [
            {
              title: "Mobile maintenance",
              caption:
                "Routine mechanical service at your location, with quick turnaround and straightforward pricing.",
              points: [
                "Oil changes and regular upkeep",
                "On-site service built around your schedule",
              ],
              src: "/slides_mech/mec1.jpg",
            },
            {
              title: "Vehicle checks",
              caption:
                "Practical inspections when you want a better feel for a vehicle before the next step.",
              points: [
                "Pre-sale and pre-purchase style checks",
                "Useful feedback before you commit",
              ],
              src: "/slides_mech/mec2.jpg",
            },
            {
              title: "Repairs and diagnostics",
              caption:
                "Support for common issues, warning lights, and drivability concerns without turning it into a long process.",
              points: [
                "Brakes, suspension, and warning lights",
                "Clear diagnosis and next-step guidance",
              ],
              src: "/slides_mech/mec3.jpg",
            },
          ],
    [isFR]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4800);

    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[index];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4 md:p-6">
        <div className="absolute inset-0">
          <Image
            src="/mec_back.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.16]"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%),linear-gradient(to_bottom,rgba(9,9,11,0.2),rgba(9,9,11,0.45))]"
        />

        <div className="relative grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-center">
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-red-400">
                {isFR ? "Mecanique mobile" : "Mobile Mechanic"}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
                {active.caption}
              </p>
            </div>

            <div className="grid gap-3 md:max-w-xl">
              {active.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/55 px-4 py-3 text-sm text-zinc-200"
                >
                  <Check className="mr-2 inline h-4 w-4 text-emerald-400" />
                  {point}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  onClick={() => setIndex(i)}
                  aria-label={
                    isFR
                      ? `Aller a la slide mecanique ${i + 1}`
                      : `Go to mechanic slide ${i + 1}`
                  }
                  className={[
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-8 bg-red-500" : "w-2.5 bg-zinc-600 hover:bg-zinc-400",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={isFR ? "/fr/pricing#mechanic" : "/pricing#mechanic"}
                className="inline-flex items-center justify-center rounded-2xl border border-red-500/30 bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600"
              >
                {isFR ? "Voir les prix mecanique" : "Explore mechanic pricing"}
              </Link>
              <Link
                href={isFR ? "/fr/pricing#detailing" : "/pricing#detailing"}
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
              >
                {isFR ? "Voir les prix esthetique" : "See detailing pricing"}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="relative aspect-[16/9] min-h-[320px]">
              <Image
                key={active.src}
                src={active.src}
                alt={active.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="rounded-2xl border border-zinc-800 bg-black/45 p-4 backdrop-blur-sm">
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-red-400">
                  {active.title}
                </div>
                <p className="mt-2 text-sm text-zinc-200">
                  {isFR
                    ? "Un service mecanique mobile avec une approche plus directe et pratique."
                    : "Mobile mechanic service with a more direct, practical feel."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
