'use client'

import { useState } from 'react'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

interface AuthModalsProps {
  initialModal?: 'login' | 'signup' | null
}

export default function AuthModals({ initialModal = null }: AuthModalsProps) {
  const [showLoginModal, setShowLoginModal] = useState(initialModal === 'login')
  const [showSignUpModal, setShowSignUpModal] = useState(initialModal === 'signup')

  const openLoginModal = () => {
    setShowLoginModal(true)
    setShowSignUpModal(false)
  }

  const openSignUpModal = () => {
    setShowSignUpModal(true)
    setShowLoginModal(false)
  }

  return (
    <>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onOpenSignUp={openSignUpModal}
      />
      <SignUpModal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onOpenLogin={openLoginModal}
      />
    </>
  )
}
