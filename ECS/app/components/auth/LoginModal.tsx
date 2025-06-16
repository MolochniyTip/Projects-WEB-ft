"use client"

import type React from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Apple } from "lucide-react"
import { useAuth } from "@/app/store/auth"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenSignUp: () => void
}

export default function LoginModal({ isOpen, onClose, onOpenSignUp }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()

  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClose()
    onOpenSignUp()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const success = await login(email, password)
    if (success) {
      onClose()
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Decorative Image */}
          <div className="relative hidden md:block">
            <Image src="/auth-background.png" alt="" width={400} height={600} className="h-full w-full object-cover" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/jane-avatar.png" alt="Jane Kitani" width={48} height={48} className="rounded-full" />
                <div>
                  <h3 className="font-semibold">Jane Kitani</h3>
                  <p className="text-sm text-white/80">Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
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
              <span className="text-xl font-semibold">Eduverse</span>
            </div>

            <p className="text-gray-600 mb-6">Join us and get more benefits. We promise to keep your data safely.</p>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full h-12 text-base bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Login
              </Button>
            </form>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or you can</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12 text-base font-normal">
                <Facebook className="w-5 h-5 text-[#1877F2] mr-2" />
                Continue with Facebook
              </Button>
              <Button variant="outline" className="w-full h-12 text-base font-normal">
                <Apple className="w-5 h-5 mr-2" />
                Continue with Apple
              </Button>
              <Button variant="outline" className="w-full h-12 text-base font-normal">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Need an Account?{" "}
                <Link href="#" onClick={handleSignUpClick} className="text-indigo-600 hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
