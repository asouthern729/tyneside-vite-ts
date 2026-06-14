import type { Handler } from "@netlify/functions"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const escape = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\n/g, "<br>")

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  let body: { name?: string; email?: string; message?: string }
  try {
    body = JSON.parse(event.body ?? "{}")
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) }
  }

  const { name, email, message } = body
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) }
  }

  const { error } = await resend.emails.send({
    from: "Tyneside Contact Form <contact@tyneside.io>",
    to: "andrew@tyneside.io",
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>Email:</strong> ${escape(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escape(message)}</p>
    `,
  })

  if (error) {
    console.error(error)
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send email" }) }
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) }
}
