import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-zinc-600">
              Mobile detailing • Laval & Greater Montréal
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Quick, affordable, reliable detailing — right at your doorstep.
            </h1>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              We come to you. From daily drivers to SUVs and luxury vehicles, we deliver a clean you can feel —
              fast booking, transparent pricing, and professional results.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800"
              >
                Get a quote
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium border border-zinc-200 hover:bg-zinc-50"
              >
                View services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Quick</div>
                <div className="text-zinc-600 mt-1">Fast turnaround</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Affordable</div>
                <div className="text-zinc-600 mt-1">Fair pricing</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Reliable</div>
                <div className="text-zinc-600 mt-1">On-time service</div>
              </div>
            </div>
          </div>

          {/* Simple “mock image” card (replace later with real photos) */}
          <div className="rounded-3xl border bg-zinc-50 p-6">
            <div className="rounded-2xl bg-white border p-6">
              <div className="text-sm text-zinc-600">On-call service</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                Interior & Exterior packages
              </div>
              <div className="mt-3 text-zinc-600">
                We service sedans, coupes, SUVs, trucks, and more.
              </div>
              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border bg-zinc-50 p-4 text-sm">
                  ✅ Laval + surrounding areas
                </div>
                <div className="rounded-xl border bg-zinc-50 p-4 text-sm">
                  ✅ Greater Montréal region
                </div>
                <div className="rounded-xl border bg-zinc-50 p-4 text-sm">
                  ✅ Flexible scheduling
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
        <p className="mt-2 text-zinc-600">
          Choose a package or request a custom quote.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="Interior Refresh"
            points={["Vacuum + wipe-down", "Windows", "Light stain treatment"]}
          />
          <ServiceCard
            title="Exterior Clean"
            points={["Hand wash", "Wheels + tires", "Dry + shine"]}
          />
          <ServiceCard
            title="Full Detail"
            points={["Interior deep clean", "Exterior wash", "Premium finish"]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border bg-zinc-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready to book?</h3>
            <p className="mt-2 text-white/80">
              Tell us your vehicle and preferred contact method. We’ll reply fast.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-100"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, points }) {
  return (
    <div className="rounded-3xl border p-6">
      <div className="font-semibold text-lg">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}