import { Resend } from "resend";

function clean(v) {
  return String(v ?? "").trim();
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot anti-spam
    if (body.company) {
      return new Response("Spam detected.", { status: 400 });
    }

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

    const resend = new Resend(process.env.RESEND_API_KEY);

    // NOTE: FROM_EMAIL must be a sender you've verified in Resend (domain/email)
    const from = process.env.FROM_EMAIL;
    const to = "rothmony.chhem@gmail.com";

    const subject = `New detailing request — ${firstName} ${lastName}`;

    const text =
      `New Detailing Request\n` +
      `---------------------\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Preferred contact: ${preferredContact}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "(not provided)"}\n` +
      `Car brand: ${carBrand || "(not provided)"}\n` +
      `Car model: ${carModel || "(not provided)"}\n` +
      `More than one car: ${moreThanOneCar}\n\n` +
      `Comments / specifications:\n${message}\n`;

    await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email, // so you can reply directly
      text,
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response("Server error.", { status: 500 });
  }
}