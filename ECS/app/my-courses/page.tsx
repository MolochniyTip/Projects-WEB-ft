'use client'

import { useAuth } from '@/app/store/auth'
import { MoreVertical, Star, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import PromoSection from '../components/PromoSection'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  progress: {
    status: 'not-started' | 'in-progress' | 'completed'
    completedVideos?: number
    totalVideos?: number
  }
  techIcons?: string[]
  isWishlisted?: boolean
  type: 'course' | 'webinar'
}

const courses: Course[] = [
  {
    id: '1',
    title: 'WEBSITE DEV ZERO TO HERO',
    instructor: 'Kitani Studio',
    description: 'Comprehensive guide to modern web development techniques',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90,
    progress: {
      status: 'in-progress',
      completedVideos: 4,
      totalVideos: 10
    },
    techIcons: ['/html.svg', '/css.svg', '/js.svg'],
    type: 'course'
  },
  {
    id: '2',
    title: 'MOBILE DEV REACT NATIVE',
    instructor: 'Kitani Studio',
    description: 'Learn how to build mobile applications using React Native framework',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90,
    progress: {
      status: 'not-started'
    },
    techIcons: ['/react.svg'],
    isWishlisted: true,
    type: 'course'
  },
  {
    id: '3',
    title: 'VUE JAVASCRIPT COURSE',
    instructor: 'Kitani Studio',
    description: 'Master Vue.js and build modern, reactive web applications',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90,
    progress: {
      status: 'completed'
    },
    type: 'course'
  },
  {
    id: '4',
    title: 'LEARN PROGRAMMING IN 30 DAYS',
    instructor: 'Kitani Studio',
    description: 'Accelerated programming course for beginners',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90,
    progress: {
      status: 'not-started'
    },
    isWishlisted: true,
    type: 'course'
  },
  {
    id: '5',
    title: 'Mastering Responsive Web Design',
    instructor: 'John Smith',
    description: 'Learn the latest techniques and best practices for creating responsive web designs',
    image: '/placeholder.svg?height=300&width=400',
    rating: 4.7,
    reviews: 950,
    price: 29.99,
    originalPrice: 39.99,
    progress: {
      status: 'in-progress',
      completedVideos: 2,
      totalVideos: 8
    },
    type: 'webinar'
  }
]

export default function MyCourses() {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && ['all', 'not-started', 'ongoing', 'completed', 'wishlist'].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/my-courses?tab=${value}`, undefined, { shallow: true })
  }

  const CourseCard = ({ course, showFullDetails = false }: { course: Course, showFullDetails?: boolean }) => (
    <div className="bg-white rounded-3xl overflow-hidden h-full shadow-lg">
      <Link href={course.type === 'course' ? `/my-courses/${course.id}` : `/my-webinars/${course.id}`} className="block group h-full">
        <div className="relative">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={200}
            className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-white text-xs font-medium bg-[#3dcbb1]">
              {course.type === 'course' ? 'Course' : 'Webinar'}
            </span>
            <span className="px-3 py-1 rounded-full text-white text-xs font-medium bg-[#a04ae3]">
              {course.progress.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="absolute top-3 right-3 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                Add to Favorites
              </DropdownMenuItem>
              <DropdownMenuItem>
                Rate Course
              </DropdownMenuItem>
              <DropdownMenuItem>
                Report
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                Archive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
          
          {showFullDetails && (
            <>
              <p className="text-gray-700 mb-4 line-clamp-2">{course.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(course.rating) ? 'text-[#ffd130]' : 'text-gray-300'
                      }`}
                      fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'}
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
            </>
          )}
          
          {course.progress.status !== 'not-started' && (
            <div className="mt-4 pt-4 border-t">
              {course.progress.status === 'completed' ? (
                <div className="text-[#3dcbb1] text-sm font-medium">
                  Completed!
                </div>
              ) : course.progress.completedVideos && course.progress.totalVideos ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {course.progress.completedVideos}/{course.progress.totalVideos} Videos Completed
                    </span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#3dcbb1] rounded-full"
                      style={{ 
                        width: `${(course.progress.completedVideos / course.progress.totalVideos) * 100}%`
                      }}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          )}
          
          {course.progress.status === 'not-started' && !showFullDetails && (
            <div className="mt-4 pt-4 border-t">
              <div className="text-gray-600 text-sm">
                Not Started
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
          <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 bg-[#3dcbb1] text-white rounded-lg hover:bg-[#35b69e] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Explore Courses
          </Link>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 lg:w-[500px]">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="not-started">Not Started</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="not-started" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses
                .filter(course => course.progress.status === 'not-started')
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="ongoing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses
                .filter(course => course.progress.status === 'in-progress')
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses
                .filter(course => course.progress.status === 'completed')
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="wishlist" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses
                .filter(course => course.isWishlisted)
                .map((course) => (
                  <CourseCard key={course.id} course={course} showFullDetails={true} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <PromoSection />
    </div>
  )
}
