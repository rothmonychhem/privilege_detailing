"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactFR() {
  const [status, setStatus] = useState<string>("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      formEl.reset();
      router.push("/fr/merci");
      return;
    }

    const text = await res.text();
    setStatus("Erreur ❌ " + text);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Contact — Privilege Auto Detailing
        </h1>

        <p className="mt-3 text-zinc-400">
          Demandez une soumission pour un service d’esthétique mobile à Laval et dans le Grand Montréal.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-6">
          {/* Anti-spam */}
          <input name="company" tabIndex={-1} autoComplete="off" className="hidden" />

          {/* Language marker */}
          <input type="hidden" name="lang" value="fr" />

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Prénom">
              <input
                name="firstName"
                required
                className="input"
                placeholder="Jean"
              />
            </Field>

            <Field label="Nom">
              <input
                name="lastName"
                required
                className="input"
                placeholder="Dupont"
              />
            </Field>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Courriel">
              <input
                name="email"
                type="email"
                required
                className="input"
                placeholder="jean@email.com"
              />
            </Field>

            <Field label="Téléphone">
              <input
                name="phone"
                inputMode="tel"
                className="input"
                placeholder="(514) 555-1234"
              />
            </Field>
          </div>

          <Field label="Méthode de contact préférée">
            <select name="preferredContact" required className="input">
              <option value="">Choisir…</option>
              <option value="Email">Courriel</option>
              <option value="Phone">Téléphone</option>
            </select>
          </Field>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Marque du véhicule (optionnel)">
              <input
                name="carBrand"
                className="input"
                placeholder="ex. : Toyota"
              />
            </Field>

            <Field label="Modèle du véhicule (optionnel)">
              <input
                name="carModel"
                className="input"
                placeholder="ex. : Camry 2020"
              />
            </Field>
          </div>

          <label className="flex items-center gap-3 text-sm text-zinc-300">
            <input
              type="checkbox"
              name="moreThanOneCar"
              value="yes"
              className="h-4 w-4 accent-zinc-300"
            />
            Plus d’un véhicule
          </label>

          <Field label="Commentaires / spécifications">
            <textarea
              name="message"
              required
              rows={7}
              className="input"
              placeholder={
                "Décrivez ce que vous voulez et les détails :\n" +
                "• Intérieur / Extérieur / Full detail\n" +
                "• Localisation (ville/secteur)\n" +
                "• Date et heure souhaitées\n" +
                "• État du véhicule (poils d’animaux, taches, sel, odeur, etc.)\n" +
                "• Demandes spéciales (cire, polissage, shampoing, etc.)"
              }
            />
          </Field>

          <button
            type="submit"
            className="rounded-2xl bg-white text-zinc-900 py-3 text-sm font-medium hover:bg-zinc-200 transition"
          >
            Envoyer la demande
          </button>

          {status && <p className="text-sm text-zinc-400">{status}</p>}
        </form>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          background-color: #18181b;
          color: #f4f4f5;
          border: 1px solid #27272a;
          border-radius: 16px;
          padding: 12px 14px;
          outline: none;
        }

        .input::placeholder {
          color: #71717a;
        }

        .input:focus {
          border-color: #3f3f46;
          box-shadow: 0 0 0 3px rgba(63, 63, 70, 0.4);
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <div className="text-sm font-medium text-zinc-200">{label}</div>
      {children}
    </div>
  );
}