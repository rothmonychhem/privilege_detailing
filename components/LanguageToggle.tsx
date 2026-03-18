"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname() || "/";
  const isFR = pathname === "/fr" || pathname.startsWith("/fr/");

  const href = isFR
    ? pathname.replace(/^\/fr/, "") || "/"
    : `/fr${pathname === "/" ? "" : pathname}`;

  const label = isFR ? "EN" : "FR";

  return (
    <Link
      href={href}
      className="ml-2 inline-flex items-center justify-center rounded-xl border border-zinc-700 px-3 py-1.5 hover:bg-zinc-900 transition"
    >
      {label}
    </Link>
  );
}