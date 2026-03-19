import Link from "next/link";
import { Zap, DollarSign, ShieldCheck } from "lucide-react";
import ServiceSlideshow from "../components/ServiceSlideshow";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <p className="text-sm text-zinc-400">
              Mobile Mechanic & Detailing • Montreal • Brossard • Longeuil • Laval • Boucherville
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Quick, affordable, reliable detailing and mechanical services — right at your doorstep.
            </h1>

            <p className="mt-4 text-zinc-300 leading-relaxed">
              We come to you. From daily drivers to SUVs and luxury vehicles, we
              deliver a clean you can feel — fast booking, transparent pricing,
              and professional results.
            </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-200 transition"
                >
                  Contact us
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition"
                >
                  View Services and Prices
                </Link>
              </div>

            {/* ICON CARDS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm">
              <FeatureCard
                title="Quick"
                subtitle="Fast turnaround"
                icon={<Zap className="h-5 w-5 text-yellow-400" />}
              />
              <FeatureCard
                title="Affordable"
                subtitle="Fair pricing"
                icon={<DollarSign className="h-5 w-5 text-green-400" />}
              />
              <FeatureCard
                title="Reliable"
                subtitle="On-time service"
                icon={<ShieldCheck className="h-5 w-5 text-blue-400" />}
              />
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-sm text-zinc-400">On-call service</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                Interior & Exterior packages
              </div>
              <div className="mt-3 text-zinc-300">
                We service sedans, coupes, SUVs, trucks, and more.
              </div>

              <div className="mt-6 grid gap-3">
                <ProofPoint text="Laval + surrounding areas" />
                <ProofPoint text="Greater Montréal region" />
                <ProofPoint text="Flexible scheduling" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDESHOW */}
      <ServiceSlideshow />

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
        <p className="mt-2 text-zinc-400">
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
        <div className="rounded-3xl border border-zinc-800 bg-white text-zinc-900 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready to book?</h3>
            <p className="mt-2 text-zinc-700">
              Tell us your vehicle and preferred contact method. We’ll reply fast.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            Contact us
          </Link>
        </div>
      </section>
       <SpeedInsights/>
    </main>
  );
}

function FeatureCard({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 flex items-start gap-3 hover:bg-zinc-900/70 transition">
      <div className="p-2 rounded-xl bg-zinc-800">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-zinc-400 mt-1">{subtitle}</div>
      </div>
    </div>
  );
}

function ProofPoint({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm">
      ✅ {text}
    </div>
  );
}

function ServiceCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="font-semibold text-lg">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}