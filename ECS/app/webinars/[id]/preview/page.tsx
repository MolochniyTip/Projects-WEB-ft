'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, Users, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UnpaidWebinarPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  // This would typically come from an API call based on the webinar ID
  const webinar = {
    id: params.id,
    title: 'Mastering Responsive Web Design',
    instructor: 'John Smith',
    date: 'July 15, 2023',
    time: '2:00 PM EST',
    duration: '90 minutes',
    attendees: 500,
    rating: 4.7,
    reviews: 230,
    description: 'Learn the latest techniques and best practices for creating responsive web designs that work seamlessly across all devices.',
    whatYoullLearn: [
      'Understanding responsive design principles',
      'Mobile-first approach',
      'Flexible grids and layouts',
      'Responsive images and media',
      'CSS media queries and breakpoints',
    ],
    requirements: [
      'Basic understanding of HTML and CSS',
      'Familiarity with web design concepts',
      'A modern web browser',
    ],
  }

  const handleRegister = () => {
    // This would typically handle the registration process
    // For now, we'll just redirect to the checkout page
    router.push('/checkout')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{webinar.title}</h1>
            <p className="text-xl text-gray-600 mb-4">Presenter: {webinar.instructor}</p>
            <div className="flex flex-wrap items-center space-x-4 mb-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-1" />
                <span>{webinar.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                <span>{webinar.time}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span>{webinar.attendees} attendees</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{webinar.rating}</span>
                <span className="ml-1">({webinar.reviews} reviews)</span>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="presenter">Presenter</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <h2 className="text-2xl font-semibold mb-4">About This Webinar</h2>
                <p className="mb-6">{webinar.description}</p>
                <h3 className="text-xl font-semibold mb-2">What you'll learn</h3>
                <ul className="list-disc pl-5 mb-6">
                  {webinar.whatYoullLearn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5">
                  {webinar.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="presenter">
                <h2 className="text-2xl font-semibold mb-4">About the Presenter</h2>
                <p>Information about {webinar.instructor} would go here.</p>
              </TabsContent>
              <TabsContent value="reviews">
                <h2 className="text-2xl font-semibold mb-4">Attendee Reviews</h2>
                <p>Review content would go here.</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Webinar preview"
                className="w-full rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold mb-4">${webinar.price}</h2>
              <Button onClick={handleRegister} className="w-full mb-4 bg-[#3dcbb1] hover:bg-[#35b69e]">
                Register Now
              </Button>
              <p className="text-center text-sm text-gray-500 mb-4">Satisfaction Guaranteed</p>
              <h3 className="font-semibold mb-2">This webinar includes:</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{webinar.duration} live session</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Q&A with the presenter</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>Certificate of attendance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
