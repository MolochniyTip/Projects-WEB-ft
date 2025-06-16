import SearchBar from "./components/SearchBar"
import PromoSection from "./components/PromoSection"
import WebinarCard from "./components/WebinarCard"
import BrowseCourses from "./components/BrowseCourses"
import PopularInstructors from "./components/PopularInstructors"
import TrendingCourses from "./components/TrendingCourses"

const upcomingWebinars = [
  {
    id: "1",
    title: "IOS 13 SWIFT 5 IOS DEVELOPMENT",
    instructor: "Kitani Studio",
    description: "Learn iOS development with the latest Swift 5 and iOS 13 features",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    reviews: 800,
    price: 24.92,
    originalPrice: 32.9,
    date: "15 Lip 2023",
    time: "14:00",
    duration: "90 min",
    attendees: 240,
    techIcons: ["/placeholder.svg?height=16&width=16"],
  },
  {
    id: "2",
    title: "WEBSITE DEV ZERO TO HERO",
    instructor: "Kitani Studio",
    description: "Comprehensive guide to modern web development techniques",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 1200,
    price: 24.92,
    originalPrice: 32.9,
    date: "18 Lip 2023",
    time: "16:30",
    duration: "120 min",
    attendees: 320,
  },
  {
    id: "3",
    title: "FULL STACK DEVELOPMENT",
    instructor: "Kitani Studio",
    description: "Master both frontend and backend development",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 950,
    price: 24.92,
    originalPrice: 32.9,
    date: "20 Lip 2023",
    time: "10:00",
    duration: "180 min",
    attendees: 180,
    techIcons: [
      "/placeholder.svg?height=16&width=16",
      "/placeholder.svg?height=16&width=16",
      "/placeholder.svg?height=16&width=16",
    ],
  },
  {
    id: "4",
    title: "LEARN PROGRAMMING IN 30 DAYS",
    instructor: "Kitani Studio",
    description: "Accelerated programming course for beginners",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    reviews: 750,
    price: 24.92,
    originalPrice: 32.9,
    date: "25 Lip 2023",
    time: "19:00",
    duration: "60 min",
    attendees: 420,
    techIcons: ["/placeholder.svg?height=16&width=16", "/placeholder.svg?height=16&width=16"],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Student learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Learn something new everyday.</h1>
          <p className="text-xl text-gray-300 mb-32">Become professionals and ready to join the world.</p>
        </div>

        {/* Search Bar overlapping the hero */}
        <div className="absolute -bottom-24 left-0 right-0 z-20 px-4">
          <SearchBar />
        </div>
      </section>

      {/* Browse Courses - adjusted margin to account for search bar overlap */}
      <section className="mt-32 container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Browse Our Top Courses</h2>
        <BrowseCourses />
      </section>

      {/* First Promo Section */}
      <PromoSection />

      {/* Trending Courses */}
      <TrendingCourses />

      {/* Upcoming Webinars */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Upcoming Webinars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingWebinars.map((webinar) => (
            <WebinarCard key={webinar.id} {...webinar} />
          ))}
        </div>
      </section>

      {/* Popular Instructors */}
      <PopularInstructors />

      {/* Second Promo Section */}
      <PromoSection />
    </div>
  )
}
