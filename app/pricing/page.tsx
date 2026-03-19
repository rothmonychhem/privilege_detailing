import Link from "next/link";

const packages = [
  {
    name: "Basic",
    description: [
      "Hand Wash",
      "Wheels & Tires",
      "Interior Vacuum",
      "Wipe Down",
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
    description: [
      "All in Basic",
      "Seat Shampoo",
      "Floor Mat",
      "Interior Deep Clean",
      "Tire Shine",
    ],
    prices: [
      { label: "Car", value: "$229" },
      { label: "SUV / Truck", value: "$259" },
      { label: "Van / XL", value: "$289" },
    ],
  },
  {
    name: "Premium",
    description: [
      "All in Standard",
      "Light Polish",
      "Wax/Sealant Protection",
      "Clay Bar Treatment",
      "Odor Removal",
      "Engine Bay Wipe",
    ],
    prices: [
      { label: "Car", value: "$349" },
      { label: "SUV / Truck", value: "$389" },
      { label: "Van / XL", value: "$429" },
    ],
  },
];

const addons = [
  "Pet Hair Removal — $40 ~ $60",
  "Stain Removal — $40 ~ $60",
  "Engine Bay Deep Clean — $60 ~ $100",
  "Ceramic Coating — $80 ~ $120",
  "Headlight Restoration — $50 ~ $80",
  "Salt Extraction — $80 ~ $150",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="max-w-3xl">
          <p className="text-sm text-red-400 uppercase tracking-[0.2em]">
            Mobile Detailing
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Pricing & Packages
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Clear pricing for cars, SUVs, trucks, vans, and XL vehicles. Choose
            the package that fits your needs and book your appointment today.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-200 transition"
            >
              Take RDV now
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {pkg.name}
                </h2>
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 border border-red-500/20">
                  Package
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
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
              >
                Book this package
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Add-ons</h2>

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

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-zinc-800 bg-white text-zinc-900 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Ready to take an appointment?
            </h3>
            <p className="mt-2 text-zinc-700">
              Fill out the form and we’ll get back to you quickly.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            Take RDV now
          </Link>
        </div>
      </section>
    </main>
  );
}