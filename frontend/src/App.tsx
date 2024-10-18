
import SurveillanceFeed from './SurveillanceFeed';
import SearchMissingPersons from './SearchMissingPersons';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Simhastha Surveillance System</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Surveillance</a></li>
            <li><a href="#" className="hover:underline">Search</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-blue-500 text-white text-center py-12">
        <h2 className="text-4xl font-semibold">Real-time Face Recognition Surveillance</h2>
        <p className="text-lg mt-4">Monitor and identify missing persons at Simhastha Ujjain</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Surveillance Feed */}
          <SurveillanceFeed />

          {/* Search Missing Persons */}
          <SearchMissingPersons />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>© 2024 Simhastha Surveillance. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
