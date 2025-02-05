"use client"

import { useState, useCallback } from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AquaMonitor",
  description: "Water Quality Monitoring Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header toggleSidebar={toggleSidebar} />
            <div className="flex-1">
              <div className="border-b">
                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                  <Sidebar className={`${sidebarOpen ? "block" : "hidden"} md:block`} />
                  <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                    <div className="mx-auto w-full min-w-0">{children}</div>
                  </main>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'