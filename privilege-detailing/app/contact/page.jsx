"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      e.currentTarget.reset();
      router.push("/thank-you");
      return;
    }

    const text = await res.text();
    setStatus("Error ❌ " + text);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-semibold tracking-tight">
          Contact Privilege Auto Detailing
        </h1>

        <p className="mt-3 text-zinc-400">
          Request a quote for mobile detailing in Laval & the Greater Montréal region.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-6">

          {/* Honeypot anti-spam */}
          <input name="company" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="First name">
              <input name="firstName" required className="input" placeholder="John" />
            </Field>

            <Field label="Last name">
              <input name="lastName" required className="input" placeholder="Doe" />
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

          <Field label="Preferred method of contact">
            <select name="preferredContact" required className="input">
              <option value="">Choose…</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </Field>

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

          <label className="flex items-center gap-3 text-sm text-zinc-300">
            <input
              type="checkbox"
              name="moreThanOneCar"
              value="yes"
              className="h-4 w-4 accent-zinc-300"
            />
            More than one car
          </label>

          <Field label="Comments / specifications">
            <textarea
              name="message"
              required
              rows={7}
              className="input"
              placeholder={
                "Tell us what you want done and any details:\n" +
                "• Interior / Exterior / Full detail\n" +
                "• Location (city/area)\n" +
                "• Preferred date & time\n" +
                "• Vehicle condition (pet hair, stains, salt, odor, etc.)\n" +
                "• Any special requests (wax, polish, deep shampoo, etc.)"
              }
            />
          </Field>

          <button
            type="submit"
            className="rounded-2xl bg-white text-zinc-900 py-3 text-sm font-medium hover:bg-zinc-200 transition"
          >
            Send Request
          </button>

          {status && (
            <p className="text-sm text-zinc-400">{status}</p>
          )}

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

        select.input {
          color: #f4f4f5;
        }

        textarea.input {
          color: #f4f4f5;
        }
      `}</style>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <div className="grid gap-2">
      <div className="text-sm font-medium text-zinc-200">{label}</div>
      {children}
    </div>
  );
}