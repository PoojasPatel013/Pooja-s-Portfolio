import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Dancing_Script, Kalam, Playfair_Display, Crimson_Text } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-script",
})
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-kalam",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "PoojaX",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${kalam.variable} ${playfair.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  )
}
