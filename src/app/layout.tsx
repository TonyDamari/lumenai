import type { Metadata } from "next"
import "./globals.css"

import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
})

export const metadata: Metadata = {
  title: "Lumenai",
  description: "News and events",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable}  font-sans`}>
      <body>{children}</body>
    </html>
  )
}
