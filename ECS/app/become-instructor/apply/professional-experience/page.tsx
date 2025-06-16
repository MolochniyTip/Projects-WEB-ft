'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProfessionalExperience() {
  const router = useRouter()
  const [experiences, setExperiences] = useState([{ company: '', position: '', duration: '', description: '' }])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const newExperiences = [...experiences]
    newExperiences[index] = { ...newExperiences[index], [name]: value }
    setExperiences(newExperiences)
  }

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: '', position: '', duration: '', description: '' }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the form data to your backend or local storage
    console.log(experiences)
    router.push('/become-instructor/apply/teaching-experience')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Professional Experience</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <Label htmlFor={`company-${index}`}>Company</Label>
              <Input
                id={`company-${index}`}
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div>
              <Label htmlFor={`position-${index}`}>Position</Label>
              <Input
                id={`position-${index}`}
                name="position"
                value={exp.position}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div>
              <Label htmlFor={`duration-${index}`}>Duration</Label>
              <Input
                id={`duration-${index}`}
                name="duration"
                value={exp.duration}
                onChange={(e) => handleChange(index, e)}
                required
                placeholder="e.g., Jan 2020 - Present"
              />
            </div>
            <div>
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(index, e)}
                required
                className="h-24"
              />
            </div>
          </div>
        ))}
        <Button type="button" variant="outline" onClick={handleAddExperience} className="w-full">
          Add Another Experience
        </Button>
        <Button type="submit" className="w-full bg-[#3dcbb1] hover:bg-[#35b69e] text-white">
          Next: Teaching Experience
        </Button>
      </form>
    </div>
  )
}
