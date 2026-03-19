export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="font-medium text-zinc-800">EGAutoPro</div>
        <div>
          Contact:{" "}
          <a className="underline underline-offset-4" href="mailto:info@egauto.ca">
            info@egauto.ca
          </a>{/* email to change*/}

          <p>
            1 (438) 951-0100
          </p>
        </div>
        <div className="text-zinc-500">Montreal • Brossard • Longeuil • Laval • Boucherville</div>
      </div>
    </footer>
  );
}