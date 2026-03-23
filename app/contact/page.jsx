"use client";

import { Cog, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

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
      router.push("/thank-you");
      return;
    }

    const text = await res.text();
    setStatus(`Error ❌ ${text}`);
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
        <h1 className="text-3xl font-semibold tracking-tight">
          Contact Privilege Auto Detailing
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Request a quote for mobile detailing or mechanic service in Laval and
          the Greater Montreal region.
        </p>

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

          <input type="hidden" name="lang" value="en" />

          <FormSection
            title="Contact details"
            description="Start with your information so we know who to reply to."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="First name">
                <input
                  name="firstName"
                  required
                  className="input"
                  placeholder="John"
                />
              </Field>

              <Field label="Last name">
                <input
                  name="lastName"
                  required
                  className="input"
                  placeholder="Doe"
                />
              </Field>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Email">
                <input
                  name="email"
                  type="email"
                  required
                  className="input"
                  placeholder="john@email.com"
                />
              </Field>

              <Field label="Phone">
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
            title="Service details"
            description="Tell us what kind of service you need and how you want us to follow up."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                label="Interested in"
                hint="Choose the main service you want help with."
              >
                <select name="serviceInterest" required className="input">
                  <option value="">Choose...</option>
                  <option value="detailing">Detailing</option>
                  <option value="mechanic">Mechanic</option>
                  <option value="both">Both</option>
                </select>
              </Field>

              <Field label="Preferred method of contact">
                <select name="preferredContact" required className="input">
                  <option value="">Choose...</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
              </Field>
            </div>
          </FormSection>

          <FormSection
            title="Vehicle details"
            description="Optional, but helpful if you already know the vehicle information."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Car brand (optional)">
                <input
                  name="carBrand"
                  className="input"
                  placeholder="e.g., Toyota"
                />
              </Field>

              <Field label="Car model (optional)">
                <input
                  name="carModel"
                  className="input"
                  placeholder="e.g., Camry 2020"
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
              More than one car
            </span>
          </label>

          <FormSection
            title="Request details"
            description="Add anything important about the service, the vehicle, or the issue you want fixed."
          >
            <Field label="Comments / specifications">
              <textarea
                name="message"
                required
                rows={8}
                className="input"
                placeholder={
                  "Tell us what you want done and any details:\n" +
                  "• Detailing, mechanic service, or both\n" +
                  "• Location (city/area)\n" +
                  "• Preferred date & time\n" +
                  "• Vehicle condition or issue\n" +
                  "• Any special requests"
                }
              />
            </Field>
          </FormSection>

          <button
            type="submit"
            className="rounded-2xl bg-red-500 py-3.5 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Send Request
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

        select.input,
        textarea.input {
          color: #f4f4f5;
        }
      `}</style>
    </main>
  );
}

function FormSection({ title, description, children }) {
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

function Field({ label, hint, children }) {
  return (
    <div className="grid gap-2">
      <div className="text-sm font-medium text-zinc-200">{label}</div>
      {hint ? <div className="text-xs text-zinc-500">{hint}</div> : null}
      {children}
    </div>
  );
}
