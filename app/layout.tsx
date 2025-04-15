import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter, Space_Mono, Rubik, Dancing_Script } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cursive",
})

export const metadata: Metadata = {
  title: "Junior Java Developer Profile",
  description: "Professional profile card for Rethabile Mokwane Junior Java developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} ${rubik.variable} ${dancingScript.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}


import './globals.css'