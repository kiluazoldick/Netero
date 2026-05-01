'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import {
  useSidebar,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

import {
  LayoutDashboard,
  Layers,
  CreditCard,
  User2,
  LogOut,
  Bell,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Sun,
  Moon
} from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/bord", icon: LayoutDashboard },
  { label: "Templates", href: "/dashboard/templates", icon: Layers },
  { label: "Go Premium", href: "/pricing", icon: CreditCard },
  { label: "Log Out", href: "/dashboard/logout", icon: LogOut },
]

export function AppSidebar() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const { state } = useSidebar()
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const collapsed = state === "collapsed"

  const isPremium = false
  const username = "username"

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (collapsed) setOpen(false)
  }, [collapsed])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <TooltipProvider>
      <Sidebar collapsible="icon">

        {/* HEADER */}
        <SidebarHeader className="py-4 mb-6">
          <div className="flex items-center justify-between px-1">

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex-shrink-0 bg-yellow-400" />
              <span className="text-3xl font-bold group-data-[state=collapsed]:hidden text-yellow-400">
                Netero
              </span>
            </div>

            {/* THEME TOGGLE */}
            <Tooltip>
              <TooltipTrigger>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="group-data-[state=collapsed]:hidden p-2 rounded-md hover:bg-muted transition"
                >
                  {mounted ? (
                    theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                </button>
              </TooltipTrigger>

              <TooltipContent side="right">
                {mounted && theme === "dark" ? "Light mode" : "Dark mode"}
              </TooltipContent>
            </Tooltip>

          </div>
          <hr className="mt-3 border-border" />
        </SidebarHeader>

        {/* NAV */}
        <SidebarContent>
          <SidebarMenu className="space-y-3 px-1 mt-4">

            {navItems.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href

              return (
                <SidebarMenuItem key={label}>
                  <Tooltip>

                    {/* IMPORTANT FIX: asChild */}
                    <TooltipTrigger asChild>
                      <SidebarMenuButton
                        className={cn(
                          "py-5 text-lg gap-4 h-auto w-full",
                          isActive
                            ? "bg-muted text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        )}
                      >
                        <Link href={href} className="flex items-center gap-4">
                          <Icon size={26} />
                          <span className="group-data-[state=collapsed]:hidden">
                            {label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </TooltipTrigger>

                    {collapsed && (
                      <TooltipContent side="right">{label}</TooltipContent>
                    )}

                  </Tooltip>
                </SidebarMenuItem>
              )
            })}

          </SidebarMenu>
        </SidebarContent>

        {/* FOOTER */}
        <SidebarFooter className="relative" ref={ref}>

          {/* USER BUTTON */}
          <Tooltip>

            <TooltipTrigger asChild>
              <button
                onClick={() => !collapsed && setOpen(!open)}
                className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted transition"
              >
                <div className="flex items-center gap-3">
                  <User2 size={22} />

                  <div className="text-left group-data-[state=collapsed]:hidden">
                    <p className="text-sm font-medium">{username}</p>
                    <p className="text-xs text-muted-foreground">
                      {isPremium ? "Premium" : "Gratuit"}
                    </p>
                  </div>
                </div>

                <span className="group-data-[state=collapsed]:hidden">
                  {open ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </span>
              </button>
            </TooltipTrigger>

            {collapsed && (
              <TooltipContent side="right">{username}</TooltipContent>
            )}

          </Tooltip>

          {/* DROPDOWN */}
          <AnimatePresence>
            {open && !collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-0 left-full ml-2 w-52 bg-background border rounded-xl shadow-lg p-2 space-y-1"
              >

                <SidebarMenuButton asChild className="py-2 gap-2">
                  <Link href="/pricing" className="flex items-center gap-2">
                    <Sparkles size={18} />
                    Upgrade to Pro
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild className="py-2 gap-2">
                  <Link href="/dashboard/account" className="flex items-center gap-2">
                    <User2 size={18} />
                    Account
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild className="py-2 gap-2">
                  <Link href="/dashboard/billing" className="flex items-center gap-2">
                    <CreditCard size={18} />
                    Billing
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild className="py-2 gap-2">
                  <Link href="/dashboard/notifications" className="flex items-center gap-2">
                    <Bell size={18} />
                    Notifications
                  </Link>
                </SidebarMenuButton>

                <div className="border-t my-1" />

                <SidebarMenuButton className="py-2 gap-2 text-red-500 hover:text-red-600">
                  <LogOut size={18} />
                  Log out
                </SidebarMenuButton>

              </motion.div>
            )}
          </AnimatePresence>

        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  )
}