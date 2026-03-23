"use client";

import { Cog, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
    setStatus(`Erreur ❌ ${text}`);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 py-12 text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Wrench className="absolute -right-12 top-20 h-80 w-80 rotate-[-18deg] text-white/5" />
        <Cog className="absolute -left-10 bottom-4 h-72 w-72 text-red-500/10" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <h1 className="text-center text-3xl font-semibold tracking-tight">
          Contact — EG Auto Pro
        </h1>

        <p className="mx-auto mt-3 max-w-3xl text-center text-zinc-400">
          Demandez une soumission pour un service d&apos;esthétique ou de
          mécanique mobile à Laval et dans le Grand Montréal.
        </p>

        <div className="mx-auto mt-5 w-full rounded-2xl border border-red-500/25 bg-red-500/10 px-5 py-4 text-center text-sm text-zinc-200">
          Pour le moment, les rendez-vous a domicile sont disponibles les fins de semaine seulement.
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/55 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur md:p-10"
        >
          <input
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <input type="hidden" name="lang" value="fr" />

          <FormSection
            title="Coordonnées"
            description="Commencez par vos informations pour que nous puissions vous répondre facilement."
          >
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
          </FormSection>

          <FormSection
            title="Détails du service"
            description="Dites-nous le type de service souhaité et votre méthode de contact préférée."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Intéressé par">
                <select name="serviceInterest" required className="input">
                  <option value="">Choisir...</option>
                  <option value="detailing">Esthétique</option>
                  <option value="mechanic">Mécanique</option>
                  <option value="both">Les deux</option>
                </select>
              </Field>

              <Field label="Méthode de contact préférée">
                <select name="preferredContact" required className="input">
                  <option value="">Choisir...</option>
                  <option value="Email">Courriel</option>
                  <option value="Phone">Téléphone</option>
                </select>
              </Field>
            </div>
          </FormSection>

          <FormSection
            title="Détails du véhicule"
            description="Optionnel, mais utile si vous avez déjà les informations du véhicule."
          >
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
          </FormSection>

          <label className="rounded-2xl border border-zinc-800 bg-zinc-950/55 px-4 py-4 text-sm text-zinc-300">
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                name="moreThanOneCar"
                value="yes"
                className="h-4 w-4 accent-red-500"
              />
              Plus d&apos;un véhicule
            </span>
          </label>

          <FormSection
            title="Détails de la demande"
            description="Ajoutez tout ce qui est important à propos du service, du véhicule, ou du problème mécanique."
          >
            <Field label="Commentaires / spécifications">
              <textarea
                name="message"
                required
                rows={8}
                className="input"
                placeholder={
                  "Décrivez ce que vous voulez et les détails :\n" +
                  "• Esthétique, mécanique, ou les deux\n" +
                  "• Localisation (ville/secteur)\n" +
                  "• Date et heure souhaitées\n" +
                  "• État du véhicule ou problème mécanique\n" +
                  "• Demandes spéciales"
                }
              />
            </Field>
          </FormSection>

          <button
            type="submit"
            className="rounded-2xl bg-red-500 py-3.5 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Envoyer la demande
          </button>

          {status && <p className="text-sm text-zinc-400">{status}</p>}
        </form>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          min-height: 54px;
          background-color: rgba(24, 24, 27, 0.92);
          color: #f4f4f5;
          border: 1px solid #27272a;
          border-radius: 16px;
          padding: 14px 16px;
          outline: none;
        }

        .input::placeholder {
          color: #71717a;
        }

        .input:focus {
          border-color: rgba(239, 68, 68, 0.75);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
        }
      `}</style>
    </main>
  );
}

function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4">
      <div>
        <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
        <p className="mt-1 text-sm text-zinc-400">{description}</p>
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <div className="text-sm font-medium text-zinc-200">{label}</div>
      {hint ? <div className="text-xs text-zinc-500">{hint}</div> : null}
      {children}
    </div>
  );
}
