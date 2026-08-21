import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Cpu, Layers3, Terminal } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    role: "Endpoint Management & Intune Specialist",
    company: "Enterprise IT Operations",
    description:
      "Managing modern endpoint environments with Microsoft Intune, Microsoft Entra ID, Windows administration, device compliance, application deployment, configuration policies and endpoint troubleshooting.",
    highlights: [
      "Microsoft Intune device and application management",
      "Windows endpoint configuration and troubleshooting",
      "Microsoft Entra ID identity and access administration",
      "Endpoint compliance, security policies and remediation",
    ],
  },
  {
    period: "Earlier Experience",
    role: "IT Support / Systems Operations",
    company: "Enterprise Support Environment",
    description:
      "Provided technical support and operational assistance across Windows endpoints, user environments, applications and enterprise IT workflows.",
    highlights: [
      "End-user technical troubleshooting",
      "Windows and application support",
      "Incident investigation and resolution",
      "Operational documentation and process improvement",
    ],
  },
]

const engineeringAreas = [
  {
    title: "Microsoft Intune",
    description:
      "Endpoint lifecycle management covering enrollment, configuration profiles, compliance policies, applications and device remediation.",
    icon: Cpu,
  },
  {
    title: "Windows Endpoint Engineering",
    description:
      "Configuration, troubleshooting, standardization and operational management of Windows enterprise endpoints.",
    icon: Layers3,
  },
  {
    title: "Identity & Access",
    description:
      "Microsoft Entra ID administration, authentication workflows, device identity and access-control fundamentals.",
    icon: CheckCircle2,
  },
  {
    title: "Automation & Operations",
    description:
      "PowerShell-oriented operational thinking, repeatable procedures, troubleshooting workflows and technical documentation.",
    icon: Terminal,
  },
]

const skills = [
  {
    category: "Endpoint Management",
    items: ["Microsoft Intune", "Endpoint Manager", "Windows 10/11", "Device Enrollment", "Compliance Policies", "Configuration Profiles"],
  },
  {
    category: "Identity & Security",
    items: ["Microsoft Entra ID", "Conditional Access", "Device Identity", "Authentication", "Security Baselines", "Access Management"],
  },
  {
    category: "Application Management",
    items: ["Win32 Applications", "Application Deployment", "Software Troubleshooting", "Packaging Concepts", "Update Management"],
  },
  {
    category: "Systems & Operations",
    items: ["Windows Administration", "Incident Troubleshooting", "PowerShell", "Technical Documentation", "Runbooks", "Operational Support"],
  },
]

const labItems = [
  {
    title: "Endpoint Automation",
    type: "RUNBOOK",
    description:
      "A collection of repeatable endpoint administration procedures designed to reduce manual troubleshooting and improve operational consistency.",
  },
  {
    title: "Intune Configuration Patterns",
    type: "ENGINEERING NOTE",
    description:
      "Practical configuration patterns for device enrollment, compliance, application deployment and Windows endpoint management.",
  },
  {
    title: "PowerShell Operations",
    type: "SCRIPT",
    description:
      "Small operational automation concepts focused on diagnostics, endpoint checks and repeatable administrative workflows.",
  },
]

function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  )
}

export default function PortfolioPages() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader
        eyebrow="08 / Experience"
        title="Endpoint engineering built around reliable operations."
        description="A technical career focused on enterprise endpoint management, Microsoft Intune, Windows administration, identity and practical troubleshooting."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="space-y-10">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[180px_1fr]"
            >
              <div className="font-mono text-sm text-muted-foreground">
                {experience.period}
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg border border-border bg-card p-2">
                    <BriefcaseBusiness className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold">{experience.role}</h2>
                    <p className="mt-1 font-mono text-sm text-primary">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">
                  {experience.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {experience.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-lg border border-border bg-card/50 p-4 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <PageHeader
            eyebrow="08 / Engineering"
            title="The systems behind the endpoint."
            description="Core engineering domains spanning device management, identity, application delivery and operational automation."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {engineeringAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <h2 className="mt-6 text-xl font-semibold">{area.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {area.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <PageHeader
          eyebrow="08 / Skills"
          title="A practical enterprise endpoint stack."
          description="Technical capabilities organized by the systems and workflows used in modern endpoint operations."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <article
              key={group.category}
              className="rounded-xl border border-border bg-card p-7"
            >
              <h2 className="text-lg font-semibold">{group.category}</h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <PageHeader
            eyebrow="08 / Lab"
            title="Where operational ideas become repeatable systems."
            description="A technical lab for runbooks, scripts, endpoint experiments and documented engineering patterns."
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {labItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-border bg-background p-7 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
                    {item.type}
                  </span>
                </div>

                <h2 className="mt-8 text-xl font-semibold">{item.title}</h2>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Discuss the work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
