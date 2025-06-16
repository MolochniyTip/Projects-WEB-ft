export default function PromoSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Content */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dołącz i skorzystaj z wyjątkowych zniżek</h2>
            <p className="text-gray-100 text-xl mb-8">
              Dostęp do kursów na wszystkich urządzeniach, w aplikacji mobilnej i na komputerze
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Adres email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Subskrybuj
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="relative w-64 h-64">
              <div className="absolute right-0 top-0 w-32 h-32 bg-pink-500 rounded-full opacity-20" />
              <div className="absolute right-16 top-16 w-24 h-24 bg-yellow-500 rounded-full opacity-20" />
              <div className="absolute right-8 top-8 w-16 h-16 bg-green-500 rounded-full opacity-20" />
              <div className="absolute right-24 top-24 w-20 h-20 bg-blue-500 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
