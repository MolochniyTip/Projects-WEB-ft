'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function PasswordSettings() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password update
  }

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-xl font-semibold mb-6">Password</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div className="space-y-2">
          <label htmlFor="currentPassword" className="text-sm text-gray-600">
            Current Password
          </label>
          <Input
            id="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={(e) => setFormData(prev => ({ ...prev, currentPassword: e.target.value }))}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="newPassword" className="text-sm text-gray-600">
            New Password
          </label>
          <Input
            id="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={(e) => setFormData(prev => ({ ...prev, newPassword: e.target.value }))}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm text-gray-600">
            Confirm New Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full md:w-auto px-8 h-12 bg-[#3dcbb1] hover:bg-[#35b69e] text-white"
        >
          Update Password
        </Button>
      </form>
    </div>
  )
}
