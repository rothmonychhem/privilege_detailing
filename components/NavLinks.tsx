"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "./LanguageToggle";

export default function NavLinks() {
  const pathname = usePathname() || "/";
  const isFR = pathname === "/fr" || pathname.startsWith("/fr/");

  const homeHref = isFR ? "/fr" : "/";
  const pricingHref = isFR ? "/fr/pricing" : "/pricing";
  const contactHref = isFR ? "/fr/contact" : "/contact";

  return (
    <nav className="flex items-center gap-4 text-sm text-white/90">
      <Link className="hover:text-white" href={homeHref}>
        {isFR ? "Accueil" : "Home"}
      </Link>

      <Link className="hover:text-white" href={pricingHref}>
        {isFR ? "Prix" : "Pricing"}
      </Link>

      <Link className="hover:text-white" href={contactHref}>
        {isFR ? "Contact" : "Contact"}
      </Link>

      <LanguageToggle />
    </nav>
  );
}
