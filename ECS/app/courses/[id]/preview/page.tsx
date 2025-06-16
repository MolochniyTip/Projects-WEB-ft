'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Star, Clock, BarChart, PlayCircle, MessageSquare, Award, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'


interface Lesson {
  title: string
  duration: string
  isPreview?: boolean
}

interface Chapter {
  title: string
  duration: string
  videos: string
  lessons: Lesson[]
}

interface Review {
  id: number
  user: string
  avatar: string
  rating: number
  comment: string
  date: string
}

interface CourseData {
  id: string
  title: string
  instructor: {
    name: string
    avatar: string
    role: string
    rating: number
    reviews: number
    students: number
  }
  price: {
    current: number
    original: number
    discount: number
  }
  stats: {
    sections: number
    lectures: number
    duration: string
    language: string
  }
  description: string
  chapters: Chapter[]
  reviews: Review[]
}

export default function UnpaidCoursePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('curriculum')
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // This would typically come from an API call based on the course ID
  const course: CourseData = {
    id: params.id,
    title: 'MAKE UBER CLONE APP',
    instructor: {
      name: 'Steven Arnatouvc',
      avatar: '/placeholder.svg?height=64&width=64',
      role: 'Mobile Engineer',
      rating: 4.8,
      reviews: 1812,
      students: 5678,
    },
    price: {
      current: 22.40,
      original: 30.13,
      discount: 20
    },
    stats: {
      sections: 22,
      lectures: 152,
      duration: '21h 33m',
      language: 'English'
    },
    description: 'Vue (pronounced /vju:/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
    chapters: [
      {
        title: 'Chapter 1: Course Overview',
        duration: '28m',
        videos: '1/12 Videos',
        lessons: []
      },
      {
        title: 'Chapter 2: Curriculum',
        duration: '1h 28m',
        videos: '1/12 Videos',
        lessons: [
          { title: 'Installing Vue JS', duration: '10m', isPreview: true },
          { title: 'Understand Vue Components', duration: '59m' },
          { title: 'Vue Templating', duration: '12m' },
          { title: 'Vue Forms', duration: '23m' },
          { title: 'Vue Styling', duration: '57m' },
          { title: 'Vue Routing', duration: '1h 30m' },
          { title: 'Vue Animation', duration: '1h 19m' },
        ]
      },
      {
        title: 'Chapter 3: Components',
        duration: '1h 28m',
        videos: '1/12 Videos',
        lessons: []
      },
      {
        title: 'Chapter 4: Coding',
        duration: '1h 28m',
        videos: '1/12 Videos',
        lessons: []
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Leonardo Da Vinci',
        avatar: '/placeholder.svg?height=40&width=40',
        rating: 5,
        comment: "Loved the course. I've learned some very subtle tecniques, expecially on leaves.",
        date: 'Today'
      },
      {
        id: 2,
        user: 'Titania S',
        avatar: '/placeholder.svg?height=40&width=40',
        rating: 5,
        comment: 'I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio',
        date: 'Today'
      },
      {
        id: 3,
        user: 'Zhirkov',
        avatar: '/placeholder.svg?height=40&width=40',
        rating: 4,
        comment: 'Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.',
        date: 'Today'
      },
      {
        id: 4,
        user: 'Miphoska',
        avatar: '/placeholder.svg?height=40&width=40',
        rating: 4,
        comment: "I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer. I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing.",
        date: 'Today'
      }
    ]
  }

  function handleEnroll(): void {
    setShowConfirmationModal(true);
  }

  const handleContinueShopping = () => {
    setShowConfirmationModal(false);
  };

  const handleProceedToCheckout = () => {
    setShowConfirmationModal(false);
    router.push(`/checkout?courseId=${course.id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1C1D1F] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{course.instructor.name}</p>
                    <p className="text-sm text-gray-400">{course.instructor.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>{course.instructor.rating}</span>
                  <span className="text-gray-400">({course.instructor.reviews} ratings)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold">Course Content</h2>
                      <div className="text-sm text-gray-500">
                        {course.stats.sections} sections • {course.stats.lectures} lectures • {course.stats.duration} total length
                      </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      {course.chapters.map((chapter, index) => (
                        <AccordionItem key={index} value={`chapter-${index}`}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-col items-start">
                              <div className="font-semibold">{chapter.title}</div>
                              <div className="text-sm text-gray-500">
                                {chapter.videos} • {chapter.duration}
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {chapter.lessons.map((lesson, lessonIndex) => (
                                <div 
                                  key={lessonIndex}
                                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                                >
                                  <div className="flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5 text-gray-500" />
                                    <span className={lesson.isPreview ? "text-[#3dcbb1]" : ""}>
                                      {lesson.title}
                                      {lesson.isPreview && " (Preview)"}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="description">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Description</h2>
                    <p className="text-gray-700 whitespace-pre-wrap">{course.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        <span className="text-3xl font-bold">{course.instructor.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(course.instructor.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Course Rating • {course.instructor.reviews} Reviews
                      </div>
                    </div>
                    {course.reviews.map((review) => (
                      <div key={review.id} className="flex gap-4 pb-6 border-b last:border-0 last:pb-0">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.user} />
                          <AvatarFallback>{review.user[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium text-[#3dcbb1]">{review.user}</h3>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-4">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Course preview"
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold">US${course.price.current}</span>
                      <span className="text-gray-500 line-through">US${course.price.original}</span>
                    </div>
                    <div className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                      {course.price.discount}% OFF
                    </div>
                  </div>

                  <Button 
                    onClick={handleEnroll} 
                    className="w-full mb-4 bg-[#3dcbb1] hover:bg-[#35b69e] h-12"
                  >
                    Buy now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full mb-6 h-12"
                  >
                    Add to wishlist
                  </Button>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-gray-500" />
                      <span>{course.stats.sections} sections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-5 h-5 text-gray-500" />
                      <span>{course.stats.lectures} lectures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span>{course.stats.duration} total length</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-gray-500" />
                      <span>{course.stats.language}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmationModal} onOpenChange={setShowConfirmationModal}>
        <DialogContent className="sm:max-w-md p-6">
          <DialogHeader>
            <DialogTitle>Add to Cart</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Course added to cart successfully!
          </DialogDescription>
          <DialogFooter>
            <Button variant="default" onClick={handleContinueShopping}>Continue Shopping</Button>
            <Button variant="primary" onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
