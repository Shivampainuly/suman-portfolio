"use client"

import { motion } from "framer-motion"
import {
  ArrowDownRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  ShieldCheck,
} from "lucide-react"

import { HeroTerminal } from "@/components/terminal/HeroTerminal"
import { Navbar } from "@/components/navigation/Navbar"
import { MagneticButton } from "@/components/ui/MagneticButton"

const metrics = [
  {
    value: "4.5+",
    label: "Years Experience",
    icon: Code2,
  },
  {
    value: "50K+",
    label: "Endpoints Managed",
    icon: Cpu,
  },
  {
    value: "99.9%",
    label: "Platform Reliability",
    icon: ShieldCheck,
  },
]

const capabilities = [
  "Microsoft Intune",
  "Microsoft Configuration Manager",
  "Windows 10/11",
  "Autopilot",
  "Entra ID",
  "PowerShell",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AVAILABLE FOR SENIOR ENGINEERING ROLES
              </div>

              <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-primary">
                Endpoint Management & Intune Specialist
              </p>

              <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Suman
                <span className="block text-muted-foreground">
                  Painuly<span className="text-primary">.</span>
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                Senior endpoint engineering professional specializing in
                Microsoft Intune, modern device management, automation,
                security, and enterprise Windows platforms.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-2 font-mono text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {capability}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton
                  href="/engineering"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Explore Engineering
                  <ArrowDownRight className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  Contact Me
                  <ChevronRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <HeroTerminal />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-6 lg:grid-cols-3 lg:px-8">
          {metrics.map((metric) => {
            const Icon = metric.icon

            return (
              <motion.div
                key={metric.label}
                whileHover={{ y: -3 }}
                className="bg-background px-6 py-10"
              >
                <Icon className="mb-5 h-5 w-5 text-primary" />

                <div className="text-4xl font-bold tracking-tight">
                  {metric.value}
                </div>

                <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Engineering Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Building reliable endpoint platforms at enterprise scale.
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-8">
              Focused on modern endpoint management, configuration,
              compliance, deployment automation, identity integration, and
              operational reliability.
            </p>

            <p className="leading-7">
              This portfolio documents engineering experience, technical
              implementations, troubleshooting methodology, automation
              work, and practical enterprise endpoint solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
