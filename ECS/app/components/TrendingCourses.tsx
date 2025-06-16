import TrendingCourseCard from './TrendingCourseCard'
import Link from 'next/link'

const trendingCourses = [
  {
    id: '1',
    title: "Masterclass in Design Thinking, Innovation & Creativity",
    instructor: "Ana Kursova",
    description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    image: "/placeholder.svg?height=400&width=800",
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90,
    isFeatureCard: true
  },
  {
    id: '2',
    title: "MOBILE DEV REACT NATIVE",
    instructor: "Kitani Studio",
    description: "Learn how to build mobile applications using React Native framework",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90
  },
  {
    id: '3',
    title: "VUE JAVASCRIPT COURSE",
    instructor: "Kitani Studio",
    description: "Master Vue.js and build modern, reactive web applications",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90
  },
  {
    id: '4',
    title: "WEBSITE DEV ZERO TO HERO",
    instructor: "Kitani Studio",
    description: "Comprehensive guide to modern web development techniques",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90
  },
  {
    id: '5',
    title: "LEARN PROGRAMMING IN 30 DAYS",
    instructor: "Kitani Studio",
    description: "Accelerated programming course for beginners",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.90
  }
]

export default function TrendingCourses() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Trending Courses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <TrendingCourseCard
            {...trendingCourses[0]}
            href={`/courses/${trendingCourses[0].id}/preview`}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingCourses.slice(1).map((course) => (
            <TrendingCourseCard
              key={course.id}
              {...course}
              href={`/courses/${course.id}/preview`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
