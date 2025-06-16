"use client"

import { Star, Calendar, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface WebinarCardProps {
  id: string
  title: string
  instructor: string
  description: string
  image: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  date?: string
  time?: string
  duration?: string
  attendees?: number
  techIcons?: string[]
  onClick?: () => void
}

export default function WebinarCard({
  id,
  title,
  instructor,
  description,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  date = "15 Lip 2023",
  time = "14:00",
  duration = "90 min",
  attendees = 240,
  techIcons,
  onClick,
}: WebinarCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden h-full shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
    >
      <Link href={`/webinars/${id}/preview`} className="block h-full">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Live badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-red-600 rounded-full text-white text-xs font-medium flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
              LIVE
            </span>
          </div>

          {/* Date and time */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center">
            <div className="flex items-center text-white text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-white text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{time}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">
            by <span className="text-indigo-600 font-medium">{instructor}</span>
          </p>
          <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>

          {/* Webinar stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Users className="h-4 w-4 mr-1" />
              <span>{attendees}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Star className="h-4 w-4 mr-1 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>

          {techIcons && (
            <div className="flex gap-2 mb-4">
              {techIcons.map((icon, index) => (
                <div key={index} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image
                    src={icon || "/placeholder.svg"}
                    alt="Technology icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
              ))}
            </div>
          )}

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
      </Link>
    </div>
  )
}
