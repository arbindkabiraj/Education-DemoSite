"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home, Users, UserCheck, FileText, Settings, Shield, BarChart3, Calendar
} from "lucide-react"

// Navigation Array
const navigation = [
  { name: "Dashboard", href: "/dashboard/admin", icon: Home },
  { name: "Students", href: "/dashboard/admin/students", icon: Users },
  { name: "Teachers", href: "/dashboard/admin/teachers", icon: UserCheck },
  { name: "Notices", href: "/dashboard/admin/notices", icon: FileText },
  { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
  { name: "Calendar", href: "/dashboard/admin/calendar", icon: Calendar },
  { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
]

// Navigation Item interface
interface NavItemProps {
  item: {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  active: boolean;
}

// Nav Item Component
function NavItem({ item, active }: NavItemProps) {
  return (
    <Link
      href={item.href}
      className={cn(
        active
          ? "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
          : "text-gray-700 hover:text-purple-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-700",
        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
      )}
      aria-current={active ? "page" : undefined}
    >
      <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span>{item.name}</span>
    </Link>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()
  // For nested routes, check if pathname starts with href
  const isActive = (href) => pathname === href || pathname.startsWith(href + "/")

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col" aria-label="Admin Sidebar">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-800 px-6 pb-4 shadow-lg">
        <div className="flex h-16 shrink-0 items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-lg font-semibold">Admin Portal</span>
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavItem item={item} active={isActive(item.href)} />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
