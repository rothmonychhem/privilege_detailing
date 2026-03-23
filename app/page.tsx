import { ArrowRight, Droplets, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MechanicalSlideshow from "../components/MechanicalSlideshow";
import ServiceSlideshow from "../components/ServiceSlideshow";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/45 p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Image
                src="/logo.JPG"
                alt="EG Auto Pro"
                width={420}
                height={210}
                className="h-32 w-auto object-contain md:h-40"
                priority
              />
            </div>

            <p className="text-sm uppercase tracking-[0.26em] text-red-400">
              Mobile Mechanic & Detailing
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-zinc-300">
              <LocationChip text="Montreal" />
              <LocationChip text="Brossard" />
              <LocationChip text="Longueuil" />
              <LocationChip text="Laval" />
              <LocationChip text="Boucherville" />
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          <ServicePathCard
            eyebrow="Detailing"
            title="Mobile detailing that starts broad and gets tailored when you need it"
            body="A cleaner-looking vehicle, straightforward package options, and professional on-site service."
            icon={<Droplets className="h-6 w-6 text-red-400" />}
            href="/pricing#detailing"
            cta="See detailing pricing"
          />
          <ServicePathCard
            eyebrow="Mechanic"
            title="Mobile mechanic help for the maintenance and checks people ask for most"
            body="Routine service, inspections, and diagnostics without sending you through a long process first."
            icon={<Wrench className="h-6 w-6 text-red-400" />}
            href="/pricing#mechanic"
            cta="Explore mechanic pricing"
          />
        </div>
      </section>

      <ServiceSlideshow />
      <MechanicalSlideshow />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <FocusCard
            title="Detailing packages"
            body="Simple package structure with room to move from basic care to a more complete finish."
            linkText="Go to pricing"
            href="/pricing#detailing"
          />
          <FocusCard
            title="Mechanic support"
            body="Oil changes, inspections, brakes, suspension, and diagnostics presented in a more direct way."
            linkText="See services"
            href="/pricing#mechanic"
          />
          <FocusCard
            title="Custom requests"
            body="If you already know what you want, the contact form lets you point us to detailing, mechanic work, or both."
            linkText="Start your request"
            href="/contact"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-red-400">
              What We Believe
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              We want good service to feel clear, respectful, and worth trusting
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              Our goal is to deliver strong support and quality work without
              making the process confusing. That means clear communication,
              realistic recommendations, fair pricing, and service that respects
              your time as much as your vehicle.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <BeliefCard
                title="Clear guidance"
                body="We explain the next step simply, whether you need detailing, mechanic work, or both."
              />
              <BeliefCard
                title="Reliable quality"
                body="We focus on work that looks good, functions properly, and feels professional from start to finish."
              />
              <BeliefCard
                title="Customer-first service"
                body="We aim to make the experience easier, more flexible, and more helpful than the usual process."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-red-500/25 bg-red-500/10 p-8 text-zinc-100 md:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm uppercase tracking-[0.24em] text-red-300">
              Ready When You Are
            </div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Book the next step only when you have enough information
            </h3>
            <p className="mt-3 text-zinc-300">
              Start broad on the homepage, compare pricing when you want more,
              then send the request when you are ready.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600"
              >
                Contact us
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Browse pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SpeedInsights />
    </main>
  );
}

function ServicePathCard({
  eyebrow,
  title,
  body,
  icon,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
      <div className="flex items-center justify-center gap-3">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3">
          {icon}
        </div>
        <div className="text-sm font-medium uppercase tracking-[0.22em] text-red-400">
          {eyebrow}
        </div>
      </div>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{body}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-red-300"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function FocusCard({
  title,
  body,
  linkText,
  href,
}: {
  title: string;
  body: string;
  linkText: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{body}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-red-400 transition hover:text-red-300"
      >
        {linkText}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function BeliefCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/55 p-6 text-center">
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{body}</p>
    </div>
  );
}

function LocationChip({ text }: { text: string }) {
  return (
    <div className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2">
      {text}
    </div>
  );
}
