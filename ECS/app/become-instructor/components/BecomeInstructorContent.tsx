import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Users, DollarSign } from 'lucide-react'
import InstructorTestimonial from './InstructorTestimonial'
import FAQSection from './FAQSection'
import StatisticsSection from './StatisticsSection'
import CourseCreationProcess from './CourseCreationProcess'
import { useState } from 'react'
import SignUpModal from '@/app/components/auth/SignUpModal'

export default function BecomeInstructorContent() {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#080e2f] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Lives Through Teaching</h1>
              <p className="text-xl mb-8">Join our global community of instructors and empower learners worldwide with your expertise.</p>
              <Button size="lg" className="bg-[#3dcbb1] hover:bg-[#35b69e] text-white" onClick={() => setShowSignUpModal(true)}>
                Start Your Teaching Journey
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Become an Instructor"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <StatisticsSection />

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Teach with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Global Reach", description: "Share your expertise with millions of learners from over 190 countries." },
              { icon: DollarSign, title: "Earn Revenue", description: "Generate a steady income stream through our competitive revenue sharing model." },
              { icon: Users, title: "Supportive Community", description: "Connect with fellow instructors and receive guidance from our dedicated support team." }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                <benefit.icon className="w-12 h-12 text-[#3dcbb1] mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseCreationProcess />

      <InstructorTestimonial />

      <FAQSection />

      {/* CTA Section */}
      <section className="bg-[#1b283f] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Inspire the Next Generation of Learners?</h2>
          <p className="text-xl mb-8">Join our community of expert instructors and make a lasting impact on students worldwide.</p>
          <Button size="lg" className="bg-[#3dcbb1] hover:bg-[#35b69e] text-white" onClick={() => setShowSignUpModal(true)}>
            Apply to Become an Instructor
          </Button>
        </div>
      </section>
      <SignUpModal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onOpenLogin={() => {
          setShowSignUpModal(false)
          // Tutaj możesz dodać logikę otwierania modalu logowania, jeśli jest potrzebna
        }}
        isInstructor={true}
      />
    </div>
  )
}
