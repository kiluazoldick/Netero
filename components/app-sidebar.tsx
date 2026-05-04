'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useSidebar, Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { LayoutDashboard, Layers, CreditCard, User2, LogOut, Bell, Sparkles, ChevronUp, ChevronDown, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

type AppSidebarProps = {
  user: any
  isPremium: boolean
}

const navItems = [
  { label: "Dashboard", href: "/bord", icon: LayoutDashboard },
  { label: "Templates", href: "/bord/templates", icon: Layers },
  { label: "Go Premium", href: "/bord/pricing", icon: CreditCard },
]

export function AppSidebar({ user, isPremium }: AppSidebarProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { state } = useSidebar()
  const { theme, setTheme } = useTheme()

  const collapsed = state === "collapsed"
  const username = user?.user_metadata?.full_name || user?.email || "User"

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (collapsed) setOpen(false)
  }, [collapsed])

  const handleLogout = async () => {
    await fetch('/signOut', { method: 'POST' })
    window.location.href = '/'
  }

  return (
    <Sidebar collapsible="icon">

      {/* HEADER */}
      <SidebarHeader className="py-4 mb-1">
        <div className="flex justify-between px-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-400" />
            <span className="text-3xl font-bold group-data-[state=collapsed]:hidden text-yellow-400">
              Netero
            </span>
          </div>

          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group-data-[state=collapsed]:hidden p-2 cursor-pointer"
          >
            {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </div>
        </div>
      </SidebarHeader>

        <hr />

      {/* NAV */}
      <SidebarContent>
        <SidebarMenu className="space-y-3 pt-6 px-1 mt-4">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href

            return (
              <SidebarMenuItem key={label}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-4 px-3 py-3 rounded-md",
                    isActive ? "bg-muted font-semibold" : "hover:bg-muted/60"
                  )}
                >
                  <Icon size={22} />
                  <span className="group-data-[state=collapsed]:hidden">{label}</span>
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter ref={ref} className="relative">
        <div
          onClick={() => !collapsed && setOpen(!open)}
          className="flex justify-between p-3 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <User2 size={20} />
            <div className="group-data-[state=collapsed]:hidden">
              <p className="text-sm font-medium">{username}</p>
              <p className="text-xs">{isPremium ? "Premium" : "Gratuit"}</p>
            </div>
          </div>

          {open ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>

        <AnimatePresence>
          {open && !collapsed && (
            <motion.div className="absolute bottom-full mb-2 left-0 w-full bg-white dark:bg-background border rounded-xl p-2">
              
              {!isPremium && (
                <Link href="bord/pricing" className="flex gap-2 px-3 py-2 hover:bg-muted">
                  <Sparkles size={16} /> Upgrade
                </Link>
              )}

              <div
                onClick={handleLogout}
                className="flex gap-2 px-3 py-2 text-red-500 hover:bg-red-50 cursor-pointer"
              >
                <LogOut size={16} /> Log out
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </SidebarFooter>
    </Sidebar>
  )
}