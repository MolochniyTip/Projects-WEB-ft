import { Star, Clock, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
  title: string
  instructor: string
  description: string
  image: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  badges: string[]
  duration?: string
  students?: number
  lessons?: number
  href?: string
}

export default function CourseCard({
  title,
  instructor,
  description,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  badges,
  duration = "10h 30m",
  students = 1240,
  lessons = 24,
  href = "#",
}: CourseCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl overflow-hidden h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
                  index === 0
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                    : "bg-gradient-to-r from-pink-500 to-rose-500"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Discount badge */}
          {originalPrice > price && (
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                {Math.round((1 - price / originalPrice) * 100)}% OFF
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-3">
              by <span className="text-indigo-600 font-medium">{instructor}</span>
            </p>
            <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>

            {/* Course stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>{lessons} lekcji</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Users className="h-4 w-4 mr-1" />
                <span>{students}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill={i < Math.floor(rating) ? "currentColor" : "none"}
                />
              ))}
              <span className="text-gray-600 text-sm ml-1">({reviews})</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-lg text-indigo-700">${price}</span>
              {originalPrice > price && (
                <span className="text-gray-400 line-through text-sm ml-2">${originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
