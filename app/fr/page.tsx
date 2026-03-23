import { ArrowRight, Droplets, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MechanicalSlideshow from "../../components/MechanicalSlideshow";
import ServiceSlideshow from "../../components/ServiceSlideshow";

export default function HomeFR() {
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
              Mecanique mobile et esthetique
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
            eyebrow="Esthetique"
            title="Une esthetique mobile qui commence simple et se precise selon vos besoins"
            body="Un vehicule plus propre, des forfaits faciles a comparer, et un service professionnel sur place."
            icon={<Droplets className="h-6 w-6 text-red-400" />}
            href="/fr/pricing#detailing"
            cta="Voir les prix esthetique"
          />
          <ServicePathCard
            eyebrow="Mecanique"
            title="Une aide mecanique mobile pour le service et les verifications les plus demandes"
            body="Entretien regulier, inspections et diagnostics sans vous faire passer par un long processus."
            icon={<Wrench className="h-6 w-6 text-red-400" />}
            href="/fr/pricing#mechanic"
            cta="Voir les prix mecanique"
          />
        </div>
      </section>

      <ServiceSlideshow locale="fr" />
      <MechanicalSlideshow locale="fr" />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <FocusCard
            title="Forfaits esthetique"
            body="Une structure simple qui permet de passer d'un entretien de base a une finition plus complete."
            linkText="Aller aux prix"
            href="/fr/pricing#detailing"
          />
          <FocusCard
            title="Soutien mecanique"
            body="Changements d huile, inspections, freins, suspension et diagnostics presentes plus directement."
            linkText="Voir les services"
            href="/fr/pricing#mechanic"
          />
          <FocusCard
            title="Demandes personnalisees"
            body="Si vous savez deja ce qu il vous faut, le formulaire permet de choisir esthetique, mecanique ou les deux."
            linkText="Commencer la demande"
            href="/fr/contact"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-red-400">
              Ce Que Nous Croyons
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Nous voulons qu&apos;un bon service soit clair, respectueux et digne
              de confiance
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              Notre objectif est d&apos;offrir un soutien solide et un travail de
              qualite sans rendre le processus confus. Cela veut dire une
              communication claire, des recommandations realistes, des prix
              justes et un service qui respecte votre temps autant que votre
              vehicule.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <BeliefCard
                title="Conseils clairs"
                body="Nous expliquons simplement la prochaine etape, que vous ayez besoin d esthetique, de mecanique ou des deux."
              />
              <BeliefCard
                title="Qualite fiable"
                body="Nous visons un resultat propre, fonctionnel et professionnel du debut a la fin."
              />
              <BeliefCard
                title="Service centre client"
                body="Nous voulons rendre l experience plus simple, plus flexible et plus utile que le processus habituel."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-red-500/25 bg-red-500/10 p-8 text-zinc-100 md:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm uppercase tracking-[0.24em] text-red-300">
              Pret quand vous etes
            </div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Passez a la prochaine etape seulement quand vous avez assez d information
            </h3>
            <p className="mt-3 text-zinc-300">
              Commencez par l ensemble sur la page d accueil, comparez les prix
              quand vous voulez plus de details, puis envoyez votre demande
              quand vous etes pret.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/fr/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600"
              >
                Contactez-nous
              </Link>
              <Link
                href="/fr/pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Voir les prix
              </Link>
            </div>
          </div>
        </div>
      </section>
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
