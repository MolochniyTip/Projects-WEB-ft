import InstructorCard from './InstructorCard'

export default function PopularInstructors() {
  const instructors = [
    {
      name: "Alexander Bastian",
      role: "Expert Mobile Engineer",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Labie Carthaline",
      role: "Marketing Specialist",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Jonathan Doe",
      role: "Financial Strategiest",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Kitani Sarasvati",
      role: "Film Maker & Director",
      image: "/placeholder.svg?height=400&width=400"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">We know the best things for You.</h2>
        <p className="text-gray-600">We know the best things for You.  Top picks for You.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.name}
            name={instructor.name}
            role={instructor.role}
            image={instructor.image}
          />
        ))}
      </div>
    </section>
  )
}
