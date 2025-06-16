'use client'

import { useState } from 'react'
import { useAuth } from '@/app/store/auth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Users, DollarSign, BookOpen, Search, Layout, MessageSquare, TrendingUp, PenToolIcon as Tool, Video, Info, Bell, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function InstructorDashboard() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [showNotification, setShowNotification] = useState(true)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  const stats = [
    { title: 'Wszyscy studenci', value: '5,739', icon: Users },
    { title: 'Całkowity przychód', value: '12,593 zł', icon: DollarSign },
    { title: 'Kursy', value: '8', icon: BookOpen },
    { title: 'Średnia ocena', value: '4.8', icon: BarChart },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-[#1C1D1F] text-white fixed h-full transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-20'}`}>
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#3dcbb1] rounded-lg" />
            {sidebarExpanded && <span className="text-xl font-semibold">MyCourse.io</span>}
          </Link>
          
          <nav className="space-y-2">
            <Link href="/instructor/courses" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
              <Layout className="w-5 h-5" />
              {sidebarExpanded && <span>Kursy</span>}
            </Link>
            <Link href="/instructor/communication" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
              <MessageSquare className="w-5 h-5" />
              {sidebarExpanded && <span>Komunikacja</span>}
            </Link>
            <Link href="/instructor/performance" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
              <TrendingUp className="w-5 h-5" />
              {sidebarExpanded && <span>Wydajność</span>}
            </Link>
            <Link href="/instructor/tools" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
              <Tool className="w-5 h-5" />
              {sidebarExpanded && <span>Narzędzia</span>}
            </Link>
            <Link href="/instructor/resources" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
              <Info className="w-5 h-5" />
              {sidebarExpanded && <span>Zasoby</span>}
            </Link>
          </nav>
        </div>
        <button
          className="absolute top-1/2 -right-3 bg-[#1C1D1F] text-white p-1 rounded-full"
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
        >
          {sidebarExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarExpanded ? 'ml-64' : 'ml-20'} flex-1 flex flex-col`}>
        {/* New Header */}
        <header className="bg-white shadow-sm py-4 px-8 flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-sm font-medium">Uczestnik kursu</Link>
            <Avatar>
              <AvatarImage src={user?.avatar || "/placeholder.svg?height=32&width=32"} alt={user?.name || "User avatar"} />
              <AvatarFallback>{user?.name?.[0].toUpperCase() || "U"}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="flex-1 p-8">
          {showNotification && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#E4EDF2] text-[#2D3B45] px-3 py-1 rounded text-sm">
                      Nowość
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ulepszyliśmy testy praktyczne, aby instruktorzy mogli ulepszyć swoje.</h3>
                      <p className="text-gray-600 mb-4">
                        Zmaksymalizuj potencjał swoich testów praktycznych przygotowujących do certyfikacji dzięki udoskonalonemu procesowi
                        tworzenia testów, nowym typom pytań i funkcjom opartym na generatywnej AI.
                      </p>
                      <div className="flex gap-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="default">Dowiedz się więcej</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Ulepszone testy praktyczne</DialogTitle>
                            </DialogHeader>
                            <p>
                              Nasze nowe testy praktyczne oferują:
                              <ul className="list-disc pl-5 mt-2">
                                <li>Zaawansowane typy pytań</li>
                                <li>Integrację z AI dla lepszej analizy odpowiedzi</li>
                                <li>Szczegółowe raporty wyników</li>
                                <li>Personalizowane ścieżki nauki</li>
                              </ul>
                            </p>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" onClick={() => setShowNotification(false)}>Zamknij</Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setShowNotification(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Wyszukaj swoje kursy"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Select defaultValue="latest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sortuj według" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Najnowsze</SelectItem>
                  <SelectItem value="popular">Najpopularniejsze</SelectItem>
                  <SelectItem value="rating">Najwyżej oceniane</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-[#A435F0] hover:bg-[#8710ED] text-white h-12 px-6">
              Nowy kurs
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-gray-600">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Course Progress */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Course thumbnail"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Tworzenie pluginu do minecraft</h3>
                  <div className="text-sm text-gray-500 mb-2">TRYB ROBOCZY • Publiczna</div>
                  <Progress value={33} className="h-2" />
                  <div className="text-sm text-gray-600 mt-2">Dokończ swój kurs</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Getting Started Grid */}
          <h2 className="text-2xl font-bold mb-6">Utwórz atrakcyjny kurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Start with video"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-semibold mb-2">Zacznij od filmu</h3>
                <p className="text-gray-600 mb-4">
                  Wykłady wideo o wysokiej jakości mogą zapewnić Twojemu kursowi sukces. Skorzystaj z naszych zasobów, aby opanować podstawy.
                </p>
                <Button variant="link" className="text-[#A435F0] p-0">
                  Rozpocznij
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Get audience"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-semibold mb-2">Zdobywaj odbiorców</h3>
                <p className="text-gray-600 mb-4">
                  Zapewnij sukces swojego kursu, budując grupę odbiorców.
                </p>
                <Button variant="link" className="text-[#A435F0] p-0">
                  Rozpocznij
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Join challenge"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-semibold mb-2">Dołącz do wyzwania dla nowych instruktorów!</h3>
                <p className="text-gray-600 mb-4">
                  Skorzystaj z wyjątkowych wskazówek i zasobów, które pomogą Ci szybciej opublikować pierwszy kurs.
                </p>
                <Button variant="link" className="text-[#A435F0] p-0">
                  Rozpocznij
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Resources */}
          <h2 className="text-lg text-gray-600 mb-6">
            Masz pytania? Oto nasze najbardziej popularne materiały dla instruktorów.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Link href="/instructor/test-video" className="flex flex-col items-center text-center">
              <Video className="w-8 h-8 text-[#A435F0] mb-2" />
              <span className="text-sm font-medium">Film testowy</span>
              <span className="text-xs text-gray-500">Prześlij nam film testowy i otrzymaj opinię eksperta.</span>
            </Link>
            
            <Link href="/instructor/community" className="flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-[#A435F0] mb-2" />
              <span className="text-sm font-medium">Społeczność instruktorów</span>
              <span className="text-xs text-gray-500">Nawiązuj kontakty z doświadczonymi instruktorami.</span>
            </Link>

            <Link href="/instructor/teaching-center" className="flex flex-col items-center text-center">
              <BookOpen className="w-8 h-8 text-[#A435F0] mb-2" />
              <span className="text-sm font-medium">Teaching Center</span>
              <span className="text-xs text-gray-500">Poznaj sprawdzone metody nauczania.</span>
            </Link>

            <Link href="/instructor/market-insights" className="flex flex-col items-center text-center">
              <TrendingUp className="w-8 h-8 text-[#A435F0] mb-2" />
              <span className="text-sm font-medium">Spostrzeżenia z rynku</span>
              <span className="text-xs text-gray-500">Zweryfikuj temat swojego kursu.</span>
            </Link>

            <Link href="/instructor/help" className="flex flex-col items-center text-center">
              <Tool className="w-8 h-8 text-[#A435F0] mb-2" />
              <span className="text-sm font-medium">Pomoc techniczna</span>
              <span className="text-xs text-gray-500">Skontaktuj się z zespołem pomocy technicznej.</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
