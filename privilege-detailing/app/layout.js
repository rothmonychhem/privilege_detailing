import "./globals.css";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privilege Auto Detailing | Laval & Montréal",
  description: "Quick, affordable, reliable mobile auto detailing in Laval and the Greater Montréal region.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Privilege Auto Detailing
            </Link>
            <nav className="flex gap-4 text-sm text-zinc-700">
              <Link className="hover:text-zinc-950" href="/">Home</Link>
              <Link className="hover:text-zinc-950" href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}