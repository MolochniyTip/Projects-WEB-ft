'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/store/auth'
import BecomeInstructorContent from './components/BecomeInstructorContent'

export default function BecomeInstructor() {
  const { isLoggedIn, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn && user?.role === 'instructor') {
      router.push('/instructor/dashboard')
    }
  }, [isLoggedIn, user, router])

  return <BecomeInstructorContent />
}
