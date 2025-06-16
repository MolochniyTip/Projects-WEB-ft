import { ChevronRight } from 'lucide-react'

const categories = [
  {
    title: 'Design',
    description: 'All About Design Course',
    subcategories: ['UI/UX Design', 'Graphic Design', 'Web Design']
  },
  {
    title: 'Programming',
    description: 'Website and Mobile Programming',
    subcategories: ['Web Development', 'Mobile Development', 'Game Development']
  },
  {
    title: 'Business & Marketing',
    description: 'Website and Mobile Programming',
    subcategories: ['Digital Marketing', 'SEO', 'Social Media Marketing']
  },
  {
    title: 'Photo & Video',
    description: 'Website and Mobile Programming',
    subcategories: ['Photography', 'Video Editing', 'Animation']
  }
]

export default function BrowseMenu() {
  return (
    <>
      {categories.map((category) => (
        <div
          key={category.title}
          className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-500 mt-1">{category.description}</p>
            </div>
            <ChevronRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      ))}
    </>
  )
}
