import Link from 'next/link'

const lessons = [
  { id: 1, title: 'Wprowadzenie do kursu', completed: true },
  { id: 2, title: 'Podstawowe koncepcje', completed: true },
  { id: 3, title: 'Zaawansowane techniki', completed: false },
  { id: 4, title: 'Praktyczne zastosowania', completed: false },
  { id: 5, title: 'Podsumowanie i quiz końcowy', completed: false },
]

export default function Course({ params }: { params: { id: string } }) {
  const progress = (lessons.filter(lesson => lesson.completed).length / lessons.length) * 100

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Kurs #{params.id}</h1>
      <div className="mb-6">
        <div className="bg-gray-200 h-4 rounded-full">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Postęp: {progress.toFixed(0)}%</p>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id} className="border-b last:border-b-0">
              <Link href={`/course/${params.id}/lesson/${lesson.id}`} className="block p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full mr-4 flex items-center justify-center ${lesson.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {lesson.completed && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={lesson.completed ? 'text-gray-600' : 'font-semibold'}>{lesson.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
