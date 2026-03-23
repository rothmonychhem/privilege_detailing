import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import NavLinks from "../components/NavLinks";

export const metadata = {
  title: "EG Auto Pro | Laval & Montreal",
  description:
    "Quick, affordable, reliable mobile auto detailing in Laval and the Greater Montreal region.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <header className="sticky top-0 z-50 border-b border-red-500/20 bg-zinc-950/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.JPG"
                alt="EG Auto Pro"
                width={220}
                height={88}
                className="h-14 w-auto object-contain"
                priority
              />
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
