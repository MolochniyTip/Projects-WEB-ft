import Image from 'next/image'
import Link from 'next/link'

interface InstructorCardProps {
  name: string
  role: string
  image: string
}

export default function InstructorCard({ name, role, image }: InstructorCardProps) {
  return (
    <Link href={`/instructor/${name.toLowerCase().replace(' ', '-')}`}>
      <div className="relative group overflow-hidden rounded-2xl aspect-square">
        {/* Image with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <p className="text-gray-200">{role}</p>
        </div>
      </div>
    </Link>
  )
}
