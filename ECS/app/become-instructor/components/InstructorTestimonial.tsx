import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Development Instructor",
    image: "/placeholder.svg?height=400&width=300",
    quote: "Teaching on this platform has been an incredible experience. I've reached students from all over the world and have been able to build a sustainable income doing what I love. The support from the team has been outstanding, and I'm excited to continue growing my courses here."
  },
  {
    name: "Michael Chen",
    role: "Data Science Instructor",
    image: "/placeholder.svg?height=400&width=300",
    quote: "As a data scientist, I was looking for a way to share my knowledge with a broader audience. This platform has provided me with the tools and reach to do just that. The engagement from students and the impact I've been able to make has been truly rewarding."
  }
]

export default function InstructorTestimonial() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hear from Our Instructors</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={300}
                    height={400}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                </div>
                <div className="p-8">
                  <blockquote className="italic text-gray-600 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
