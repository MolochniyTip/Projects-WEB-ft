'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, Star, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaidWebinarPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('live')
  const [message, setMessage] = useState('')

  // This would typically come from an API call based on the webinar ID
  const webinar = {
    id: params.id,
    title: 'Mastering Responsive Web Design',
    instructor: 'John Smith',
    date: 'July 15, 2023',
    time: '2:00 PM EST',
    duration: '90 minutes',
    attendees: 500,
    description: 'Learn the latest techniques and best practices for creating responsive web designs that work seamlessly across all devices.',
    status: 'live', // Could be 'upcoming', 'live', or 'ended'
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // This would typically send the message to a backend service
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{webinar.title}</h1>
          <p className="text-xl text-gray-600">Presenter: {webinar.instructor}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden mb-6">
              {webinar.status === 'live' ? (
                <video className="w-full" controls autoPlay>
                  <source src="/live-webinar-stream.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="flex items-center justify-center h-[400px] bg-gray-800 text-white text-2xl">
                  {webinar.status === 'upcoming' ? 'Webinar has not started yet' : 'Webinar has ended'}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex flex-wrap items-center space-x-4 mb-4">
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
              </div>
              <p>{webinar.description}</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="live">Live Chat</TabsTrigger>
                <TabsTrigger value="qa">Q&A</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="live" className="h-[300px] overflow-y-auto bg-white rounded-lg shadow p-4">
                {/* Live chat messages would be displayed here */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                      JS
                    </div>
                    <div>
                      <p className="font-semibold">John Smith</p>
                      <p>Welcome everyone! We'll be starting in a few minutes.</p>
                    </div>
                  </div>
                  {/* More chat messages */}
                </div>
              </TabsContent>
              <TabsContent value="qa" className="h-[300px] overflow-y-auto bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Q&A Session</h2>
                <p>Questions and answers will appear here during the Q&A session.</p>
              </TabsContent>
              <TabsContent value="resources" className="h-[300px] overflow-y-auto bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Webinar Resources</h2>
                <ul className="list-disc pl-5">
                  <li><a href="#" className="text-blue-600 hover:underline">Presentation Slides</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Code Samples</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Additional Reading Materials</a></li>
                </ul>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleSendMessage} className="mt-4 flex">
              <Input
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit" className="bg-[#3dcbb1] hover:bg-[#35b69e]">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send
              </Button>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Webinar Details</h2>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{webinar.date}</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{webinar.time}</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{webinar.attendees} attendees</span>
                </li>
              </ul>
              <Button className="w-full mb-4 bg-[#3dcbb1] hover:bg-[#35b69e]">
                Download Calendar Invite
              </Button>
              <h3 className="font-semibold mb-2">Upcoming Events:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>Q&A Session - 15 minutes before end</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>Feedback Survey - After webinar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
