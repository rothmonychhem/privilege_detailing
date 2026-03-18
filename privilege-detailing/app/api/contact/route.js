import { Resend } from "resend";

function clean(v) {
  return String(v ?? "").trim();
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Anti-spam honeypot
    if (body.company) {
      return new Response("Spam detected.", { status: 400 });
    }

    const lang = clean(body.lang).toLowerCase() === "fr" ? "fr" : "en";

    const firstName = clean(body.firstName);
    const lastName = clean(body.lastName);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const preferredContact = clean(body.preferredContact);
    const carBrand = clean(body.carBrand);
    const carModel = clean(body.carModel);
    const moreThanOneCar = body.moreThanOneCar === "yes" ? "Yes" : "No";
    const message = clean(body.message);

    if (!firstName || !lastName || !email || !preferredContact || !message) {
      return new Response("Missing required fields.", { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.FROM_EMAIL;
    const to = process.env.TO_EMAIL;

    if (!apiKey) {
      return new Response("Missing RESEND_API_KEY", { status: 500 });
    }

    if (!from) {
      return new Response("Missing FROM_EMAIL", { status: 500 });
    }

    if (!to) {
      return new Response("Missing TO_EMAIL", { status: 500 });
    }

    const resend = new Resend(apiKey);

    const subject =
      lang === "fr"
        ? `Nouvelle demande d’esthétique — ${firstName} ${lastName}`
        : `New detailing request — ${firstName} ${lastName}`;

    const text =
      lang === "fr"
        ? [
            "Nouvelle demande d’esthétique",
            "-----------------------------",
            `Nom: ${firstName} ${lastName}`,
            `Méthode de contact préférée: ${
              preferredContact === "Phone" ? "Téléphone" : "Courriel"
            }`,
            `Courriel: ${email}`,
            `Téléphone: ${phone || "(non fourni)"}`,
            `Marque du véhicule: ${carBrand || "(non fournie)"}`,
            `Modèle du véhicule: ${carModel || "(non fourni)"}`,
            `Plus d’un véhicule: ${moreThanOneCar === "Yes" ? "Oui" : "Non"}`,
            "",
            `Commentaires / spécifications:`,
            message,
            "",
          ].join("\n")
        : [
            "New Detailing Request",
            "---------------------",
            `Name: ${firstName} ${lastName}`,
            `Preferred contact: ${preferredContact}`,
            `Email: ${email}`,
            `Phone: ${phone || "(not provided)"}`,
            `Car brand: ${carBrand || "(not provided)"}`,
            `Car model: ${carModel || "(not provided)"}`,
            `More than one car: ${moreThanOneCar}`,
            "",
            `Comments / specifications:`,
            message,
            "",
          ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      text,
    });

    if (error) {
      return new Response(`Resend error: ${error.message || "Unknown error"}`, {
        status: 500,
      });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response(`Server error: ${err?.message || "Unknown error"}`, {
      status: 500,
    });
  }
}