import { Droplets, Wrench } from "lucide-react";
import Link from "next/link";

const servicesEsthetique = [
  "Lavage à la main",
  "Roues et pneus",
  "Aspirateur intérieur",
  "Nettoyage rapide",
  "Vitres",
  "Shampoo des sièges",
  "Nettoyage des tapis",
  "Nettoyage intérieur profond",
  "Brillance des pneus",
  "Polissage léger",
  "Protection cire / scellant",
  "Décontamination à la barre d'argile",
  "Extraction d'odeur",
  "Nettoyage du compartiment moteur",
];

const forfaitsEsthetique = [
  {
    name: "Basic",
    included: [
      "Lavage à la main",
      "Roues et pneus",
      "Aspirateur intérieur",
      "Nettoyage rapide",
      "Vitres",
    ],
    prices: [
      { label: "Auto", value: "$119" },
      { label: "SUV / Truck", value: "$139" },
      { label: "Van / XL", value: "$159" },
    ],
  },
  {
    name: "Standard",
    included: [
      "Lavage à la main",
      "Roues et pneus",
      "Aspirateur intérieur",
      "Nettoyage rapide",
      "Vitres",
      "Shampoo des sièges",
      "Nettoyage des tapis",
      "Nettoyage intérieur profond",
      "Brillance des pneus",
    ],
    prices: [
      { label: "Auto", value: "$229" },
      { label: "SUV / Truck", value: "$259" },
      { label: "Van / XL", value: "$289" },
    ],
  },
  {
    name: "Premium",
    included: servicesEsthetique,
    prices: [
      { label: "Auto", value: "$349" },
      { label: "SUV / Truck", value: "$389" },
      { label: "Van / XL", value: "$429" },
    ],
  },
];

const optionsAjoutees = [
  "Extraction poils d'animaux — $40 ~ $60",
  "Extraction de taches — $40 ~ $60",
  "Nettoyage moteur profond — $60 ~ $100",
  "Ceramic de peinture — $80 ~ $120",
  "Polissage des phares — $50 ~ $80",
  "Extraction de sel — $80 ~ $150",
];

const mecaniqueHighlights = [
  {
    title: "Spéciaux changement d'huile",
    lines: [
      "Changement d'huile régulier — $70",
      "Changement d'huile synthétique — $110",
      "Huile supplémentaire au-delà de 5L: + $20",
    ],
  },
  {
    title: "Inspection avant vente / achat",
    lines: [
      "Inspection complète du véhicule avant l'achat ou la vente",
      "Tarif fixe — $110",
    ],
  },
];

const categoriesMecaniques = [
  {
    title: "Freins",
    items: [
      "Remplacement des plaquettes",
      "Inspection des disques",
      "Entretien du système de freinage",
    ],
  },
  {
    title: "Suspension",
    items: [
      "Remplacement des amortisseurs",
      "Inspection de la suspension",
      "Réparation du confort de conduite",
    ],
  },
  {
    title: "Diagnostic",
    items: [
      "Diagnostic des voyants moteur",
      "Détection des problèmes moteur",
      "Dépannage mobile",
    ],
  },
];

export default function PricingFRPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">
            Services mobiles
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Esthétique & mécanique
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <SectionHeader
          eyebrow="Esthétique"
          title="Comparer les forfaits"
          body="Les services non inclus sont barrés en rouge pour rendre les différences entre forfaits beaucoup plus évidentes."
        />

        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-zinc-800/70 bg-zinc-900/25 p-6 md:p-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <Droplets className="absolute -left-10 top-6 h-40 w-40 text-red-500/8" />
            <Droplets className="absolute right-6 bottom-4 h-56 w-56 text-white/4" />
          </div>

          <div className="relative grid gap-6 md:grid-cols-3">
            {forfaitsEsthetique.map((pkg) => (
              <article
                key={pkg.name}
                className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
              >
                <div className="flex items-center justify-center gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {pkg.name}
                  </h2>
                  <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                    Forfait
                  </span>
                </div>

                <ul className="mt-5 grid gap-2 text-sm">
                  {servicesEsthetique.map((service) => {
                    const included = pkg.included.includes(service);

                    return (
                      <li
                        key={service}
                        className={
                          included
                            ? "text-zinc-200"
                            : "text-zinc-500 line-through decoration-red-500 decoration-2"
                        }
                      >
                        {included ? (
                          <span>
                            <span className="mr-2 font-semibold text-emerald-400">
                              ✓
                            </span>
                            {service}
                          </span>
                        ) : (
                          service
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 space-y-3 border-t border-zinc-800 pt-5">
                  {pkg.prices.map((price) => (
                    <div
                      key={price.label}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-4"
                    >
                      <div className="text-sm text-zinc-400">{price.label}</div>
                      <div className="mt-1 text-3xl font-bold tracking-tight text-white">
                        {price.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/fr/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600"
                >
                  Réserver ce forfait
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            Options ajoutées
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {optionsAjoutees.map((addon) => (
              <div
                key={addon}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300"
              >
                {addon}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            * Les prix peuvent varier selon la taille et l&apos;état du véhicule.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <SectionHeader
          eyebrow="Mécanique"
          title="Services mécaniques mobiles"
          body="Une section dédiée rend plus évident que vous pouvez réserver de la mécanique en plus de l'esthétique."
        />

        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-zinc-800/70 bg-zinc-900/25 p-6 md:p-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <Wrench className="absolute -right-8 top-8 h-44 w-44 rotate-[18deg] text-red-500/8" />
            <Wrench className="absolute left-4 bottom-6 h-52 w-52 -rotate-[16deg] text-white/4" />
          </div>

          <div className="relative grid gap-6 md:grid-cols-2">
            {mecaniqueHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <div className="mx-auto mt-4 h-px w-24 bg-red-500" />
                <ul className="mt-5 grid gap-3 text-zinc-300">
                  {item.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="relative mt-6 grid gap-6 md:grid-cols-3">
            {categoriesMecaniques.map((category) => (
              <article
                key={category.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {category.title}
                </h3>
                <div className="mx-auto mt-4 h-px w-20 bg-red-500" />
                <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col gap-6 rounded-3xl border border-red-500/30 bg-red-500 p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Prêt à prendre rendez-vous ?
            </h3>
            <p className="mt-2 text-red-50/90">
              Remplissez le formulaire et nous vous répondrons rapidement.
            </p>
          </div>

          <Link
            href="/fr/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-900"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-base font-semibold uppercase tracking-[0.28em] text-red-400 md:text-lg">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-zinc-400">{body}</p>
    </div>
  );
}
