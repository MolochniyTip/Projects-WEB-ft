"use client"

import Link from "next/link"
import { ShoppingCart, ChevronRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useState } from "react"
import LoginModal from "./auth/LoginModal"
import SignUpModal from "./auth/SignUpModal"
import PersonalizationModal from "./auth/PersonalizationModal"
import { useAuth } from "../store/auth"

interface Category {
  title: string
  description: string
  subcategories?: {
    title: string
    description: string
  }[]
}

const categories: Category[] = [
  {
    title: "Design",
    description: "All About Design Course",
    subcategories: [
      {
        title: "Illustration",
        description: "How to be great illustrator",
      },
      {
        title: "Graphic Design",
        description: "Make more benefit from design",
      },
      {
        title: "UI/UX Design",
        description: "Make Design for website and apps",
      },
    ],
  },
  {
    title: "Programming",
    description: "Website and Mobile Programming",
    subcategories: [
      {
        title: "Web Development",
        description: "Learn modern web development",
      },
      {
        title: "Mobile Development",
        description: "Build iOS and Android apps",
      },
      {
        title: "Game Development",
        description: "Create engaging games",
      },
    ],
  },
  {
    title: "Business & Marketing",
    description: "Website and Mobile Programming",
  },
  {
    title: "Photo & Video",
    description: "Website and Mobile Programming",
  },
  {
    title: "Writing",
    description: "Website and Mobile Programming",
  },
]

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  return (
    <>
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span className="text-white font-semibold">Eduverse</span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-white">
                  <span>Browse</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] p-0" align="start">
                  <div className="grid grid-cols-1 gap-0">
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.title} className="p-0 focus:bg-gray-100">
                        <Link
                          href={`/category/${category.title.toLowerCase()}`}
                          className="flex items-center justify-between w-full p-4 hover:bg-gray-50"
                        >
                          <div>
                            <h3 className="text-base font-semibold">{category.title}</h3>
                            <p className="text-sm text-gray-500">{category.description}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </Link>
                        {category.subcategories && (
                          <div
                            className={cn(
                              "absolute left-[100%] top-0 w-[300px] bg-white rounded-r-md shadow-lg",
                              "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
                            )}
                          >
                            {category.subcategories.map((sub) => (
                              <Link
                                key={sub.title}
                                href={`/category/${category.title.toLowerCase()}/${sub.title.toLowerCase()}`}
                                className="block p-4 hover:bg-gray-50"
                              >
                                <h4 className="font-medium">{sub.title}</h4>
                                <p className="text-sm text-gray-500">{sub.description}</p>
                              </Link>
                            ))}
                          </div>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center space-x-6">
              {isLoggedIn ? (
                <Link href="/instructor/dashboard" className="text-white hover:text-gray-300 transition-colors">
                  Instructor Dashboard
                </Link>
              ) : (
                <Link href="/become-instructor" className="text-white hover:text-gray-300 transition-colors">
                  Become Instructor
                </Link>
              )}

              <button className="text-white hover:text-gray-300">
                <Link href="/my-cart">
                  <ShoppingCart className="h-5 w-5" />
                </Link>
              </button>

              {isLoggedIn ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>{user?.name?.[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[280px] p-0">
                      <div className="p-4 border-b">
                        <h3 className="font-semibold text-lg">{user?.name}</h3>
                        <p className="text-gray-500 text-sm">{user?.email}</p>
                      </div>
                      <div className="p-2">
                        <DropdownMenuItem asChild>
                          <Link href="/my-courses?tab=all">My Courses</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/my-courses?tab=wishlist">Wishlist</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/my-cart">My Cart</Link>
                        </DropdownMenuItem>
                      </div>
                      <div className="border-t p-2">
                        <DropdownMenuItem asChild>
                          <Link href="/account/settings/notifications">Notifications</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/account/settings">Account Settings</Link>
                        </DropdownMenuItem>
                      </div>
                      <div className="border-t p-2">
                        <DropdownMenuItem onClick={logout} className="text-red-500 focus:text-red-500">
                          Logout
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowSignUpModal(true)}
                    className="px-6 py-2 rounded-full bg-[#3dcbb1] text-white hover:bg-[#35b69e] transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onOpenSignUp={() => {
          setShowLoginModal(false)
          setShowSignUpModal(true)
        }}
      />
      <SignUpModal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onOpenLogin={() => {
          setShowSignUpModal(false)
          setShowLoginModal(true)
        }}
      />
      <PersonalizationModal />
    </>
  )
}
