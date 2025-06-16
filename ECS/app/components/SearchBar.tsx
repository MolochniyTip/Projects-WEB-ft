"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"

export default function SearchBar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("")
  const [topic, setTopic] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Build search params
    const params = new URLSearchParams()
    if (searchQuery) params.append("q", searchQuery)
    if (category) params.append("category", category)
    if (topic) params.append("topic", topic)

    // Navigate to search page with parameters
    router.push(`/search?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 mx-auto max-w-6xl">
      <h2 className="text-xl font-semibold mb-6">Czego chcesz się nauczyć?</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <input
          type="text"
          placeholder="Znajdź kursy, umiejętności, oprogramowanie itp."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:col-span-5 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="md:col-span-3 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
        >
          <option value="">Kategorie</option>
          <option value="design">Design</option>
          <option value="programming">Programowanie</option>
          <option value="business">Biznes</option>
        </select>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
        >
          <option value="">Temat</option>
          <option value="ui">UI Design</option>
          <option value="web">Web Dev</option>
          <option value="mobile">Mobile Dev</option>
        </select>
        <button
          type="submit"
          className="md:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          Szukaj
        </button>
      </div>
    </form>
  )
}
