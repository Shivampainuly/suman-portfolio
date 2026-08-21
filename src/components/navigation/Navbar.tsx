"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Command,
  Menu,
  Terminal,
  X,
} from "lucide-react"

const navigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Engineering", href: "/engineering" },
  { label: "Skills", href: "/skills" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }

    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card font-mono text-sm font-bold text-primary transition-colors group-hover:border-primary">
            SP
          </span>

          <div className="hidden sm:block">
            <div className="text-sm font-semibold tracking-tight">
              Suman Painuly
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Endpoint Engineering
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-3 py-2 font-mono text-xs transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-primary" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            onClick={() => {
              window.dispatchEvent(new Event("open-command-palette"))
            }}
          >
            <Command className="h-3.5 w-3.5" />
            <span>Command</span>
            <kbd className="rounded border border-border px-1.5 py-0.5 text-[9px]">
              ⌘K
            </kbd>
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Terminal className="h-3.5 w-3.5" />
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <div className="space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-3 font-mono text-sm transition-colors ${
                      active
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>

                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                )
              })}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Terminal className="h-4 w-4" />
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
