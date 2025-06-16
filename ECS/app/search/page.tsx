'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

interface Course {
  id: string
  title: string
  instructor: string
  description: string
  image: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  badges: string[]
  category: string
  duration: string
  level: string
}

const courses: Course[] = [
  {
    id: '1',
    title: "UI DESIGN FOR BEGINNERS",
    instructor: "Kitani Studio",
    description: "Learn the fundamentals of UI design and create beautiful interfaces",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    reviews: 5800,
    price: 24.92,
    originalPrice: 32.90,
    badges: ['Best Seller', '20% OFF'],
    category: 'Design',
    duration: '3-5 Hours',
    level: 'Beginner'
  },
  {
    id: '2',
    title: "MOBILE DEV REACT NATIVE",
    instructor: "Kitani Studio",
    description: "Build native mobile apps using React Native framework",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    reviews: 1200,
    price: 29.99,
    originalPrice: 39.99,
    badges: ['Best Seller', '20% OFF'],
    category: 'Programming',
    duration: '6-12 Hours',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: "VUE JAVASCRIPT COURSE",
    instructor: "Kitani Studio",
    description: "Master Vue.js and build modern, reactive web applications",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.6,
    reviews: 3500,
    price: 19.99,
    originalPrice: 29.99,
    badges: ['Hot & New'],
    category: 'Programming',
    duration: '8-10 Hours',
    level: 'Intermediate'
  },
  {
    id: '4',
    title: "ADVANCED CSS AND SASS",
    instructor: "Web Design Masters",
    description: "Take your CSS skills to the next level with advanced techniques and Sass",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    reviews: 2800,
    price: 34.99,
    originalPrice: 49.99,
    badges: ['Bestseller'],
    category: 'Design',
    duration: '10-12 Hours',
    level: 'Advanced'
  },
  {
    id: '5',
    title: "PYTHON FOR DATA SCIENCE",
    instructor: "Data Wizards",
    description: "Learn Python programming for data analysis and machine learning",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
    reviews: 6200,
    price: 39.99,
    originalPrice: 59.99,
    badges: ['Highest Rated'],
    category: 'Data Science',
    duration: '15-20 Hours',
    level: 'Intermediate'
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const categoryParam = searchParams.get('category')
  const topicParam = searchParams.get('topic')

  const [selectedRating, setSelectedRating] = useState<string[]>([])
  const [selectedDuration, setSelectedDuration] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('popular')

  // Initialize filters based on URL parameters
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam])
    }
  }, [categoryParam])

  // Filter courses based on search parameters
  const filteredCourses = courses.filter(course => {
    if (query && !course.title.toLowerCase().includes(query.toLowerCase())) {
      return false
    }
    if (categoryParam && !course.category.toLowerCase().includes(categoryParam.toLowerCase())) {
      return false
    }
    if (selectedRating.length && !selectedRating.includes(Math.floor(course.rating).toString())) {
      return false
    }
    if (selectedDuration.length && !selectedDuration.includes(course.duration)) {
      return false
    }
    if (selectedCategories.length && !selectedCategories.includes(course.category)) {
      return false
    }
    if (selectedLevel.length && !selectedLevel.includes(course.level)) {
      return false
    }
    return true
  })

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Filter</h2>
              <button className="text-[#3dcbb1] text-sm hover:underline">
                Clear
              </button>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Rating</h3>
              <div className="space-y-2">
                {[
                  { label: '4.5 & up', value: '5', count: '5.8K' },
                  { label: '4.0 & up', value: '4', count: '1.2K' },
                  { label: '3.5 & up', value: '3', count: '867' },
                ].map((rating) => (
                  <label key={rating.value} className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedRating.includes(rating.value)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedRating([...selectedRating, rating.value])
                        } else {
                          setSelectedRating(selectedRating.filter(r => r !== rating.value))
                        }
                      }}
                    />
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < parseInt(rating.value)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">({rating.count})</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Video Duration Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Video Duration</h3>
              <div className="space-y-2">
                {[
                  { label: '0-2 Hours', count: '9.4K' },
                  { label: '3-5 Hours', count: '4.1K' },
                  { label: '6-12 Hours', count: '3.8K' },
                  { label: '12+ Hours', count: '1K' },
                ].map((duration) => (
                  <label key={duration.label} className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedDuration.includes(duration.label)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedDuration([...selectedDuration, duration.label])
                        } else {
                          setSelectedDuration(selectedDuration.filter(d => d !== duration.label))
                        }
                      }}
                    />
                    <span className="flex-grow text-gray-700">{duration.label}</span>
                    <span className="text-gray-500 text-sm">({duration.count})</span>
                  </label>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Categories Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
              <div className="space-y-2">
                {[
                  { label: 'Design', count: '3.2K' },
                  { label: 'Programming', count: '1.4K' },
                  { label: 'Data Science', count: '809' },
                  { label: 'Business', count: '548' },
                  { label: 'Marketing', count: '1.9K' },
                ].map((category) => (
                  <label key={category.label} className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedCategories.includes(category.label)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCategories([...selectedCategories, category.label])
                        } else {
                          setSelectedCategories(selectedCategories.filter(c => c !== category.label))
                        }
                      }}
                    />
                    <span className="flex-grow text-gray-700">{category.label}</span>
                    <span className="text-gray-500 text-sm">({category.count})</span>
                  </label>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Level Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Level</h3>
              <div className="space-y-2">
                {[
                  { label: 'All Levels' },
                  { label: 'Beginner' },
                  { label: 'Intermediate' },
                  { label: 'Advanced' },
                ].map((level) => (
                  <label key={level.label} className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedLevel.includes(level.label)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedLevel([...selectedLevel, level.label])
                        } else {
                          setSelectedLevel(selectedLevel.filter(l => l !== level.label))
                        }
                      }}
                    />
                    <span className="text-gray-700">{level.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold text-gray-900">
                {query ? (
                  `Showing results for "${query}"`
                ) : (
                  `Showing ${filteredCourses.length} courses`
                )}
              </h1>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="highest-rated">Highest Rated</SelectItem>
                  <SelectItem value="lowest-price">Lowest Price</SelectItem>
                  <SelectItem value="highest-price">Highest Price</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Link 
                  key={course.id} 
                  href={`/courses/${course.id}/preview`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="w-full aspect-[2/1] object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {course.badges.map((badge, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
                            index === 0 ? 'bg-[#3dcbb1]' : 'bg-[#a04ae3]'
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-gray-600 text-sm">({course.reviews})</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg">${course.price}</span>
                        <span className="text-gray-400 line-through text-sm ml-2">
                          ${course.originalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline">
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  className={page === 1 ? "bg-[#3dcbb1] hover:bg-[#35b69e]" : ""}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-16 bg-[#1b283f] py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-white">Join Klevr now to get 35% off</h2>
              <p className="text-gray-400">
                With our responsive themes and mobile and desktop apps,
                <br />enjoy a seamless experience on any device so will your blog the best visitors
              </p>
            </div>
            <Button className="bg-[#3dcbb1] hover:bg-[#35b69e]">
              Join Klevr
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
