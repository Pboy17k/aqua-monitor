"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart2, Settings, HardDrive, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BarChart2, label: "Historical Data", href: "/historical-data" },
  { icon: Settings, label: "System Settings", href: "/system-settings" },
  { icon: HardDrive, label: "Device Management", href: "/device-management" },
  { icon: Info, label: "About Us", href: "/about" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Menu</h2>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

