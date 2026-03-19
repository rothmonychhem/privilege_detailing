import Link from "next/link";

const forfaits = [
  {
    name: "Basic",
    description: [
      "Lavage intérieur",
      "Nettoyage extérieur",
      "Vacuum intérieur",
      "Roues et vitres",
    ],
    prices: [
      { label: "Auto", value: "$119" },
      { label: "SUV / Truck", value: "$139" },
      { label: "Van / XL", value: "$159" },
    ],
  },
  {
    name: "Standard",
    description: [
      "Tout dans Basic",
      "Shampoo sièges et tapis",
      "Lavage intérieur profond",
      "Roues brillantes",
    ],
    prices: [
      { label: "Auto", value: "$229" },
      { label: "SUV / Truck", value: "$259" },
      { label: "Van / XL", value: "$289" },
    ],
  },
  {
    name: "Premium",
    description: [
      "Lavage Standard",
      "Polissage 1 step",
      "Extraction d’odeur",
      "Décontamination de peinture",
      "Cire de protection + moteur",
    ],
    prices: [
      { label: "Auto", value: "$349" },
      { label: "SUV / Truck", value: "$389" },
      { label: "Van / XL", value: "$429" },
    ],
  },
];

const optionsAjoutees = [
  "Extraction poils d’animaux — $40 ~ $60",
  "Extraction de tâches — $40 ~ $60",
  "Nettoyage moteur profond — $60 ~ $100",
  "Ceramic de peinture — $80 ~ $120",
  "Polissage des phares — $50 ~ $80",
  "Extraction de sel — $80 ~ $150",
];

export default function PricingFRPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="max-w-3xl">
          <p className="text-sm text-red-400 uppercase tracking-[0.2em]">
            Esthétique automobile
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Prix & Forfaits
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Des prix clairs pour auto, SUV, camion, van et véhicules XL.
            Choisissez le forfait qui vous convient et prenez rendez-vous.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/fr/contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-200 transition"
            >
              Prendre rendez-vous
            </Link>

            <Link
              href="/fr"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition"
            >
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-3">
          {forfaits.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {pkg.name}
                </h2>
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 border border-red-500/20">
                  Forfait
                </span>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                {pkg.description.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <div className="mt-6 space-y-3 border-t border-zinc-800 pt-5">
                {pkg.prices.map((price) => (
                  <div
                    key={price.label}
                    className="flex items-center justify-between rounded-2xl bg-zinc-950/80 px-4 py-3 border border-zinc-800"
                  >
                    <span className="text-zinc-300">{price.label}</span>
                    <span className="font-semibold text-white">{price.value}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/fr/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
              >
                Réserver ce forfait
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Options ajoutées</h2>

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
            * Les prix peuvent varier selon la taille et l’état du véhicule.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-zinc-800 bg-white text-zinc-900 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Prêt à prendre rendez-vous ?
            </h3>
            <p className="mt-2 text-zinc-700">
              Remplissez le formulaire et nous vous répondrons rapidement.
            </p>
          </div>

          <Link
            href="/fr/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </main>
  );
}