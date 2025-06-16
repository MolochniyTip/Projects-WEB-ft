'use client'

import { useState } from 'react'
import { Star, Clock, BarChart, PlayCircle, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaidCoursePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('curriculum')
  const [activeLesson, setActiveLesson] = useState('1-1')

  // This would typically come from an API call based on the course ID
  const course = {
    id: params.id,
    title: 'Advanced Web Development Techniques',
    instructor: 'Jane Doe',
    rating: 4.8,
    reviews: 1234,
    students: 5678,
    lastUpdated: 'June 2023',
    description: 'Master the latest web development techniques and tools in this comprehensive course.',
    progress: 25,
    modules: [
      {
        title: 'Introduction to Advanced Web Development',
        lessons: [
          { id: '1-1', title: 'Course Overview', duration: '5:00', completed: true },
          { id: '1-2', title: 'Setting Up Your Development Environment', duration: '15:00', completed: true },
          { id: '1-3', title: 'Modern JavaScript Features', duration: '25:00', completed: false },
        ],
      },
      {
        title: 'React and Redux Deep Dive',
        lessons: [
          { id: '2-1', title: 'Advanced React Hooks', duration: '30:00', completed: false },
          { id: '2-2', title: 'Redux Architecture', duration: '40:00', completed: false },
          { id: '2-3', title: 'Middleware and Async Actions', duration: '35:00', completed: false },
        ],
      },
      // More modules...
    ],
  }

  const currentLesson = course.modules
    .flatMap(module => module.lessons)
    .find(lesson => lesson.id === activeLesson)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-xl text-gray-600">Instructor: {course.instructor}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden mb-6">
              <video className="w-full" controls>
                <source src={`/lesson-${activeLesson}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                {currentLesson ? currentLesson.title : 'Select a lesson'}
              </h2>
              <p>Lesson content and description would go here.</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="notes">My Notes</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                {course.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson.id}
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                            activeLesson === lesson.id ? 'bg-[#3dcbb1] text-white' : 'bg-white hover:bg-gray-100'
                          }`}
                          onClick={() => setActiveLesson(lesson.id)}
                        >
                          <div className="flex items-center">
                            {lesson.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            ) : (
                              <PlayCircle className="w-5 h-5 mr-2" />
                            )}
                            <span>{lesson.title}</span>
                          </div>
                          <span>{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="overview">
                <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
                <p>{course.description}</p>
              </TabsContent>
              <TabsContent value="notes">
                <h2 className="text-2xl font-semibold mb-4">My Notes</h2>
                <p>Your course notes would appear here.</p>
              </TabsContent>
              <TabsContent value="announcements">
                <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
                <p>Course announcements would be listed here.</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
              <Progress value={course.progress} className="mb-4" />
              <p className="text-center mb-6">{course.progress}% complete</p>
              <Button className="w-full mb-4 bg-[#3dcbb1] hover:bg-[#35b69e]">
                Continue Learning
              </Button>
              <h3 className="font-semibold mb-2">Course Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>10 hours on-demand video</span>
                </li>
                <li className="flex items-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  <span>5 coding exercises</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
