import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          Thank you for your interest in EG Auto Pro.
        </h1>
        <p className="mt-3 text-zinc-300 leading-relaxed">
          We’ve received your request and will contact you as soon as possible.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium bg-zinc-50 text-zinc-900 hover:bg-zinc-200"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-700 text-zinc-100 hover:bg-zinc-900"
          >
            Send another request
          </Link>
        </div>
      </div>
    </main>
  );
}
