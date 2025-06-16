import CourseCard from "./CourseCard"

export default function BrowseCourses() {
  const courses = [
    {
      id: "1",
      title: "UI DESIGN FOR BEGINNERS",
      instructor: "Kitani Studio",
      description: "Learn the fundamentals of UI design and create beautiful interfaces",
      image: "/placeholder.svg?height=200&width=400",
      rating: 4.5,
      reviews: 1200,
      price: 24.92,
      originalPrice: 32.9,
      badges: ["Best Seller", "20% OFF"],
      duration: "8h 45m",
      students: 1845,
      lessons: 32,
    },
    {
      id: "2",
      title: "VUE JAVASCRIPT COURSE",
      instructor: "Kitani Studio",
      description: "Master Vue.js and build modern, reactive web applications",
      image: "/placeholder.svg?height=200&width=400",
      rating: 4.5,
      reviews: 1200,
      price: 24.92,
      originalPrice: 32.9,
      badges: ["Best Seller", "20% OFF"],
      duration: "12h 30m",
      students: 2340,
      lessons: 45,
    },
    {
      id: "3",
      title: "MOBILE DEV REACT NATIVE",
      instructor: "Kitani Studio",
      description: "Build native mobile apps using React Native framework",
      image: "/placeholder.svg?height=200&width=400",
      rating: 4.5,
      reviews: 1200,
      price: 24.92,
      originalPrice: 32.9,
      badges: ["Best Seller", "20% OFF"],
      duration: "15h 20m",
      students: 1560,
      lessons: 38,
    },
    {
      id: "4",
      title: "WEBSITE DEV ZERO TO HERO",
      instructor: "Kitani Studio",
      description: "Complete guide to modern web development",
      image: "/placeholder.svg?height=200&width=400",
      rating: 4.5,
      reviews: 1200,
      price: 24.92,
      originalPrice: 32.9,
      badges: ["Best Seller", "20% OFF"],
      duration: "20h 15m",
      students: 3120,
      lessons: 64,
    },
  ]

  return (
    <div className="relative">
      {/* Category Selection */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        <button className="px-6 py-2 rounded-full bg-[#3dcbb1] text-white font-medium min-w-max">All Categories</button>
        <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 min-w-max">
          Design
        </button>
        <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 min-w-max">
          Development
        </button>
        <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 min-w-max">
          Business
        </button>
        <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 min-w-max">
          Marketing
        </button>
        <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 min-w-max">
          Photography
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} href={`/courses/${course.id}/preview`} />
        ))}
      </div>
    </div>
  )
}
