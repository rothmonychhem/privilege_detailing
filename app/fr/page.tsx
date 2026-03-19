import Link from "next/link";
import ServiceSlideshow from "../../components/ServiceSlideshow";
import { Zap, DollarSign, ShieldCheck } from "lucide-react";

export default function HomeFR() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <p className="text-sm text-zinc-400">
              Esthétique mobile • Laval & Grand Montréal
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Esthétique auto rapide, abordable et fiable — directement chez vous.
            </h1>

            <p className="mt-4 text-zinc-300 leading-relaxed">
              On se déplace à votre domicile. De la voiture de tous les jours aux VUS et
              véhicules plus haut de gamme, on livre un résultat propre et professionnel —
              prise de rendez-vous rapide et prix transparents.
            </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-200 transition"
                >
                  Contactez-nous
                </Link>

                <Link
                  href="/fr/pricing"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition"
                >
                  Voir les Services & Prix
                </Link>
              </div>

            {/* ICON CARDS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm">
              <FeatureCard
                title="Rapide"
                subtitle="Service efficace"
                icon={<Zap className="h-5 w-5 text-yellow-400" />}
              />
              <FeatureCard
                title="Abordable"
                subtitle="Prix justes"
                icon={<DollarSign className="h-5 w-5 text-green-400" />}
              />
              <FeatureCard
                title="Fiable"
                subtitle="Service ponctuel"
                icon={<ShieldCheck className="h-5 w-5 text-blue-400" />}
              />
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-sm text-zinc-400">Service sur appel</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                Forfaits intérieur & extérieur
              </div>
              <div className="mt-3 text-zinc-300">
                Berlines, coupés, VUS, camions et plus.
              </div>

              <div className="mt-6 grid gap-3">
                <ProofPoint text="Laval + environs" />
                <ProofPoint text="Grand Montréal" />
                <ProofPoint text="Horaire flexible" />
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
          Choisissez un forfait ou demandez un prix personnalisé.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="Intérieur — Refresh"
            points={["Aspirateur + nettoyage", "Vitres", "Traitement léger des taches"]}
          />
          <ServiceCard
            title="Extérieur — Clean"
            points={["Lavage à la main", "Jantes + pneus", "Séchage + brillance"]}
          />
          <ServiceCard
            title="Complet — Full Detail"
            points={["Intérieur en profondeur", "Lavage extérieur", "Finition premium"]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-zinc-800 bg-white text-zinc-900 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Prêt à réserver?
            </h3>
            <p className="mt-2 text-zinc-700">
              Donnez-nous les informations sur votre véhicule et votre méthode de contact préférée. On vous répond rapidement.
            </p>
          </div>

          <Link
            href="/fr/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
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

function ServiceCard({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
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