'use client'

import { Camera } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAuth } from '@/app/store/auth'
import { useState } from 'react'

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'pl', label: 'Polish' },
]

export default function ProfileSettings() {
  const { user, updateProfile } = useAuth()
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    headline: user?.headline || '',
    language: user?.language || 'en',
    link: user?.link || '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      headline: formData.headline,
      language: formData.language,
      link: formData.link,
    })
  }

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-xl font-semibold mb-6">Profile</h2>
      
      <div className="relative w-32 h-32 mx-auto mb-8">
        <img
          src={user?.avatar || "/placeholder.svg?height=128&width=128"}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
        <button className="absolute bottom-0 right-0 p-2 bg-[#3dcbb1] rounded-full hover:bg-[#35b69e] transition-colors">
          <Camera className="w-5 h-5 text-white" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm text-gray-600">
              First Name
            </label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm text-gray-600">
              Last Name
            </label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="headline" className="text-sm text-gray-600">
            Headline
          </label>
          <Input
            id="headline"
            value={formData.headline}
            onChange={(e) => setFormData(prev => ({ ...prev, headline: e.target.value }))}
            placeholder="Add a professional headline"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="language" className="text-sm text-gray-600">
            Language
          </label>
          <Select
            value={formData.language}
            onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="link" className="text-sm text-gray-600">
            Link
          </label>
          <Input
            id="link"
            value={formData.link}
            onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
            placeholder="Add your website"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full md:w-auto px-8 h-12 bg-[#3dcbb1] hover:bg-[#35b69e] text-white"
        >
          Save Changes
        </Button>
      </form>
    </div>
  )
}
