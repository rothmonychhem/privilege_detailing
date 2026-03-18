import "./globals.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavLinks from "../components/NavLinks";

export const metadata = {
  title: "Privilege Auto Detailing | Laval & Montréal",
  description:
    "Quick, affordable, reliable mobile auto detailing in Laval and the Greater Montréal region.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Privilege Auto Detailing
            </Link>

            <NavLinks />
          </div>
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}