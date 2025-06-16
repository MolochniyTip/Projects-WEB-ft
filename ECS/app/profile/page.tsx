export default function Profile() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profil użytkownika</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img src="/placeholder.svg?height=100&width=100" alt="Avatar" className="w-24 h-24 rounded-full mr-6" />
          <div>
            <h2 className="text-2xl font-semibold">Jan Kowalski</h2>
            <p className="text-gray-600">jan.kowalski@example.com</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Ukończone kursy</h3>
        <ul className="list-disc list-inside">
          <li>Wprowadzenie do programowania</li>
          <li>Podstawy marketingu cyfrowego</li>
        </ul>
      </div>
    </div>
  )
}
