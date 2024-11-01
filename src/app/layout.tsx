import type { Metadata } from "next"
import "./globals.css"

import { Open_Sans } from "next/font/google"

import { ArticlesProvider } from "./context/ArticlesContext"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

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
    <html lang="en" className={`${openSans.variable} font-sans`}>
      <body className="font-sans">
        <ArticlesProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ArticlesProvider>
      </body>
    </html>
  )
}
