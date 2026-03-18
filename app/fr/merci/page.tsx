import Link from "next/link";

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Merci pour votre intérêt envers Privilege Auto Detailing.
          </h1>

          <p className="mt-3 text-zinc-300 leading-relaxed">
            Nous avons bien reçu votre demande et nous vous contacterons dès que possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-200 transition"
            >
              Retour à l’accueil
            </Link>

            <Link
              href="/fr/contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition"
            >
              Envoyer une autre demande
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}