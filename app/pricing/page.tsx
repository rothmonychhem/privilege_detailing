import { Droplets, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const detailingServices = [
  "Hand wash",
  "Wheels & tires",
  "Interior vacuum",
  "Wipe down",
  "Windows",
  "Seat shampoo",
  "Floor mat cleaning",
  "Interior deep clean",
  "Tire shine",
  "Light polish",
  "Wax / sealant protection",
  "Clay bar treatment",
  "Odor removal",
  "Engine bay wipe",
];

const detailingPackages = [
  {
    name: "Basic",
    included: [
      "Hand wash",
      "Wheels & tires",
      "Interior vacuum",
      "Wipe down",
      "Windows",
    ],
    prices: [
      { label: "Car", value: "$119" },
      { label: "SUV / Truck", value: "$139" },
      { label: "Van / XL", value: "$159" },
    ],
  },
  {
    name: "Standard",
    included: [
      "Hand wash",
      "Wheels & tires",
      "Interior vacuum",
      "Wipe down",
      "Windows",
      "Seat shampoo",
      "Floor mat cleaning",
      "Interior deep clean",
      "Tire shine",
    ],
    prices: [
      { label: "Car", value: "$229" },
      { label: "SUV / Truck", value: "$259" },
      { label: "Van / XL", value: "$289" },
    ],
  },
  {
    name: "Premium",
    included: detailingServices,
    prices: [
      { label: "Car", value: "$349" },
      { label: "SUV / Truck", value: "$389" },
      { label: "Van / XL", value: "$429" },
    ],
  },
];

const addons = [
  "Pet hair removal — $40 ~ $60",
  "Stain removal — $40 ~ $60",
  "Engine bay deep clean — $60 ~ $100",
  "Ceramic coating — $80 ~ $120",
  "Headlight restoration — $50 ~ $80",
  "Salt extraction — $80 ~ $150",
];

const mechanicHighlights = [
  {
    title: "Oil change specials",
    lines: [
      "Regular oil change — $70",
      "Synthetic oil change — $110",
      "Additional oil over 5L: + $20",
    ],
  },
  {
    title: "Pre-sale inspection",
    lines: [
      "Full vehicle condition check before buying or selling",
      "Flat rate — $110",
    ],
  },
];

const mechanicCategories = [
  {
    title: "Brakes",
    items: [
      "Brake pad replacement",
      "Rotor inspection",
      "Brake system service",
    ],
  },
  {
    title: "Suspension",
    items: [
      "Shock replacement",
      "Suspension inspection",
      "Ride quality repair",
    ],
  },
  {
    title: "Diagnostics",
    items: [
      "Warning light diagnosis",
      "Performance issue detection",
      "Mobile troubleshooting",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">
            Mobile Services
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Detailing & Mechanic Pricing
          </h1>
        </div>
      </section>

      <section id="detailing" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-10">
        <SectionHeader
          eyebrow="Detailing"
          title="Compare detailing packages"
          body="Unavailable services are crossed out in red so the package differences are obvious at a glance."
        />

        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-zinc-800/70 bg-zinc-900/25 p-6 md:p-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <Image
              src="/detail_back.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.15]"
            />
            <Droplets className="absolute -left-10 top-6 h-40 w-40 text-red-500/10" />
            <Droplets className="absolute right-6 bottom-4 h-56 w-56 text-white/5" />
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.18),rgba(9,9,11,0.42))]" />

          <div className="relative grid gap-6 md:grid-cols-3">
          {detailingPackages.map((pkg) => (
            <article
              key={pkg.name}
              className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
            >
              <div className="flex items-center justify-center gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {pkg.name}
                </h2>
                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                  Package
                </span>
              </div>

              <ul className="mt-5 grid gap-2 text-sm">
                {detailingServices.map((service) => {
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
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600"
              >
                Book this package
              </Link>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section id="mechanic" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-10">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            Add-ons
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {addons.map((addon) => (
              <div
                key={addon}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300"
              >
                {addon}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            * Prices may vary depending on vehicle size and condition.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <SectionHeader
          eyebrow="Mechanic"
          title="Mobile mechanic services"
          body="A separate mechanic section makes it clear that you can book maintenance, inspection, and diagnosis in addition to detailing."
        />

        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-zinc-800/70 bg-zinc-900/25 p-6 md:p-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <Image
              src="/mec_back.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.15]"
            />
            <Wrench className="absolute -right-8 top-8 h-44 w-44 rotate-[18deg] text-red-500/10" />
            <Wrench className="absolute left-4 bottom-6 h-52 w-52 -rotate-[16deg] text-white/5" />
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.18),rgba(9,9,11,0.42))]" />

          <div className="relative grid gap-6 md:grid-cols-2">
            {mechanicHighlights.map((item) => (
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
            {mechanicCategories.map((category) => (
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
              Ready to take an appointment?
            </h3>
            <p className="mt-2 text-red-50/90">
              Fill out the form and we&apos;ll get back to you quickly.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-900"
          >
            Take RDV now
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
      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-[1.75rem]">
        {title}
      </h2>
      <p className="mt-3 text-zinc-400">{body}</p>
    </div>
  );
}
