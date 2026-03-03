import Link from "next/link";
import ServiceSlideshow from "../../components/ServiceSlideshow";

export default function HomeFR() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-zinc-400">
              Esthétique mobile • Laval & Grand Montréal
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Esthétique auto rapide, abordable et fiable — directement chez vous.
            </h1>

            <p className="mt-4 text-zinc-300 leading-relaxed">
              On se déplace à votre domicile. De la voiture de tous les jours aux VUS et véhicules plus haut de gamme,
              on livre un résultat propre et professionnel — prise de rendez-vous rapide et prix transparents.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-200 transition"
              >
                Obtenir un prix
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition"
              >
                Voir les services
              </a>
            </div>
          </div>

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
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm">
                  ✅ Laval + environs
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm">
                  ✅ Grand Montréal
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm">
                  ✅ Horaire flexible
                </div>
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
    </main>
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