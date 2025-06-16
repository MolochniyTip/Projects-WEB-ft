import { Camera, Edit3, Rocket, MessageCircle } from 'lucide-react'

const steps = [
  { icon: Edit3, title: "Plan Your Course", description: "Outline your course content and learning objectives." },
  { icon: Camera, title: "Create Engaging Content", description: "Record high-quality video lectures and develop course materials." },
  { icon: Rocket, title: "Launch and Promote", description: "Publish your course and leverage our marketing tools to reach students." },
  { icon: MessageCircle, title: "Engage and Support", description: "Interact with your students and provide ongoing support." }
]

export default function CourseCreationProcess() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Course Creation Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3dcbb1] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
