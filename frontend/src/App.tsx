import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Surveillance from "./SurveillanceFeed"
import SearchMissingPersons from "./SearchMissingPersons"
import Home from "./Home"
import NotFound from "./NotFound"
import AboutUs from "./About"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white text-center py-12 flex-shrink-0">
          <h2 className="text-4xl font-semibold">
            Real-time Face Recognition Surveillance
          </h2>
          <p className="text-lg mt-4">
            Monitor and identify missing persons and objects
          </p>
        </header>

        <main className="container mx-auto py-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surveillance" element={<Surveillance/>} />
            <Route path="/search" element={<SearchMissingPersons />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <nav className="bg-blue-600 p-4 text-white fixed bottom-0 left-0 right-0">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">Surveillance System</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/surveillance" className="hover:underline">
                  Surveillance
                </a>
              </li>
              <li>
                <a href="/search" className="hover:underline">
                  Search
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  )
}

export default App
