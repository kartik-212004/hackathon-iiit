import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveillanceFeed from './SurveillanceFeed';
import SearchMissingPersons from './SearchMissingPersons';
import Home from './Home';
import NotFound from './NotFound';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="bg-blue-500 text-white text-center py-12 flex-shrink-0">
          <h2 className="text-4xl font-semibold">Real-time Face Recognition Surveillance</h2>
          <p className="text-lg mt-4">Monitor and identify missing persons at Simhastha Ujjain</p>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surveillance" element={<SurveillanceFeed />} />
            <Route path="/search" element={<SearchMissingPersons />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Navigation Bar */}
        <nav className="bg-blue-600 p-4 text-white fixed bottom-0 left-0 right-0">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">Simhastha Surveillance System</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/surveillance" className="hover:underline">Surveillance</a></li>
              <li><a href="/search" className="hover:underline">Search</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
