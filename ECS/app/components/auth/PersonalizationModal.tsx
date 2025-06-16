'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from 'lucide-react'
import { useState } from "react"
import { useAuth } from "@/app/store/auth"

const categories = [
  { id: 'design', name: 'Design', image: '/categories/design.jpg' },
  { id: 'programming', name: 'Programming', image: '/categories/programming.jpg' },
  { id: 'finance', name: 'Finance', image: '/categories/finance.jpg' },
  { id: 'marketing', name: 'Marketing', image: '/categories/marketing.jpg' },
  { id: 'music', name: 'Music', image: '/categories/music.jpg' },
  { id: 'writing', name: 'Writing', image: '/categories/writing.jpg' },
  { id: 'film', name: 'Film', image: '/categories/film.jpg' },
  { id: 'photography', name: 'Photography', image: '/categories/photography.jpg' },
]

export default function PersonalizationModal() {
  const { showPersonalization, setShowPersonalization, updateCategories } = useAuth()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId)
      }
      if (prev.length < 3) {
        return [...prev, categoryId]
      }
      return prev
    })
  }

  const handleDone = () => {
    if (selectedCategories.length === 3) {
      updateCategories(selectedCategories)
    }
  }

  return (
    <Dialog open={showPersonalization} onOpenChange={setShowPersonalization}>
      <DialogContent className="sm:max-w-[800px] p-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Pick 3 categories you want to explore
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.id)
            return (
              <div
                key={category.id}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => toggleCategory(category.id)}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    {category.name}
                  </span>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#3dcbb1] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <Button
          onClick={handleDone}
          disabled={selectedCategories.length !== 3}
          className="w-full h-12 text-base bg-[#3dcbb1] hover:bg-[#35b69e] disabled:opacity-50"
        >
          Done
        </Button>
      </DialogContent>
    </Dialog>
  )
}
