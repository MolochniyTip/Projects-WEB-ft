'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: 'Profile',
    href: '/account/settings',
  },
  {
    title: 'Password',
    href: '/account/settings/password',
  },
  {
    title: 'Notifications',
    href: '/account/settings/notifications',
  },
  {
    title: 'Billing',
    href: '/account/settings/billing',
  },
  {
    title: 'Integrations',
    href: '/account/settings/integrations',
  },
  {
    title: 'API',
    href: '/account/settings/api',
  },
]

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold mb-8">Account Settings</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Navigation */}
            <nav className="w-full md:w-64 flex-shrink-0">
              <ul className="space-y-1">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-[#3dcbb1] text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
