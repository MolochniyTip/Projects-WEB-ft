export default function StatisticsSection() {
  const stats = [
    { value: "50M+", label: "Students Worldwide" },
    { value: "65K+", label: "Instructors" },
    { value: "70+", label: "Languages" },
    { value: "800M+", label: "Course Enrollments" }
  ]

  return (
    <section className="py-16 bg-[#3dcbb1]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
