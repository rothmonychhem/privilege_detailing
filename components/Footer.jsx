export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="font-medium text-zinc-800">Privilege Auto Detailing</div>
        <div>
          Contact:{" "}
          <a className="underline underline-offset-4" href="mailto:privilegeautodetailing@gmail.com">
            privilegeautodetailing@gmail.com
          </a>{/* email to change*/}
        </div>
        <div className="text-zinc-500">Laval • Greater Montréal</div>
      </div>
    </footer>
  );
}