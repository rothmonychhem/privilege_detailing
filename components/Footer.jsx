export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <div className="font-medium text-zinc-100">Privilege Auto Detailing</div>

        <div>
          Contact:{" "}
          <a
            className="text-zinc-200 underline underline-offset-4"
            href="mailto:info@egauto.ca"
          >
            info@egauto.ca
          </a>
          <p className="mt-1 text-zinc-300">1 (438) 951-0100</p>
        </div>

        <div>Montreal • Brossard • Longueuil • Laval • Boucherville</div>
      </div>
    </footer>
  );
}
