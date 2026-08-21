"use client"

import { FormEvent, useState } from "react"
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setSubmitted(true)
      form.reset()
    } catch {
      window.alert("Unable to send the message right now. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            09 / Contact
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s talk about endpoint engineering.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Open to conversations around Senior Endpoint Engineer, Intune
            Architect and Platform Engineering opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="rounded-xl border border-border bg-card p-7">
            <Mail className="h-6 w-6 text-primary" />

            <h2 className="mt-6 text-xl font-semibold">Email</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              For professional opportunities and technical discussions.
            </p>

            <a
              href="mailto:suman.painuly@example.com"
              className="mt-5 block break-all font-mono text-sm text-primary hover:underline"
            >
              suman.painuly@example.com
            </a>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-card p-7">
            <MapPin className="h-6 w-6 text-primary" />

            <h2 className="mt-6 text-xl font-semibold">Location</h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              India · Open to remote and suitable relocation opportunities.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-7 sm:p-9">
          {submitted ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />

              <h2 className="mt-6 text-2xl font-semibold">
                Message received.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                The contact endpoint accepted your request. A production
                deployment can connect this endpoint to email delivery or a
                CRM.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Company"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Tell me what you would like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
