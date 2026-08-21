import type { Metadata } from "next"
import {
  IBM_Plex_Sans,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google"
import "./globals.css"

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Suman Painuly — Endpoint Management & Intune Specialist",
  description:
    "Portfolio of Suman Painuly, an Endpoint Management & Intune Specialist focused on endpoint engineering, automation, security, and enterprise platform engineering.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plexSans.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
