'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  role?: 'student' | 'instructor'
}

interface ProfileUpdate {
  name: string
  headline?: string
  language?: string
  link?: string
}

interface AuthStore {
  user: User | null
  isLoggedIn: boolean
  showPersonalization: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, firstName: string, lastName: string, isInstructor: boolean) => Promise<boolean>
  logout: () => void
  setShowPersonalization: (show: boolean) => void
  updateCategories: (categories: string[]) => void
  updateProfile: (update: ProfileUpdate) => void
}

// Test users database
const users = [
  {
    id: '1',
    email: 'wp@wp.pl',
    password: '123',
    firstName: 'Test',
    lastName: 'User'
  }
]

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      showPersonalization: false,
      login: async (email: string, password: string) => {
        const user = users.find(u => u.email === email && u.password === password)
        if (user) {
          const { password: _, ...userWithoutPassword } = user
          set({ user: userWithoutPassword, isLoggedIn: true })
          return true
        }
        return false
      },
      signup: async (email: string, password: string, firstName: string, lastName: string, isInstructor: boolean = false) => {
        const newUser = {
          id: String(users.length + 1),
          email,
          password,
          firstName,
          lastName,
          role: isInstructor ? 'instructor' : 'student'
        }
        users.push(newUser)
        const { password: _, ...userWithoutPassword } = newUser
        set({ 
          user: userWithoutPassword, 
          isLoggedIn: true,
          showPersonalization: !isInstructor
        })
        return true
      },
      logout: () => {
        set({ user: null, isLoggedIn: false })
      },
      setShowPersonalization: (show: boolean) => {
        set({ showPersonalization: show })
      },
      updateCategories: (categories: string[]) => {
        set(state => ({
          user: state.user ? { ...state.user, categories } : null,
          showPersonalization: false
        }))
      },
      updateProfile: (update: ProfileUpdate) => {
        set(state => ({
          user: state.user ? { ...state.user, ...update } : null
        }))
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)
