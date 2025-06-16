import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface TrendingCourseCardProps {
  title: string
  instructor: string
  description: string
  image: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  isFeatureCard?: boolean
  href: string
}

export default function TrendingCourseCard({
  title,
  instructor,
  description,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  isFeatureCard = false,
  href
}: TrendingCourseCardProps) {
  if (isFeatureCard) {
    return (
      <Link href={href} className="relative h-full rounded-3xl overflow-hidden group block">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
          <Image
            src={image}
            alt={title}
            width={800}
            height={800}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="relative z-20 flex flex-col h-full p-8">
          <div className="flex-grow">
            <h3 className="text-white text-lg mb-2">{instructor}</h3>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              {title}
            </h2>
            <p className="text-white/80 mb-4">{description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                    fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
                  />
                ))}
                <span className="text-white/80 text-sm">({reviews})</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="font-bold">${price}</span>
                <span className="text-white/60 line-through text-sm">
                  ${originalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="bg-white rounded-3xl overflow-hidden h-full shadow-lg block group">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-[#3dcbb1] rounded-full text-white text-xs font-medium">
            Best Seller
          </span>
          <span className="px-3 py-1 bg-purple-500 rounded-full text-white text-xs font-medium">
            20% OFF
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">by {instructor}</p>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="text-gray-600 text-sm">({reviews})</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg">${price}</span>
            <span className="text-gray-400 line-through text-sm ml-2">
              ${originalPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
