import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#3dcbb1]">
            MyCourse.io
          </Link>
          <Button variant="outline" asChild>
            <Link href="/become-instructor">
              Back to Instructor Page
            </Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
